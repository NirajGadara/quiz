$(document).ready(function () {
    $(".question_number").hide();
    $(".customized_btn").hide();
    $(".submit_btn2").hide();
    $(".quiz_section").hide();
    $(".default_btn").hide();
    $(".start_btn").click(function () {
        $(".question_number").slideDown();
        $(".customized_btn").show();
        $(".default_btn").show();
        $(".start_btn").hide();
    })
})

$(document).ready(function () {
    $(".default_btn").click(function () {
        $(".quiz_section").show();
        $(".default_btn").hide();
        $(".question_number").hide();
        $(".customized_btn").hide();
    })
})

$(document).ready(function () {

    $(".user_inputs").hide();
    $(".customized_btn").click(function () {
            $(".customized_btn").hide();
            $(".user_inputs").slideDown();
            $(".question_number").hide();
            $(".submit_btn2").show();
            $(".default_btn").hide();
    })
})

$(document).ready(function(){
    $(".submit_btn2").click(function () {
        $(".user_inputs").hide();
        $(".submit_btn2").hide();
    })
})


function myForm(){

    let User_name = document.getElementById("user_name").value;
    let user_name = localStorage.setItem("USERNAME",User_name);    

    let Question = document.getElementById("question").value;
    let question = localStorage.setItem("Question",Question); 
}

const quizDB = [
    {
        question: "Which of the following can read and render HTML web pages",
        a: "Server",
        b: "head Tak",
        c: "web browser",
        d: "empty",
        correct: "c"
         
    },
    {
        question: "Identify the range of byte data types in JavaScript.",
        a: "-10 to 9",
        b: "- 128 to 127",
        c: "-32768 to 32767",
        d: "-2147483648 to 2147483647",
        correct:"b"
    },
    {
        question: " Among the following operators identify the one which is used to allocate memory to array variables in JavaScript.",
        a: "new",
        b: "new malloc",
        c: "alloc",
        d: "malloc",
        correct:"a"
    },
    {
        question: "Simple network management protocol uses which of the following port number",
        a: "164",
        b: "163", 
        c: "160",
        d: "161",
        correct:"d"
    },
    {
        question: "Identify the incorrect HTML tag among the following",
        a: "<input>",
        b: "<select>",
        c: "<list>",
        d: "<textarea>",
        correct: "c"
    },
    {
        question: "Full form of W3C is",
        a: "World Wide Websites community",
        b: "World Wide Web community",
        c: "World Wide Websites consortium",
        d: "World Wide Web consortium",
        correct: "d"
    },
    {
        question: "World Wide Web consortium",
        a: "<sup>",
        b: "<br>",
        c: "<p>",
        d: "<abbr>",
        correct: "b"
    },
    {
        question: "Which of the following attribute is used for merging two or more adjacent columns?",
        a: "ROWSPAN",
        b: "CELLSPACING",
        c: "COLSPAN",
        d: "CELLPADDING",
        correct: "c"
    },
    {
        question: "Which of the following is used to transmit information on the world wide web?",
        a: "HPPT",
        b: "HTTP",
        c: "HITTP",
        d: "HTPP",
        correct: "b"
    },
    {
        question: "A website is a _______   cookie.",
        a: "volatile",
        b: "transient",
        c: "in transient",
        d: "non-volatile",
        correct: "b"
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
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    })
    return answer;
}

submit.addEventListener('click', () => {
    const checkAns = getcheckAns();
    console.log(checkAns);

    if (checkAns === quizDB[questionNum].correct) {
        score++;
    };

    questionNum++;
    if (questionNum < quizDB.length) {
        loadQuestion();
    }

})

