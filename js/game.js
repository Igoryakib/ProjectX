// !!!!!!!!!Const Variable!!!!!!!!!
import arrayCards from "./arrayCards.js";

import doubleArrayCards from "./arrayCards.js";

const divWrapperRef = document.querySelector('.wrapper__music');

const musicRef = document.querySelector('.music');

const volumeRef = document.createElement('img');

const volumeRangeRef = document.querySelector('#volume_level');

volumeRef.setAttribute('src', "https://img.icons8.com/ultraviolet/80/000000/no-audio--v2.png");

volumeRef.setAttribute('alt', 'volume');

volumeRef.setAttribute('data-index', 1);

volumeRef.classList.add('background_music');

const mutedVolumeRef = document.createElement('img');

mutedVolumeRef.setAttribute('src', 'https://img.icons8.com/ultraviolet/55/000000/no-audio--v1.png');

mutedVolumeRef.setAttribute('alt', 'muted_volume');

mutedVolumeRef.setAttribute('data-index', 2);

mutedVolumeRef.classList.add('background_music_muted');

divWrapperRef.append(mutedVolumeRef, volumeRef);

const rootRef = document.querySelector(".wrapper__root__wrapper__cards");

const audioEffectRef = document.querySelector(".audio_Effect");

const audioEffectInCorrectRef = document.querySelector(".in_correct");

const correctAudioRef = document.querySelector('.correct_audio');

const minRef = document.querySelector('.mins');

const secRef = document.querySelector('.secs');

const endTimeRef = document.querySelector('.endGame');

const modalEndGameRef = document.querySelector('.modalEndGame');

const modalVideoRef = document.querySelector('.video');

const boxButtonsRef = document.querySelector(".btn_box");

const startGameBtnRef = document.querySelector('.start');

const gameSectionRef = document.querySelector('.wrapper');

const mainScreenRef = document.querySelector('.main');

const againBtnRef = document.querySelector('.again');

const menuBtnRef = document.querySelector('.menu');

const backMusicRef = document.querySelector('.BackMusic');

const exitBtnMenu = document.querySelector('.exit_btn');

const testBtnRef = document.querySelector('.testbtn');


let cardRef;
let doubledCardRef;
let contentDivRef;
let doubledContentDivRef;
let firstCard;
let secondCard;
let flipedCard = false;
let startTime = 90;
const arrayFlipCards = [];
doubleArrayCards.length = 6;
arrayCards.length = 6;

// !!!!!!!!!!!!Functions!!!!!!!!!!!!!

// !!!!!!!!!!!!!!Render cards!!!!!!!!!!!!!

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

// !!!!!!!!!!!!!!!!Game logic!!!!!!!!!!!!!!!!!!

const openCard = (item) => {
  // if (flipCard) {
  //   return;
  // }
  audioEffectRef.play();
  audioEffectRef.volume = 0.5;
  item.parentNode.classList.add("rotate--card");
  item.parentNode.classList.add("pointer0");
  item.parentNode.parentNode.classList.add("pointer0");
  flipCard = true;
};

const closeCard = (item) => {
  setTimeout(() => {
    audioEffectRef.play();
    item.parentNode.classList.remove("rotate--card");
    item.parentNode.classList.remove("pointer0");
    item.parentNode.parentNode.classList.remove("pointer0");
    flipedCard = false;
    flipCard = false;
  }, 500);
};


const onClick = (event) => {
  if(flipedCard) {
    return
  }
  openCard(event.target);

  arrayFlipCards.push(event.target.parentNode);
  if (arrayFlipCards.length === 2) {
    firstCard = +arrayFlipCards[0].lastElementChild.dataset.index;
    secondCard = +arrayFlipCards[1].lastElementChild.dataset.index;
    flipedCard = true;
    if (firstCard === secondCard) {
      getPairCards(arrayFlipCards[0], arrayFlipCards[1]);
    } else {
      inCorrectPairCards(arrayFlipCards[0], arrayFlipCards[1]);
    }
    return 
  }
};

const getPairCards = (Card1, Card2) => {
  setTimeout(() => {
    correctAudioRef.volume = 0.5;
    correctAudioRef.play();
    Card1.classList.add("close_icon");
    Card2.classList.add("close_icon");
    arrayFlipCards.splice(0);
    flipedCard = false;
  }, 250);
};

