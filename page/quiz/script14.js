const quizData = [
    {
        question: "What challenge is ML Solution facing?",
        a: "black box",
        b: "white box",
        c: "red box",
        d: "yellow box",
        correct: "a",
    },
    {
        question: "What is MLOps?",
        a: "MLOps is an experiment tracker and generic model server.",
        b: "MLOps is an approach to managing machine learning projects.",
        c: "MLOps is an approach essentially refers to a linear sequence of stages to develop a system from planning to analysis to design to implementation",
        d: "MLOps is a set of practices that combines software development (Dev) and IT operations (Ops). ",
        correct: "b",
    },
    {
        question: "Which of the following is not a component of MLFlow?",
        a: "Record and query experiments: code, data, config, and results",
        b: " Package data science code in a format to reproduce runs on only particular platform",
        c: "Deploy machine learning models in diverse serving environments",
        d: "Store, annotate, discover, and manage models in a central repository",
        correct: "b",
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