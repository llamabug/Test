let countdown;
let timeLeft;

const cards = [
    { image: "/Images/2C.png", type: "number", value: 2 },
    { image: "/Images/2D.png", type: "number", value: 2 },
    { image: "/Images/2H.png", type: "number", value: 2 },
    { image: "/Images/2S.png", type: "number", value: 2 },
    { image: "/Images/3C.png", type: "number", value: 3 },
    { image: "/Images/3D.png", type: "number", value: 3 },
    { image: "/Images/3H.png", type: "number", value: 3 },
    { image: "/Images/3S.png", type: "number", value: 3 },
    { image: "/Images/4C.png", type: "number", value: 4 },
    { image: "/Images/4D.png", type: "number", value: 4 },
    { image: "/Images/4H.png", type: "number", value: 4 },
    { image: "/Images/4S.png", type: "number", value: 4 },
    { image: "/Images/5C.png", type: "number", value: 5 },
    { image: "/Images/5D.png", type: "number", value: 5 },
    { image: "/Images/5H.png", type: "number", value: 5 },
    { image: "/Images/5S.png", type: "number", value: 5 },
    { image: "/Images/6C.png", type: "number", value: 6 },
    { image: "/Images/6D.png", type: "number", value: 6 },
    { image: "/Images/6H.png", type: "number", value: 6 },
    { image: "/Images/6S.png", type: "number", value: 6 },
    { image: "/Images/7C.png", type: "number", value: 7 },
    { image: "/Images/7D.png", type: "number", value: 7 },
    { image: "/Images/7H.png", type: "number", value: 7 },
    { image: "/Images/7S.png", type: "number", value: 7 },
    { image: "/Images/8C.png", type: "number", value: 8 },
    { image: "/Images/8D.png", type: "number", value: 8 },
    { image: "/Images/8H.png", type: "number", value: 8 },
    { image: "/Images/8S.png", type: "number", value: 8 },
    { image: "/Images/9C.png", type: "number", value: 9 },
    { image: "/Images/9D.png", type: "number", value: 9 },
    { image: "/Images/9H.png", type: "number", value: 9 },
    { image: "/Images/9S.png", type: "number", value: 9 },
    { image: "/Images/10C.png", type: "number", value: 10 },
    { image: "/Images/10D.png", type: "number", value: 10 },
    { image: "/Images/10H.png", type: "number", value: 10 },
    { image: "/Images/10S.png", type: "number", value: 10 },
    { image: "/Images/AC.png", type: "number", value: 1 },
    { image: "/Images/AD.png", type: "number", value: 1 },
    { image: "/Images/AH.png", type: "number", value: 1 },
    { image: "/Images/AS.png", type: "number", value: 1 },
    { image: "/Images/JC.png", type: "break", breakTime: 5 },
    { image: "/Images/JD.png", type: "break", breakTime: 5 },
    { image: "/Images/JH.png", type: "break", breakTime: 5 },
    { image: "/Images/JS.png", type: "break", breakTime: 5 },
    { image: "/Images/KC.png", type: "break", breakTime: 20 },
    { image: "/Images/KD.png", type: "break", breakTime: 20 },
    { image: "/Images/KH.png", type: "break", breakTime: 20 },
    { image: "/Images/KS.png", type: "break", breakTime: 20 },
    { image: "/Images/QC.png", type: "break", breakTime: 10 },
    { image: "/Images/QD.png", type: "break", breakTime: 10 },
    { image: "/Images/QH.png", type: "break", breakTime: 10 },
    { image: "/Images/QS.png", type: "break", breakTime: 10 },
    { image: "/Images/JB.png", type: "joker" },
    { image: "/Images/JR.png", type: "joker" }
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