const inCorrectPairCards = (Card1, Card2) => {
  setTimeout(() => {
    audioEffectInCorrectRef.volume = 0.35;
    audioEffectInCorrectRef.play();
    closeCard(Card1.firstElementChild);
    closeCard(Card2.firstElementChild);
    arrayFlipCards.splice(0);
  }, 250);
};


rootRef.addEventListener("click", onClick);

// !!!!!!!!!!!Timer!!!!!!!!!!

const timer = () => {
  startTime -=1;
  minRef.textContent = ` 0${Math.floor(startTime / 60)}`;
  secRef.textContent = `: ${startTime % 60}`;

};

// !!!!!!!!!!!!!!!!Volume icon Function!!!!!!!!!!!!!!!!

const onClickVolumeIcon = (event) => {
  if(+event.target.dataset.index === 1) {
      musicRef.pause();
      volumeRangeRef.value = 0;
      event.target.classList.add('close_icon');
      event.target.classList.remove('show_icon');
      mutedVolumeRef.classList.remove('close_icon');
      return mutedVolumeRef.classList.add('show_icon');
  }
  if (+event.target.dataset.index === 2) {
      musicRef.play();
      musicRef.volume = 0.5;
      volumeRangeRef.value = 50;
      event.target.classList.add('close_icon');
      event.target.classList.remove('show_icon');
      volumeRef.classList.remove('close_icon');
      return volumeRef.classList.add('show_icon');
  }

}

const getRangeVolume = () => {
  musicRef.volume = volumeRangeRef.value / 100;
  console.log(musicRef.volume)
  if (musicRef.volume === 0) {
      volumeRef.classList.add('close_icon');
      volumeRef.classList.remove('show_icon');
      mutedVolumeRef.classList.remove('close_icon');
      return mutedVolumeRef.classList.add('show_icon');
  }
  if (musicRef.volume >= 0) {
      mutedVolumeRef.classList.add('close_icon');
      mutedVolumeRef.classList.remove('show_icon');
      volumeRef.classList.remove('close_icon');
      return volumeRef.classList.add('show_icon');
  }

};


divWrapperRef.addEventListener('click', onClickVolumeIcon);
volumeRangeRef.addEventListener('input', getRangeVolume);


// !!!!!!!!!!!!!!start game!!!!!!!!!!!!!!

const startGame = () => {
  musicRef.play();
  musicRef.volume = 0.28;
  volumeRangeRef.value = 20;
  mainScreenRef.classList.add('close_icon');
  gameSectionRef.classList.add('show_icon');
  const timerId = setInterval(() => {
    timer();
    if (startTime === 60) {
      minRef.style.color = 'red';
      secRef.style.color = 'red';
    }
    if (startTime === 0) {
      musicRef.pause();
      endTimeRef.play();
      minRef.textContent = ` 00`;
      secRef.textContent = `: 00`;
      clearInterval(timerId);
      modalEndGameRef.classList.add('show_icon');
      modalVideoRef.play();
      const show_btn = setInterval(() => {
        boxButtonsRef.classList.add("show_icon")
        clearInterval(show_btn);
    }, 4000)
    }
  }, 1000)
};

const tryAgainGame = () => {
  modalEndGameRef.classList.remove('show_icon');
  modalEndGameRef.classList.add('close_icon');
  window.location.reload();
  startGameBtnRef.onClick = startGame;

};

const goMenuFn = () => {
  modalEndGameRef.classList.remove('show_icon');
  modalEndGameRef.classList.add('close_icon');
  mainScreenRef.classList.remove('close_icon');
  gameSectionRef.classList.remove('show_icon');
  mainScreenRef.classList.add('show_icon');
  gameSectionRef.classList.add('close_icon');
  window.location.reload();
};

const playMusicFn = () => {
  backMusicRef.volume = 0.30;
  backMusicRef.play()
};

  const loadFn = () => {
    testBtnRef.onClick = playMusicFn;
  };
 window.addEventListener('load', loadFn)


startGameBtnRef.addEventListener('click', startGame);
againBtnRef.addEventListener('click', tryAgainGame);
menuBtnRef.addEventListener('click', goMenuFn);
exitBtnMenu.addEventListener('click', goMenuFn);