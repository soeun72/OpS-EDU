const quizData = [
    {
        question: "All systems have a ________ or a series of stages they naturally undergo",
        a: "Discourse",
        b: "Google Groups",
        c: "Sympa",
        d: "life cycle",
        correct: "d",
    },
    {
        question: "What is a linear sequence of stages to develop a system from planning to analysis to design to implementation?",
        a: "The waterfall approach",
        b: "DevOps",
        c: "MLOps",
        d: "MLFlow",
        correct: "a",
    },
    {
        question: "Which of the following is true about DevOps?",
        a: "DevOps is a templating language used in Jekyll to process your site’s pages.",
        b: "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops).",
        c: "DevOps is a Ruby Gem that can be installed on most systems.",
        d: "DevOps is for files/folders you don’t want to save into version control.",
        correct: "b",
    },
    {
        question: "What is one of the main DevOps concepts?",
        a: "not integrated",
        b: "short term integration",
        c: "Continuous intergradation",
        d: "none of the above",
        correct: "c",
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