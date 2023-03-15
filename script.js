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

    if(checkAns === quizDBDB[questionNum].ans){
        score++;
    };

    questionNum++;
    if(questionNum < quizDBDB.length){
        loadQuestion();
    }

})


// let quizDB =
// [
//     {
//         question: "Which of the following can read and render HTML web pages",
//         a: "Server",
//         b: "head Tak",
//         c: "web browser",
//         d: "empty",
//         correct: "c",
         
//     },
//     {
//         question: "Identify the range of byte data types in JavaScript.",
//         a: "-10 to 9",
//         b: "- 128 to 127",
//         c: "-32768 to 32767",
//         d: "-2147483648 to 2147483647",
//         correct:"b",
//     },
//     {
//         question: " Among the following operators identify the one which is used to allocate memory to array variables in JavaScript.",
//         a: "new",
//         b: "new malloc",
//         c: "alloc",
//         d: "malloc",
//         correct:"a",
//     },
//     {
//         question: "Simple network management protocol uses which of the following port number",
//         a: "164",
//         b: "163", 
//         c: "160",
//         d: "161",
//         correct:"d",
//     }
// ];
// let index = 0;
// let question = document.getElementById("question");
// let radio = document.querySelectorAll("input[type='radio']")
// let num = document.getElementById("num");
// let t = document.getElementById("total");
// let tt = quizDB.length;
// let c = 0;
// let w = 0; 
// function Question()
// {
//     let data = quizDB[index];
//     if(tt === index)
//     {
//        return end();
//     }
//     reset();
//     console.log("hii");
//     num.innerText = index+1;
//     t.innerText = tt;
//     question.innerHTML = `${index + 1} ${data.question}`;
//     radio[0].nextElementSibling.innerText = data.a;
//     radio[1].nextElementSibling.innerText = data.b;
//     radio[2].nextElementSibling.innerText = data.c;
//     radio[3].nextElementSibling.innerText = data.d;
// }
// function end()
// {
//     let con = document.getElementsByClassName("main_section")[0];
//     con.innerHTML = `
//     <div class="c1">
//         <h1>${c} Right From ${tt}</h1>
//     </div>
//     `;
// }
// function reset()
// {
//     radio.forEach(
//         (input) => {
//             input.checked = false;
//         }
//     )
// }
// function Sub()
// {
//     let data = quizDB[index];
//     let a = ans();
//     if( a === data.correct)
//     {
//         c++;
//     }
//     else
//     {
//         w++;
//     }
//     index++;
//     Question();
// }
// function ans()
// {
//     let a;
//     radio.forEach(
//         (input) =>
//         {
//             if(input.checked)
//             {
//                 a = input.value;
//             }
//         }
//     )
//     return a;
// }
// Question(index);