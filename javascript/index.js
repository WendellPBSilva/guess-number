const form = document.getElementById('form');
form.addEventListener('submit', HandleSubmit);

let status = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess = {
    max: 10,
    attemptNumber: 0,
    numberDrawn: function randomValue(){
        return Math.round(Math.random() * this.max);
    }
}

let numberDrawn = Guess.numberDrawn();

function UpdateAttempt(attempt, value){
    attempt.innerHTML = 'Tentativa: ' + value;
}

function HandleSubmit(e){
    e.preventDefault();

    let kick = document.getElementById('kick').value;

    if (!kick){
        alert('Digite algum valor');
        return;
    }

    UpdateAttempt(attempt, ++Guess.attemptNumber);

    if(numberDrawn == kick){
        PlayAgain();
        status.innerHTML = 'Parabéns você acertou!';
        result.style.transition = '0.4s';
        result.style.backgroundColor = '#37c978';
        result.style.color = '#fff'; 
        status.style.color = '#fff';
        Clear();
    }
    else if(numberDrawn > kick){
        status.innerHTML = 'O número é maior!';
        status.style.color = '#de4251';
        Clear();
    }
    else if (numberDrawn < kick){
        status.innerHTML = 'O número é menor!';
        status.style.color = '#de4251';
        Clear();
    }
}

function PlayAgain(){
    document.getElementById('btnRestart').style.display = 'flex';
}

function Restart(){
    document.location.reload(true);
}

function Clear(){
    document.getElementById('kick').value ='';
}