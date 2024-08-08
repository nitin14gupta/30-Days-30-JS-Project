const optBtn = document.querySelectorAll('.opt-btn');
const answerBtn = document.querySelectorAll('.answer-btn');
const btn = document.querySelector('.btn');
const question = document.querySelector('.question');

const questionsMain = [
    {
        questions: 'Smallest Country in the World',
        answers: [
            { text: 'India', correct: false },
            { text: 'England', correct: false },
            { text: 'Nigeria', correct: false },
            { text: 'Vatican City', correct: true }
        ]
    },
    {
        questions: 'Capital of Japan',
        answers: [
            { text: 'Seoul', correct: false },
            { text: 'Tokyo', correct: true },
            { text: 'Beijing', correct: false },
            { text: 'Bangkok', correct: false }
        ]
    },
    {
        questions: 'Longest River in the World',
        answers: [
            { text: 'Amazon', correct: false },
            { text: 'Nile', correct: true },
            { text: 'Mississippi', correct: false },
            { text: 'Yangtze', correct: false }
        ]
    },
    {
        questions: 'Fastest Land Animal',
        answers: [
            { text: 'Cheetah', correct: true },
            { text: 'Lion', correct: false },
            { text: 'Tiger', correct: false },
            { text: 'Leopard', correct: false }
        ]
    },
    {
        questions: 'Largest Ocean in the World',
        answers: [
            { text: 'Indian Ocean', correct: false },
            { text: 'Atlantic Ocean', correct: false },
            { text: 'Arctic Ocean', correct: false },
            { text: 'Pacific Ocean', correct: true }
        ]
    },
    {
        questions: 'Highest Mountain in the World',
        answers: [
            { text: 'K2', correct: false },
            { text: 'Kangchenjunga', correct: false },
            { text: 'Mount Everest', correct: true },
            { text: 'Lhotse', correct: false }
        ]
    }
]


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    btn.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    let question = currentQuestion.questions;
}

