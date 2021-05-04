import arrayCards from "./arrayCards.js";

const rootRef = document.querySelector(".wrapper__root__wrapper__cards");
const audioEffectRef = document.querySelector(".audio_Effect");
let cardRef;
let doubledCardRef;
let contentDivRef;
let doubledContentDivRef;
let firstCard;
let secondCard;
const arrayFlipCards = [];
arrayCards.length = 6;

const RenderCardsFn = (arrayCards) => {
  const result = arrayCards.map((item) => {
    cardRef = document.createElement("div");
    cardRef.classList.add("root__wrapper__cards__card");
    contentDivRef = document.createElement("div");
    contentDivRef.classList.add("root__wrapper__cards__card__content");
    const frontSideRef = document.createElement("img");
    frontSideRef.setAttribute("src", item.src);
    frontSideRef.setAttribute("alt", item.name);
    frontSideRef.setAttribute("data-index", item.id);
    frontSideRef.classList.add(
      "root__wrapper__cards__card__content__frontSide"
    );
    const backSideRef = document.createElement("img");
    backSideRef.setAttribute("src", "../img/card_background.png");
    backSideRef.setAttribute("alt", "Backside_Card");
    backSideRef.classList.add("root__wrapper__cards__card__content__backSide");
    contentDivRef.append(backSideRef, frontSideRef);
    cardRef.append(contentDivRef);

    doubledCardRef = document.createElement("div");
    doubledCardRef.classList.add("root__wrapper__cards__card");
    doubledContentDivRef = document.createElement("div");
    doubledContentDivRef.classList.add("root__wrapper__cards__card__content");
    const doubledFrontSideRef = document.createElement("img");
    doubledFrontSideRef.setAttribute("src", item.src);
    doubledFrontSideRef.setAttribute("alt", item.name);
    doubledFrontSideRef.setAttribute("data-index", item.id);
    doubledFrontSideRef.classList.add(
      "root__wrapper__cards__card__content__frontSide"
    );
    const doubledBackSideRef = document.createElement("img");
    doubledBackSideRef.setAttribute("src", "../img/card_background.png");
    doubledBackSideRef.setAttribute("alt", "Backside_Card");
    doubledBackSideRef.classList.add(
      "root__wrapper__cards__card__content__backSide"
    );
    doubledContentDivRef.append(doubledBackSideRef, doubledFrontSideRef);
    doubledCardRef.append(doubledContentDivRef);
    cardRef.style.order = Math.round(Math.random() * arrayCards.length);
    doubledCardRef.style.order = Math.round(Math.random() * arrayCards.length);
    return rootRef.append(cardRef, doubledCardRef);
  });
  return result;
};
console.log(RenderCardsFn(arrayCards));

const openCard = (item) => {
  audioEffectRef.play();
  audioEffectRef.volume = 0.5;
  item.parentNode.classList.add("rotate--card");
  item.parentNode.classList.add('pointer0');
  item.parentNode.parentNode.classList.add('pointer0');
};

const closeCard = (item) => {
  setTimeout(() => {
    audioEffectRef.play();
    item.parentNode.classList.remove("rotate--card");
    item.parentNode.classList.remove('pointer0');
    item.parentNode.parentNode.classList.remove('pointer0');
  }, 1000);
};


const onClick = (event) => {
  openCard(event.target);
  arrayFlipCards.push(event.target.parentNode);
  if (arrayFlipCards.length > 2) {
    closeCard(event.target);
  }
  if (arrayFlipCards.length === 2) {
    firstCard = +arrayFlipCards[0].lastElementChild.dataset.index;
    secondCard = +arrayFlipCards[1].lastElementChild.dataset.index;
    console.log("перша картка", firstCard);
    console.log("Друга картка", secondCard);
    if (firstCard === secondCard) {
      getPairCards(arrayFlipCards[0], arrayFlipCards[1]);
    } else {
      inCorectPairCards(arrayFlipCards[0], arrayFlipCards[1]);
    }
    return arrayFlipCards.splice(0);
  }
};

const getPairCards = (Card1, Card2) => {
  setTimeout(() => {
    Card1.classList.add('close_icon');
    Card2.classList.add("close_icon");
    }, 1000);
};

const inCorectPairCards = (Card1, Card2) => {
  closeCard(Card1.firstElementChild);
  closeCard(Card2.firstElementChild);
};

rootRef.addEventListener("click", onClick);
