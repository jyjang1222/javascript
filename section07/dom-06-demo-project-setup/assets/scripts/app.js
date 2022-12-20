const movieModal = document.getElementById('add-modal');
const movieModalBtn = document.querySelector('header button');
const modalBg = document.getElementById('backdrop');
const movieModalCloseBtn = movieModal.querySelector('.btn--passive');
const movieAddBtn = movieModalCloseBtn.nextElementSibling;
const userInputs = movieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');
const closeMovieDelModalBtn = deleteMovieModal.querySelector('.btn--passive');
const movieDelBtn = deleteMovieModal.querySelector('.btn--danger');

const movies = [];

const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
};

const deleteMovie = movieId => {
  let movieIdx = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIdx++;
  }
  movies.splice(movieIdx, 1);
  const listRoot = document.getElementById('movie-list');
  listRoot.children[movieIdx].remove();
};

const closeMovieDelModal = () => {
  toggleModalBg();
  deleteMovieModal.classList.remove('visible');
}; 

const closeMovieDelModalHandler = () => {
  closeMovieDelModal();
};

const deleteMovieModalHandler = () => {
  deleteMovieModal.classList.add('visible');
  toggleModalBg();
  // deleteMovie(movieId);
};

const showNewMovie = (id, title, imgUrl, rating) => {
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
    newMovieElem.addEventListener('click', deleteMovieModalHandler.bind(null, id));
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElem);
};

// 추후 해당 함수를 호출할수있도록 분리해서 만듬
const toggleModalBg = () => {
  modalBg.classList.toggle('visible');
};

const closeMovieModal = () => {
  movieModal.classList.remove('visible');
};

const showMovieModal = () => {
  movieModal.classList.add('visible');
  toggleModalBg();
};

const clearMovieInputs = () => {
  for (const v of userInputs) {
    v.value = '';
  }
};

const closeMoiveModalHandler = () => {
  closeMovieModal();
  toggleModalBg();
  clearMovieInputs();
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
    id: String(Math.random()),
    title: titleVal,
    imgUrl: imgUrlVal,
    rating: ratingVal
  };

  movies.push(newMovie);
  console.log(movies);
  closeMovieModal();
  toggleModalBg();
  clearMovieInputs();
  showNewMovie(newMovie.id, newMovie.title, newMovie.imgUrl, newMovie.rating);
  updateUI();
};

const showMovieModalBgHandler = () => {
  closeMovieModal();
  closeMovieDelModal();
};

const deleteMovieHandler = movieId => {
  let movieIdx = 0;
  for (const id of movies) {
    if (movies.Id === movieId) {
      break;
    }
  }
  movieIdx++;
  movies[movieIdx].remove();
}

// movieDelBtn.addEventListener('click', deleteMovieHandler.bind(null, movieId));
closeMovieDelModalBtn.addEventListener('click', closeMovieDelModalHandler);
movieModalBtn.addEventListener('click', showMovieModal);
modalBg.addEventListener('click', showMovieModalBgHandler);
movieModalCloseBtn.addEventListener('click', closeMoiveModalHandler);
movieAddBtn.addEventListener('click', addMoiveHandler);
