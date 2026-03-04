let countdown;
let timeLeft;

const cards = [
    { image: "2C.png", type: "number", value: 2 },
    { image: "2D.png", type: "number", value: 2 },
    { image: "2H.png", type: "number", value: 2 },
    { image: "2S.png", type: "number", value: 2 },
    { image: "3C.png", type: "number", value: 3 },
    { image: "3D.png", type: "number", value: 3 },
    { image: "3H.png", type: "number", value: 3 },
    { image: "3S.png", type: "number", value: 3 },
    { image: "4C.png", type: "number", value: 4 },
    { image: "4D.png", type: "number", value: 4 },
    { image: "4H.png", type: "number", value: 4 },
    { image: "4S.png", type: "number", value: 4 },
    { image: "5C.png", type: "number", value: 5 },
    { image: "5D.png", type: "number", value: 5 },
    { image: "5H.png", type: "number", value: 5 },
    { image: "5S.png", type: "number", value: 5 },
    { image: "6C.png", type: "number", value: 6 },
    { image: "6D.png", type: "number", value: 6 },
    { image: "6H.png", type: "number", value: 6 },
    { image: "6S.png", type: "number", value: 6 },
    { image: "7C.png", type: "number", value: 7 },
    { image: "7D.png", type: "number", value: 7 },
    { image: "7H.png", type: "number", value: 7 },
    { image: "7S.png", type: "number", value: 7 },
    { image: "8C.png", type: "number", value: 8 },
    { image: "8D.png", type: "number", value: 8 },
    { image: "8H.png", type: "number", value: 8 },
    { image: "8S.png", type: "number", value: 8 },
    { image: "9C.png", type: "number", value: 9 },
    { image: "9D.png", type: "number", value: 9 },
    { image: "9H.png", type: "number", value: 9 },
    { image: "9S.png", type: "number", value: 9 },
    { image: "10C.png", type: "number", value: 10 },
    { image: "10D.png", type: "number", value: 10 },
    { image: "10H.png", type: "number", value: 10 },
    { image: "10S.png", type: "number", value: 10 },
    { image: "AC.png", type: "number", value: 1 },
    { image: "AD.png", type: "number", value: 1 },
    { image: "AH.png", type: "number", value: 1 },
    { image: "AS.png", type: "number", value: 1 },
    { image: "JC.png", type: "break", breakTime: 5 },
    { image: "JD.png", type: "break", breakTime: 5 },
    { image: "JH.png", type: "break", breakTime: 5 },
    { image: "JS.png", type: "break", breakTime: 5 },
    { image: "KC.png", type: "break", breakTime: 20 },
    { image: "KD.png", type: "break", breakTime: 20 },
    { image: "KH.png", type: "break", breakTime: 20 },
    { image: "KS.png", type: "break", breakTime: 20 },
    { image: "QC.png", type: "break", breakTime: 10 },
    { image: "QD.png", type: "break", breakTime: 10 },
    { image: "QH.png", type: "break", breakTime: 10 },
    { image: "QS.png", type: "break", breakTime: 10 },
    { image: "JB.png", type: "joker" },
    { image: "JR.png", type: "joker" }
];


function startTimer() {
    selectCard(false);
}

function selectCard(isDouble) {
    const randomIndex = Math.floor(Math.random() * 54);
    const selectedCard = cards[randomIndex];

    const cardImage = document.getElementById("cardImage");
    const message = document.getElementById("message");

    cardImage.src = selectedCard.image;
    cardImage.style.display = "block";
    message.textContent = "";

    if (selectedCard.type === "joker") {
        message.textContent = "Joker! Next card is doubled!";

        setTimeout(() => {
            selectCard(true);
        }, 3000);
    
        return;
    }

    if (selectedCard.type === "break") {
        timeLeft = selectedCard.breakTime * 60;
        message.textContent = `Break time! ${selectedCard.breakTime} minutes`;

        Countdown();
        return;
    }

    if (selectedCard.type === "number") {
        let minutes = selectedCard.value * 10;

        if (isDouble) {
            minutes *= 2;
            message.textContent = `Double time! ${minutes} minutes `;
        } else {
            message.textContent = `${minutes} minutes study time`;
        }

        timeLeft = minutes * 60;
        Countdown();
    }
}

function Countdown() {

    Update
();

    countdown = setInterval(() => {
        timeLeft--;
        Update
    ();

        if (timeLeft <=0) {
            clearInterval(countdown);
            Finish();
        }

        setTimeout(() => {
            document.getElementById("message").textContent = "";
    }, 4000);
        
    }, 1000);
}

function Update() {

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("timerDisplay").textContent =
     minutes + ":" + formattedSeconds;
}

function Finish() {
    document.body.innerHTML += "<h1>🏁 FinishED 🏁</h1>";
}

function stopTimer() {
    clearInterval(countdown);
}
