const memoryCheck = (arr,el) => {
  let res = false;
  arr.forEach(element => {
    if (element === el ) res = true;
  });
  return res;
};

const removeItem = (item,arr) => {
    arr.splice(arr.indexOf(item, 0), 1);
    return arr;
};
const addItem = (item,arr) => {
  arr.push(item);
  return arr;
};

const cons = (el, clasS) => {
	document.querySelectorAll(clasS).forEach((element) => {
		if (element.dataset.id === el) element.classList.remove('fovarite')
	})
};

let myStorage = window.localStorage;

let filmsList = {
  name:'fovoriteFilms',
  films: ['Batman: The Dark Knight Returns','Legends of the Dark Knight: The History of Batman', 'Batman: The Dark Knight Returns, Part 2']
};

let dataFilms =  JSON.parse(myStorage.getItem(filmsList.name));

async function movieDet(movie) {

  document.querySelector('.movie__conteiner').classList.add('movie__conteiner--active');
  
  fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=a1d47e1b&t=${encodeURI(movie)}`)
  .then(data => data.json())
  .then(data => {

  console.log(data);
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

  document.querySelector('.films__list').remove();
  const ul = document.createElement('ul');
  ul.className = "films__list";
  
  let i = (page - 1) * 10;
  const movie = document.querySelector('.search__in').value;
  let XY;

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
      filmsCount.dataset.id = element.Title;
      filmsCount.innerText = i;
      
      const favoriteStar = document.createElement('p');
      favoriteStar.className = `icon-star`;
      favoriteStar.innerHTML = '&#9733';
      favoriteStar.dataset.id = element.Title;
      
      if ( memoryCheck(dataFilms, element.Title) ) { 
        filmsCount.classList.add('fovarite');
        favoriteStar.classList.add('fovarite');
      };

      favoriteStar.addEventListener('click', (ev) => {
        if (memoryCheck(dataFilms, ev.target.dataset.id)) {
          favoriteStar.classList.remove('fovarite');
          filmsCount.classList.remove('fovarite');
          myStorage.setItem(filmsList.name, JSON.stringify(removeItem(ev.target.dataset.id, dataFilms)));
          renderFavoriteList();
        } else {
          favoriteStar.classList.add('fovarite');
          filmsCount.classList.add('fovarite');
          myStorage.setItem(filmsList.name, JSON.stringify(addItem(ev.target.dataset.id, dataFilms)));
          renderFavoriteList();
        }
      })

      const pTitle = document.createElement('p');
      pTitle.className = 'films__title';
      pTitle.innerText = element.Title;
      
      const pDesc = document.createElement('p');
      pDesc.className = 'films__desc';
      
      li.append(filmsCount, pTitle, favoriteStar);
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
      timeOut(300);
      
      document.querySelectorAll('.pagination>li').forEach(element=> {
        element.classList.remove('active');
      })
      event.target.classList.add('active');
    });
  };
};

const timeOut = (ms) => {
  const loadingSwitch = () => {
    $('.loading').toggleClass("active");
    $('.films__list').toggleClass("active");
  };
  loadingSwitch();
  let timer = setTimeout(loadingSwitch, ms);
}
const search = document.querySelector('.search__Btn');
search.addEventListener('click', ()=> {
  searchMovie(true);
  timeOut(700);
})

//! build favorite list

const renderFavoriteList = (hover) => {
const favoriteListUl = document.querySelector('.favorite-list__conteiner');
$('.favorite-list__item').remove();
let delay = 800;
JSON.parse(myStorage.getItem(filmsList.name)).forEach(element => {

  const favoriteListStar = document.createElement('p');
  favoriteListStar.className = "icon-star fovarite";
  favoriteListStar.dataset.id = element;
  favoriteListStar.innerHTML = '&#9733';
  favoriteListStar.addEventListener("click", (ev) => {
    myStorage.setItem(filmsList.name, JSON.stringify(removeItem(ev.target.dataset.id, dataFilms)));
    renderFavoriteList(true);
    cons(ev.target.dataset.id, '.films__count');
    cons(ev.target.dataset.id, '.icon-star');
  });

  const favoriteListTitle = document.createElement('p');
  favoriteListTitle.innerText = element;

  const favoriteListLi = document.createElement('li');
  favoriteListLi.className = (hover)?"favorite-list__item active":'favorite-list__item';
  favoriteListLi.append(favoriteListStar,favoriteListTitle);
  favoriteListLi.style.animationDelay = `${delay}ms`;
  

  

  favoriteListUl.append(favoriteListLi);

  
  favoriteListLi.addEventListener("click", () => {
    movieDet(element);
  })
  delay += 200;
 });
}
renderFavoriteList();

$('.favorite-list').mouseover(()=> {
  $('.favorite-list__item').addClass('animation');
  $('body').addClass('shadows');
});
$('.favorite-list').mouseleave(()=> {
  $('.favorite-list__item').removeClass('animation active');
  $('body').removeClass('shadows');
});
