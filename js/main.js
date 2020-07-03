//! Список пісень
const playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN"
  },

  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY"
  },

  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD"
  },

  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER"
  },

  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER"
  },

  {
    author: "AC/DC",
    song: "BACK IN BLACK"
  },

  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU"
  },

  {
    author: "METALLICA",
    song: "ENTER SANDMAN"
  }
];

const task1 = document.querySelector('.task-1');

let ul = document.createElement('ol');

playList.forEach(element => {
  const li = document.createElement('li');
  li.innerHTML = `${element.author} - ${element.song}`;
  ul.append(li);
});

task1.append(ul);

//! попАп

const popUp = document.createElement('div');
popUp.className = 'pop-up';

const popUpContnet = document.createElement('p');
popUpContnet.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptate consequuntur quo reprehenderit porro esse deserunt, maiores impedit vero illum rem recusandae cupiditate quas accusantium dolore quisquam placeat, ratione repudiandae eos? Eveniet reprehenderit aperiam debitis possimus ullam quae in, ex veniam. Ratione totam, alias, esse nostrum animi quam sed enim repellat earum sapiente, sint nam. Corrupti commodi assumenda excepturi quod dolor incidunt? Sequi consequatur est voluptatibus aut nam, esse itaque aspernatur excepturi harum, enim atque? Inventore quis vel, laborum dolor ad ipsa magni quam ut? Cumque cupiditate sint voluptatibus culpa voluptas in repellendus possimus laudantium vero harum quae modi itaque quos maiores, rerum sapiente sunt aspernatur, delectus magnam repellat id repudiandae? Cum veritatis facere consequuntur adipisci nesciunt provident rerum fuga porro minus quibusdam quam incidunt, earum accusantium magni atque quod consequatur repellendus, est, excepturi laboriosam natus omnis. Nisi, harum architecto atque libero possimus qui id aliquam odio, alias, error dolor.';

const closeBtn = document.createElement('p');
closeBtn.className = 'close';
closeBtn.innerHTML = 'Закрити';

const popUpConteiner = document.createElement('div');
popUpConteiner.className = 'pop-up__conteiner';
popUpConteiner.append(popUpContnet, closeBtn);

popUp.append(popUpConteiner);

const openBtn = document.createElement('p');
openBtn.className = 'open';
openBtn.innerHTML = 'ВІДКРИТИ';

document.querySelector('.task-2').append(popUp, openBtn);

openBtn.onclick = () => {
  popUp.classList.add('active');
};
closeBtn.onclick = () => {
  popUp.classList.remove('active');
};

//! Світлофор

const trafficLight = document.createElement('div');
trafficLight.className = 'traffic-light';

// Кількість ламп світлофору залежить від к-оті елементів масиву із кольорами, але то вже не зовсім світлофор))
const itemColor = ['green', 'orange', 'red'];

let k = 0;
itemColor.forEach(element => {
  const trafficLlightItem = document.createElement('div');
  trafficLlightItem.className = 'traffic-light__item';
  trafficLlightItem.style.backgroundColor = element;
  trafficLight.append(trafficLlightItem);
});

const trafficLightToogle = document.createElement('button');
trafficLightToogle.className = 'traffic-light-toogle';
trafficLightToogle.innerHTML = 'Переключатель';

document.querySelector('.task-3').append(trafficLight, trafficLightToogle);

let i = 0;

trafficLightToogle.onclick = () => {
  i++;
  if (i > trafficLight.children.length) { i = 1 };
  for (let j = 0; j < trafficLight.children.length; j++) {
    trafficLight.children[j].classList.remove('active');
  }
  trafficLight.children[i - 1].classList.add('active');
};
