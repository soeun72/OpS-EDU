const quizData = [
    {
        question: "Which is not an open source?",
        a: "Android",
        b: "Linux",
        c: "Firebase",
        d: "Window",
        correct: "a",
    },
    {
        question: "When does free software originate?",
        a: "1960",
        b: "1970",
        c: "1980",
        d: "1990",
        correct: "b",
    },
    {
        question: "What is the name of Richard Stallman's foundation?",
        a: "OSI",
        b: "FEF",
        c: "FSF",
        d: "FSI",
        correct: "c",
    },
    {
        question: "What is the legal right to give the creator of the original work the exclusive right to use and distribute it?",
        a: "Copyright",
        b: "Copyleft",
        c: "Copy",
        d: "Copylight",
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