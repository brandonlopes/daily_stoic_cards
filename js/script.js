let root = document.documentElement;

let cardContainer = document.getElementById("cardContainer");
cardContainer.addEventListener("click", function (e) {
    cardFlip();
    e.stopPropagation();
});

let modal = document.getElementById("modal");
modal.addEventListener("click", closeModal);

function getColorCode(color) {
    return cardColors[color];
}

function findCardColor(color) {
    return cardList.filter(
        function (cardList) { return cardList.color === color }
    );
}

document.body.onload = () => {
    // let randomNumber = Math.floor(Math.random() * (cardList.length - 1))
    // let randomCard = cardList[randomNumber];

    let blueCards = findCardColor("blue");
    let greenCards = findCardColor("green");
    let purpleCards = findCardColor("purple");

    let sortedCardList = blueCards.concat(greenCards).concat(purpleCards);

    for (let i = 0; i < cardList.length; i++) {
        drawCardPreview(sortedCardList[i]);
    }
};

function cardFlip() {
    document.getElementById("cardFront").classList.toggle("card-front-flip");
    document.getElementById("cardBack").classList.toggle("card-back-flip");
}

function resetCard() {
    document.getElementById("cardFront").classList.remove("card-front-flip");
    document.getElementById("cardBack").classList.remove("card-back-flip");
}

function drawCardPreview(card) {
    let cardPreviewList = document.getElementById("previewList");
    let cardPreview = document.createElement("div");
    let previewIcon = document.createElement("i");
    previewIcon.style.color = getColorCode(card.color);

    previewIcon.addEventListener("click", () => {
        drawCard(card);
        toggleModal();
    });

    previewIcon.innerText = card.icon;
    previewIcon.classList.add("material-icons")

    cardPreview.appendChild(previewIcon);
    cardPreviewList.appendChild(cardPreview);
}

function drawCard(card) {
    let cardContainer = document.getElementById("cardContainer");
    summonCard(cardContainer);

    let cardIcon = document.getElementById("cardIcon");
    let cardTask = document.getElementById("cardTask");
    let cardDescription = document.getElementById("cardDescription");
    let cardQuote = document.getElementById("cardQuote");

    setTimeout(function () {
        root.style.setProperty("--card-color", cardColors[card.color]);
        cardTask.textContent = card.task;
        cardDescription.innerText = card.description;
        cardQuote.innerText = `"${card.quote}" \n — ${card.author}`;
        cardIcon.innerText = card.icon;
    }, 250);
}

function summonCard(cardContainer) {
    cardContainer.classList.add("hidden");
    setTimeout(function () { cardContainer.classList.remove("hidden"); }, 200);
}

function toggleModal() {
    modal.classList.toggle("display");
}

function closeModal() {
    modal.classList.remove("display");
    resetCard();
}