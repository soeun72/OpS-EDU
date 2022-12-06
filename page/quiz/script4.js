const quizData = [
    {
        question: "What generates HTML pages for API documents from Java source files?",
        a: "JavaDoc",
        b: "DocFX",
        c: "GitBook",
        d: "Read the Docs",
        correct: "a",
    },
    {
        question: "What is NOT the main feature of READ THE DOC?",
        a: "Automatic Documentation Deployment",
        b: "Custom Domains & White Labeling",
        c: "Versioned Documentation",
        d: "Non-Downloadable Documents",
        correct: "d",
    },
    {
        question: "Which documentation layout does not belong to the source?",
        a: "build",
        b: "conf.py",
        c: "index.rst",
        d: "_templates",
        correct: "a",
    },
    {
        question: "Which is NOT Body Elements?",
        a: "Topic",
        b: "Code",
        c: "Rubric",
        d: "toctree",
        correct: "d",
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