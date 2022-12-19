const movieModal = document.getElementById('add-modal');
const movieModalBtn = document.querySelector('header button');
const movieModalBg = document.getElementById('backdrop');
const movieModalCloseBtn = movieModal.querySelector('.btn--passive');

// 추후 해당 함수를 호출할수있도록 분리해서 만듬
const toggleMovieBg = () => {
    movieModalBg.classList.toggle('visible');
};

const toggleMovieModal = () => {
    movieModal.classList.toggle('visible');
    toggleMovieBg();
};

const closeMoiveModal = () => {
    toggleMovieModal();
}

const movieModalBgClickHandler = () => {
    toggleMovieModal();
}

movieModalBtn.addEventListener('click', toggleMovieModal);
movieModalBg.addEventListener('click', toggleMovieModal);
movieModalCloseBtn.addEventListener('click', closeMoiveModal);