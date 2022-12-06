const quizData = [
    {
        question: "What are the characteristics of GitHub Pages?",
        a: "databases",
        b: "need of servers",
        c: "don't know HTML",
        d: "know CSS",
        correct: "c",
    },
    {
        question: "What is required to use Jekyll?",
        a: "Ruby",
        b: "Buby",
        c: "Raby",
        d: "Gemy",
        correct: "a",
    },
    {
        question: "Where can I manage the configuration of a project in the jekyll file?",
        a: ".gitignore",
        b: "_config.yml",
        c: "Gemfile",
        d: "Gemfile.lock",
        correct: "b",
    },
    {
        question: "____ is a templating language used in Jekyll to process your site’s pages. What are the blanks?",
        a: "Liquid",
        b: "Solid",
        c: "Gas",
        d: "none of the above",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})