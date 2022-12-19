const movieModal = document.getElementById('add-modal');
const movieModalBtn = document.querySelector('header button');
const movieModalBg = document.getElementById('backdrop');
const movieModalCloseBtn = movieModal.querySelector('.btn--passive');
const movieAddBtn = movieModalCloseBtn.nextElementSibling;
const userInputs = movieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');

const movies = [];

const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
};

const showNewMovie = (title, imgUrl, rating) => {
    const newMovieElem = document.createElement('li');
    newMovieElem.className = 'movie-element';
    newMovieElem.innerHTML = `
    <div class="movie-element__image">
        <img src="${imgUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5 stars</p>
    </div>
    `;
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElem);
};

// 추후 해당 함수를 호출할수있도록 분리해서 만듬
const toggleMovieBg = () => {
  movieModalBg.classList.toggle('visible');
};

const toggleMovieModal = () => {
  movieModal.classList.toggle('visible');
  toggleMovieBg();
};

const clearMovieInputs = () => {
  for (const v of userInputs) {
    v.value = '';
  }
};

const closeMoiveModalHandler = () => {
  toggleMovieModal();
};

const addMoiveHandler = () => {
  const titleVal = userInputs[0].value;
  const imgUrlVal = userInputs[1].value;
  const ratingVal = userInputs[2].value;

  if (
    titleVal.trim() === '' ||
    imgUrlVal.trim() === '' ||
    ratingVal.trim() === '' ||
    !(1 <= +ratingVal && +ratingVal <= 5)
  ) {
    alert('1~5 사이의 값 입력');
    return;
  }

  const newMovie = {
    title: titleVal,
    imgUrl: imgUrlVal,
    rating: ratingVal
  };

  movies.push(newMovie);
  console.log(movies);
  toggleMovieModal();
  clearMovieInputs();
  showNewMovie(newMovie.title, newMovie.imgUrl, newMovie.rating);
  updateUI();
};

const showMovieModalBgHandler = () => {
  toggleMovieModal();
};

movieModalBtn.addEventListener('click', toggleMovieModal);
movieModalBg.addEventListener('click', showMovieModalBgHandler);
movieModalCloseBtn.addEventListener('click', closeMoiveModalHandler);
movieAddBtn.addEventListener('click', addMoiveHandler);
