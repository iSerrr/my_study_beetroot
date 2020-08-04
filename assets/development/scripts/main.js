const cardData = [6,7,8,9,10,'J','Q','K','A'];
const cardsSuit = ["icon-heart", 'icon-clubs', 'icon-cards', 'icon-spades']; 

const sectionCards = document.querySelector('.cards');
const conteiner = document.createElement('div');
conteiner.className = "conteiner";

for (let j = 0; j < 4; j++) {
    const row = document.createElement('div');
    const suit = cardsSuit[j];
    const color = (j % 2 === 0)? "rgb(255, 0, 0)":"#000";
    row.className = "row";
    cardData.forEach(el => {

        const cardConteiner = document.createElement('div');
        cardConteiner.className = 'cardConteiner cardConteiner-back';
        
        cardConteiner.style.color = color;

        const backSide = document.createElement('div');
        backSide.className = 'side back';

        const frontSide = document.createElement('div');
        frontSide.className = 'side front'

        const frontSideUp = document.createElement('div');
        const frontSideDown = document.createElement('div');
        const cardContent = `${el}<br><i class="${suit}"><i/>`;
        frontSideUp.className = 'frontSideUp';
        frontSideDown.className = 'frontSideDown';
        frontSideUp.innerHTML = cardContent;
        frontSideDown.innerHTML = cardContent;
        frontSide.append(frontSideUp, frontSideDown);

        cardConteiner.append(backSide, frontSide);

        cardConteiner.addEventListener("mouseover", ()=> {
            console.log(event.target.perent);
            // event.target.classList.add();
            // event.target.classList.remove();

        })

        // mouseover/mouseout


        row.append(cardConteiner);

    });
    conteiner.append(row);
};
const btn = document.createElement('button');
btn.className = 'basicBtn';
btn.innerHTML = '<span>Показати всі</span>';
btn.addEventListener('click', ()=> {
    document.querySelectorAll('.cardConteiner').forEach(el => {
        el.classList.toggle('cardConteiner-move');
        el.classList.toggle('cardConteiner-back');
    });
});

conteiner.append(btn);
sectionCards.append(conteiner);