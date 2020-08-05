//! Шаблонізація карт та іконок
const cardData = [6,7,8,9,10,'J','Q','K','A'];
const cardsSuit = ["icon-heart", 'icon-clubs', 'icon-cards', 'icon-spades']; 

//! Створення контенерів та привязка DOM
const sectionCards = document.querySelector('.cards');
const conteiner = document.createElement('div');
conteiner.className = "conteiner";

//! Масив створення карт
for (let j = 0; j < 4; j++) {
    const row = document.createElement('div');
    const suit = cardsSuit[j];
    const color = (j % 2 === 0)? "rgb(255, 0, 0)":"#000";
    row.className = "row";
    cardData.forEach(el => {

        //! Створення контейнера для окремої карти
        const cardConteiner = document.createElement('div');
        cardConteiner.className = 'cardConteiner';
        
        //! Задаєм колір масті
        cardConteiner.style.color = color;

        //! Формування тиловоъ сторони
        const backSide = document.createElement('div');
        backSide.className = 'side back';

        //! Формування лицевої сторони
        const frontSide = document.createElement('div');
        frontSide.className = 'side front'

        //! Формуваення елементів лицевої сторони
        const frontSideUp = document.createElement('div');
        const frontSideDown = document.createElement('div');
        const cardContent = `${el}<br><i class="${suit}"><i/>`;
        frontSideUp.className = 'frontSideUp';
        frontSideDown.className = 'frontSideDown';
        frontSideUp.innerHTML = cardContent;
        frontSideDown.innerHTML = cardContent;
        frontSide.append(frontSideUp, frontSideDown);

        cardConteiner.append(backSide, frontSide);

        //! Задаэм анымацію  на hover
        cardConteiner.addEventListener("mouseover", function () {
            this.style.animationDelay = `0ms`;
            this.classList.add('cardConteiner-move');
            this.classList.remove('cardConteiner-back');
        })
         //! Задаэм анымацію  на hover
        cardConteiner.addEventListener("mouseout", function () {
            this.style.animationDelay = `0ms`;
            this.classList.add('cardConteiner-back');
            this.classList.remove('cardConteiner-move');
        })
        //! Формується ряд карт
        row.append(cardConteiner);
    });
    //! Сформований контейнер ыз 36 карт
    conteiner.append(row);
};

//! Створюєм кнопку "Показати всі"
const btn = document.createElement('button');
btn.className = 'basicBtn cardBtn';
btn.innerHTML = '<span>Показати всі</span>';

//! Перверіка на присутність класу
const classIf = (el, fisrtClass, secondClass) => {
    for (let clas of el.classList) {
        if (clas === fisrtClass || clas === secondClass) return true;
    }
}

//! Анімація для всіх при кліку на кнопку
btn.addEventListener('click', () => {
    let i = 0;
    document.querySelectorAll('.cardConteiner').forEach(el => {

        if (classIf(el, 'cardConteiner-move','cardConteiner-back')) {
            el.style.animationDelay = `${i * 50}ms`;
            el.classList.toggle('cardConteiner-move');
            el.classList.toggle('cardConteiner-back');
        } else {
            el.classList.add('cardConteiner-move');
            el.style.animationDelay = `${i * 50}ms`;
        }
        console.log(i);
        i++;
    });
});

//! Вствка кнопки та контейнера з картами
conteiner.append(btn);
sectionCards.append(conteiner);

//мабуть коментарі краще англійською. -)