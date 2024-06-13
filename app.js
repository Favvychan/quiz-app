const questions = [
    {
        question: "What is blockchain?",
        answers: [
            { text: "A type of cryptocurrency", correct: false },
            { text: "A decentralized digital ledger", correct: true },
            { text: "A programming language", correct: false }
        ]
    },
    {
        question: "What is the primary function of smart contracts?",
        answers: [
            { text: "To create traditional contracts", correct: false },
            { text: "To automatically execute agreements when conditions are met", correct: true },
            { text: "To store private keys", correct: false }
        ]
    },
      {
        question: "Which consensus algorithm does Bitcoin use?",
        answers: [
            { text: "Proof of Stake", correct: false },
            { text: "Proof of Work", correct: true },
            { text: "Delegated Proof of Stake", correct: false }
        ]
    },
    {
        question: "What does 'Web3' refer to?",
        answers: [
            { text: "A new version of HTML", correct: false },
            { text: "The decentralized internet powered by blockchain technology", correct: true },
            { text: "A new type of web browser", correct: false }
        ]
    },
    {
        question: "Which cryptocurrency is known as 'digital gold'?",
        answers: [
            { text: "Ethereum", correct: false },
            { text: "Bitcoin", correct: true },
            { text: "Ripple", correct: false }
        ]
    },
    {
        question: "What is the purpose of a 'wallet' in blockchain?",
        answers: [
            { text: "To store fiat currency", correct: false },
            { text: "To store and manage digital assets", correct: true },
            { text: "To connect to the internet", correct: false }
        ]
    },
    {
        question: "What is an NFT?",
        answers: [
            { text: "A non-fungible token representing unique digital assets", correct: true },
            { text: "A type of cryptocurrency", correct: false },
            { text: "A new web protocol", correct: false }
        ]
    },
    {
        question: "Which blockchain platform is known for supporting smart contracts?",
        answers: [
            { text: "Bitcoin", correct: false },
            { text: "Ethereum", correct: true },
            { text: "Litecoin", correct: false }
        ]
    },
    {
        question: "What does 'DeFi' stand for?",
        answers: [
            { text: "Decentralized Finance", correct: true },
            { text: "Digital Finance", correct: false },
            { text: "Distributed Finance", correct: false }
        ]
    },
    {
        question: "Which technology ensures the security and integrity of blockchain data?",
        answers: [
            { text: "Cryptography", correct: true },
            { text: "Cloud computing", correct: false },
            { text: "Machine learning", correct: false }
        ]
    },
    {
        question: "What is a DAO?",
        answers: [
            { text: "A Decentralized Autonomous Organization", correct: true },
            { text: "A type of blockchain consensus mechanism", correct: false },
            { text: "A digital currency", correct: false }
        ]
    },
    {
        question: "Which term describes the process of verifying transactions in a blockchain?",
        answers: [
            { text: "Mining", correct: true },
            { text: "Staking", correct: false },
            { text: "Hashing", correct: false }
        ]
    },
    {
        question: "What does 'ERC-20' refer to?",
        answers: [
            { text: "A type of smart contract standard on the Ethereum blockchain", correct: true },
            { text: "A new cryptocurrency", correct: false },
            { text: "A blockchain-based application", correct: false }
        ]
    },
    {
        question: "Which feature of blockchain ensures transparency?",
        answers: [
            { text: "Centralization", correct: false },
            { text: "Immutable ledger", correct: true },
            { text: "High transaction fees", correct: false }
        ]
    },
    {
        question: "What is the purpose of a 'node' in a blockchain network?",
        answers: [
            { text: "To store data and validate transactions", correct: true },
            { text: "To create smart contracts", correct: false },
            { text: "To mine cryptocurrency", correct: false }
        ]
    }
];
    


let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const submitButton = document.getElementById("submit-btn");
const resultModal = document.getElementById("result-modal");
const resultText = document.getElementById("result-text");
const closeBtn = document.querySelector(".close-btn");

submitButton.addEventListener("click", showResult);
closeBtn.addEventListener("click", () => {
    resultModal.style.display = "none";
});

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    submitButton.style.display = "none";
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = "";
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
    if (correct) {
        score++;
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
    });
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        setTimeout(() => showQuestion(questions[currentQuestionIndex]), 1000);
    } else {
        submitButton.style.display = "block";
    }
}


function showResult() {
    resultText.innerText ="You got " + "  " + score + " " + "out of" + " " + questions.length;
    resultModal.style.display = "flex";
}

startQuiz();