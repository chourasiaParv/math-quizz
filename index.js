const questionEl = document.getElementById('question');

let answerStore;
const questionFormEl = document.getElementById('questionForm');
let score =0;
const scoreEl = document.getElementById('score')

const randomNum = (min , max)=>{
    return Math.floor(Math.random()* (max- min + 1)+ min)
}

const generateQuestion =()=>{
    const randomNUmber1 = randomNum(1,10)
    const randomNUmber2 = randomNum(1,10)
    
const questionType = randomNum(1,4);

let question;
let answer;

    switch(questionType){
        case 1:
            question = `Q. What is ${randomNUmber1} multiply by ${randomNUmber2}`
            answer = randomNUmber1 * randomNUmber2;
            break;
            case 2:
            question = `Q. What is ${randomNUmber1} Add to ${randomNUmber2}`
            answer = randomNUmber1 + randomNUmber2;
            break;
            case 3:
            question = `Q. What is ${randomNUmber1} Divide By ${randomNUmber2}`
            answer = randomNUmber1 / randomNUmber2;
            break;
            default:
            question = `Q. What is ${randomNUmber1} Subtract ${randomNUmber2}`
            answer = randomNUmber1 - randomNUmber2;
            break;
    }
    
    return{ question, answer}
}

const showQuestion =()=>{
    const {question,answer} = generateQuestion();
    questionEl.innerText = question;
    answerStore = answer
};
showQuestion();

const checkAnswer = (event)=>{
    event.preventDefault();
    const formData = new FormData(questionFormEl)
    const userAnswer = +formData.get('answer')
    if(userAnswer === answerStore){
       score+= 1;
       userAnswer.innerText = 0;
       if(score <0){
        scoreEl.style.color = 'red'
    }else{
        scoreEl.style.color = 'black'

    }
    }else{
        score -= 1;
        userAnswer.innerHTML = 0;
        if(score <0){
            scoreEl.style.color = 'red'
        }else{
            scoreEl.style.color = 'black'

        }
    }
    scoreEl.innerText = score;
    event.target.reset();
    showQuestion();
    console.log('answer', userAnswer);
}