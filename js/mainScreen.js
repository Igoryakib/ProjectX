const openModalBtnRef = document.querySelector(".about_game");
const openBackdropRef = document.querySelector(".backdrop");

const openModalBtnRefAbout = document.querySelector(".about_us");
const openBackDropAboutRef = document.querySelector(".backdrop_about_us");

const closeBtnRef2 = document.querySelector('.button_close2')

const closeBtnRef = document.querySelector(".lightbox__button");
const exitBtnRef = document.querySelector(".exit");

const exitGame =()=>{
    window.close();
};
const closeModal = () => {
  openBackdropRef.classList.remove("showModal");
  window.removeEventListener("keydown", keyCloseModal);
};
const keyCloseModal = (event) => {
  if (event.code === "Escape") {
    closeModal();
    closeModalAboutUs();
  }
};
const openModalFn = () => {
  openBackdropRef.classList.add("showModal");
  window.addEventListener("keydown", keyCloseModal);
};
const closeModalBackdrop = (event) => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
};
const closeModalBackdrop2 = (event) => {
    if (event.target === event.currentTarget) {
      closeModalAboutUs();
    }
  };
const openModalFnAboutUS = () => {
  openBackDropAboutRef.classList.add("showModal");
  window.addEventListener("keydown", keyCloseModal);
};
const closeModalAboutUs = () => {
  openBackDropAboutRef.classList.remove("showModal");
  window.removeEventListener("keydown", keyCloseModal);
};
const closeModal2 =()=>{
    closeModalAboutUs()
};
openModalBtnRef.addEventListener("click", openModalFn);
closeBtnRef.addEventListener("click", closeModal);
openBackdropRef.addEventListener("click", closeModalBackdrop);
openModalBtnRefAbout.addEventListener("click", openModalFnAboutUS);
openBackDropAboutRef.addEventListener('click', closeModalBackdrop2);
exitBtnRef.addEventListener('click', exitGame);
closeBtnRef2.addEventListener('click', closeModal2);

const animationTitle = document.querySelector('.main_title_wrapper');
const showTitle = setInterval(()=> {
  animationTitle.style.opacity = 1;
  clearInterval(showTitle);
  
}, 3000);





