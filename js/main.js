async function movieDet(movie) {

  document.querySelector('.movie__conteiner').classList.add('movie__conteiner--active');
  
  fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=a1d47e1b&t=${encodeURI(movie)}`)
  .then(data => data.json())
  .then(data => {

  const movieImg = document.querySelector('.movie__img');
  const movieTitle = document.querySelector('.movie__title');
  const movieSubTitle = document.querySelector('.movie__sub-title');
  const movieYears = document.querySelector('.years>span:nth-child(2)');
  const movieProducer = document.querySelector('.producer>span:nth-child(2)');

  movieImg.setAttribute('src', data.Poster);
  movieTitle.innerText = data.Title;
  movieSubTitle.innerText = data.Plot;
  movieYears.innerText = data.Year;
  movieProducer.innerText = data.Genre;

})
}

async function searchMovie(paginationToogle, page = 1) {

  document.querySelector('.films__conteiner').firstChild.remove();
  const ul = document.createElement('ul');
  ul.className = "films__list";
  
  let i = (page - 1) * 10;
  const movie = document.querySelector('.search__in').value;

  fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=a1d47e1b&s=${encodeURI(movie)}&page=${page}`)
  .then(data => data.json())
  .then(data => {
    
      pagiCount = Math.ceil(+data.totalResults / 10);
      if (paginationToogle) pagination(pagiCount);
      data.Search.forEach(element => {

      i++;
      const li = document.createElement('li');
      li.className = 'films__item';

      const filmsCount = document.createElement('p');
      filmsCount.className = 'films__count';
      filmsCount.innerText = i;

      const pTitle = document.createElement('p');
      pTitle.className = 'films__title';
      pTitle.innerText = element.Title;

      const pDesc = document.createElement('p');
      pDesc.className = 'films__desc';
      
      li.append(filmsCount, pTitle, pDesc);
      ul.append(li);
      document.querySelector('.pagination').before(ul);

      li.addEventListener("click", () => {
        movieDet(element.Title);
      })
    });
  })
  
}
function pagination(count = 1) {

  if (document.querySelector('.films__conteiner').lastChild) {
    document.querySelector('.films__conteiner').lastChild.remove();
  };
  const paginationConteiner = document.createElement('ul');
  paginationConteiner.className = 'pagination';

  for (let i = 1; (i <= count && i <=10); i++) {
    const li = document.createElement('li');
    li.innerText = i;
    if (i === 1) li.classList.add('active');
    paginationConteiner.append(li);

    document.querySelector('.films__conteiner').append(paginationConteiner);

    //? В даному місці створюється під кожну page окремий лісенер, чи правильно такий підхід ?
    li.addEventListener('click', (event)=>{
      searchMovie(false, i);
      
      document.querySelectorAll('.pagination>li').forEach(element=> {
        element.classList.remove('active');
      })
      event.target.classList.add('active');
    });
  };
};

const search = document.querySelector('.search__Btn');
search.addEventListener('click', ()=> {
  searchMovie(true);
})

myStorage = window.localStorage;

myStorage.clear();
console.log(myStorage);

const arrfilm = [
  "Batman", 'Spider-Man', 'Superman'
]
let k = 0;

// arrfilm.forEach(element=> {
//   myStorage.setItem(k, element);
//   k++;
// });


for (key in Object.keys(myStorage)) {
  console.log(myStorage.getItem(key));
}

