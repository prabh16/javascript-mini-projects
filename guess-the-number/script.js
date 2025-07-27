const userInput = document.querySelector('.enter');
const form = document.querySelector('form');
const result = document.querySelector('.result');
const allGuesses = document.querySelector('.all-guesses');
const submitBtn = document.querySelector('.submit');
const startGameBtn = document.querySelector('.start-game');

function a(){
    const allGuessesArray = [];

let randomNumber = Math.floor(Math.random() * 100);

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const userInputValue = parseInt(userInput.value);
    if(userInputValue < randomNumber ){
        result.innerText = 'Too Low!';
    }
    else if(userInputValue > randomNumber){
        result.innerText = 'Too High!';
    }
    else{
        result.innerText ='You got it! Congrats!!!';
        startGameBtn.disabled = false;
        submitBtn.disabled = true;
    }

    allGuessesArray.push(userInputValue);
    allGuesses.innerText ='Your Guesses: ' + allGuessesArray.join(',');
    form.reset();
    
})

startGameBtn.addEventListener('click', ()=>{
    result.innerText = '';
    allGuesses.innerText = '';
    startGameBtn.disabled = true;
    submitBtn.disabled = false;
    randomNumber = Math.floor(Math.random() * 100);
})
}

a()

