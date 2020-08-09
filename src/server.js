
 
 //dados 
 const proffys = [
    { name: "Diego Fernandes", 
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
    whatsapp: 88465445, 
    bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    subject: "Química", 
    cost: "20", 
    weekday: [0], 
    time_from: [720], 
    time_to: [1220] 
    },

    { name: "Remilson Passos", 
    avatar: "https://avatars0.githubusercontent.com/u/50604232?s=460&u=455807d7edd2d53964c4ebbd630d68d34a03ecb7&v=4", 
    whatsapp: 88465445, 
    bio: "Experiência em Harvard. A mais de 10 anos ensinando os melhores", 
    subject: "Biologia", 
    cost: "60", 
    weekday: [0], 
    time_from: [720], 
    time_to: [1220] 
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado",
]

// funcionaldades
function getSubject(subjectNumber){
    const position = +subjectNumber -1
    return subjects[position]
}

function pageLanding(req, res){
    return res.render("index.html", )
}

function pageStudy(req, res){
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays } )
}

function pageGiveClasses(req, res){
    const data = req.query
     
    const isNotEmpty = Object.keys(data).length > 0

    if (isNotEmpty) {


        data.subject = getSubject(data.subject)

    //adicionar dados a lista de proffys
    proffys.push(data)

    return res.redirect("/study")
    }
    //se não mostrar a página
    return res.render("give-classes.html", { subjects, weekdays })
}
//servidor
const express = require('express')
const server = express()

//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//inicio e configuração do servidor
server

//configurar aquivos estátivos (css, images, scripts)
.use(express.static("public"))

.get("/", pageLanding)

.get("/study", pageStudy)

.get("/give-classes", pageGiveClasses)

//porta
.listen(5500);