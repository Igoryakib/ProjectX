import arrayCards from "./arrayCards.js";

const rootRef = document.querySelector(".wrapper__root__wrapper__cards");
const audioEffectRef = document.querySelector('.audio_Effect');
let cardRef;
let doubledCardRef;
let contentDivRef;
let doubledContentDivRef;
arrayCards.length = 6;

const RenderCardsFn = (arrayCards) => {
  const result = arrayCards.map((item) => {
    cardRef = document.createElement("div");
    cardRef.classList.add("root__wrapper__cards__card");
    contentDivRef = document.createElement("div");
    contentDivRef.classList.add("root__wrapper__cards__card__content");
    const frontSideRef = document.createElement("img");
    frontSideRef.setAttribute('src', item.src);
    frontSideRef.setAttribute('alt', item.name);
    frontSideRef.classList.add(
      "root__wrapper__cards__card__content__frontSide"
    );
    const backSideRef = document.createElement("img");
    backSideRef.setAttribute('src', '../img/card_background.png');
    backSideRef.setAttribute('alt', 'Backside_Card');
    backSideRef.classList.add("root__wrapper__cards__card__content__backSide");
    contentDivRef.append(backSideRef, frontSideRef);
    cardRef.append(contentDivRef);

    doubledCardRef = document.createElement("div");
    doubledCardRef.classList.add("root__wrapper__cards__card");
    doubledContentDivRef = document.createElement("div");
    doubledContentDivRef.classList.add("root__wrapper__cards__card__content");
    const doubledFrontSideRef = document.createElement("img");
    doubledFrontSideRef.setAttribute('src', item.src);
    doubledFrontSideRef.setAttribute('alt', item.name);
    doubledFrontSideRef.classList.add(
      "root__wrapper__cards__card__content__frontSide"
    );
    const doubledBackSideRef = document.createElement("img");
    doubledBackSideRef.setAttribute('src', '../img/card_background.png');
    doubledBackSideRef.setAttribute('alt', 'Backside_Card');
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

const onClick = (event) => {
    audioEffectRef.play();
    audioEffectRef.volume = 0.4;
    event.target.parentNode.classList.add('rotate--card');
    setTimeout(() => {
      audioEffectRef.play();
        event.target.parentNode.classList.remove('rotate--card');
    }, 3000);
};


rootRef.addEventListener("click", onClick);
