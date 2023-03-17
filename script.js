const quizDB = [
    {
        question: "Q1: * ",
        a: "a )",
        b: "b )",
        c: "c )",
        d: "d )",
        ans: "ans4"
    },
    {
        question: "Q2: ** ",
        a: "a )",
        b: "b )",
        c: "c )",
        d: "d )",
        ans: "ans4"
    },
    {
        question: "Q3: *** ",
        a: "a )",
        b: "b )",
        c: "c )",
        d: "d )",
        ans: "ans4"
    },
    {
        question: "Q4: **** ",
        a: "a )",
        b: "b )",
        c: "c )",
        d: "d )",
        ans: "ans4"
    },
    {
        question: "Q5: ***** ",
        a: "a )",
        b: "b )",
        c: "c )",
        d: "d )",
        ans: "ans4"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

let questionNum = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionNum];
    
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getcheckAns = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
}

submit.addEventListener('click', () => {
    const checkAns = getcheckAns();
    console.log(checkAns);

    if(checkAns === quizDB[questionNum].ans){
        score++;
    };

    questionNum++;
    if(questionNum < quizDB.length){
        loadQuestion();
    }

})
