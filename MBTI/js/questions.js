import { questions } from './data.js'


const progressValueE1 = document.querySelector('.progress .value')
const numberE1 = document.querySelector('.number')
const questionE1 =  document.querySelector('.question')
const choice1E1 = document.querySelector('.choice1')
const choice2E1 = document.querySelector('.choice2')


// const와 let의 차이점 -  다시 할당할수 있음
let currentNumber = 0
let mbti = ' '

function renderQuestion() {
    const question = questions[currentNumber]
    numberE1.innerHTML = question.number
    questionE1.innerHTML = question.question
    choice1E1.innerHTML = question.choices[0].text
    choice2E1.innerHTML = question.choices[1].text
    progressValueE1.style.width = ( currentNumber + 1 ) * 10 + '%'
}
function nextQuestion(choiceNumber) {
    if(currentNumber === questions.length - 1){
        showResultPage()
        return
    }
    const question = questions[currentNumber]
    mbti = mbti + question.choices[choiceNumber].value
    currentNumber = currentNumber + 1    
    renderQuestion()
}
function showResultPage() {
    location.href = '/results.html?mbti='+ mbti
}
choice1E1.addEventListener('click',function () {
    nextQuestion(0)
})
choice2E1.addEventListener('click',function () {
    nextQuestion(1)
})

renderQuestion()