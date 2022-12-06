const quizData = [
    {
        question: "_____ is a system that records changes to a set of one or more files so that earlier versions of any of these files can be restored at a later time. What are the blanks?",
        a: "VSC",
        b: "VSS",
        c: "VCS",
        d: "VCC",
        correct: "c",
    },
    {
        question: "____ is a fast and modern implementation of Version contro. What are the blanks?",
        a: "Git",
        b: "Cit",
        c: "Syphinx",
        d: "Jekyll",
        correct: "a",
    },
    {
        question: "How much space can all users store during Git Setup?",
        a: "GLOBAL",
        b: "LOCAL",
        c: "SYSTEM",
        d: "ALL",
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