const cards = document.querySelectorAll('.card');
let hasFlippedcard = false;
let firstCard, secondCard;
let lockBoard = false;


function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;//para validar se é a mesma carta e não deixar clicar duas vezes na mesma carta e dar pau.

    //errado- this.classlist.toggle('flip');
    //this.classList.toggle('flip');
    this.classList.add('flip');//para nao remover, só add o flip
    if (!hasFlippedcard) {
        hasFlippedcard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    hasFlippedcard = false;//para zerar sempre que der uma combinação
    checkForMath();
}

function checkForMath() {
    //comparando as cartas pelo data-card do html
    if (firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();//se forem iguais, para não clicar mais de uma vez
        return;
    }
    unflipCards();
}

function disableCards() {//Caso sejam iguais remove o flip e elas ficam reveladas na tela
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    //método de função e tempo, que usar o 2º parametro como tempo para executar a função
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        //lockBoard= false;para não permitir que clique nas demais cartas antes que o tempo passe
        resetBoard();

    }, 1500);
}

function resetBoard() {
    [hasFlippedcard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];

}

//embaralhar as cartas usando o atributo order do css, pois cada div tem sua posição enumerada, com imediatle function encapsulada dentro dos parenteses

(function shuffled() {
    cards.forEach((card) => {//o .floor irá arredondar o random, para ficar com numeros inteiros de 0 a 11.
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;//sempre que o jogo começar, ira começar em uma position aleatória.

        return;
    })
})();

cards.forEach((card) => {
    card.addEventListener('click', flipCard)
});



