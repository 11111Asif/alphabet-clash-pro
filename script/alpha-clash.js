// function play(){
//     // console.log('function alpha')
//     const homeSection = document.getElementById('home-screen')
//     homeSection.classList.add('hidden')

//     const playGroundSection = document.getElementById('play-ground')
//     playGroundSection.classList.remove('hidden')
// }

function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log('player pressed',playerPressed)

    if(playerPressed === Escape){
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet)

    if(playerPressed === expectedAlphabet){
        console.log('you get a point')


        const currentScore = getTextElementValueById('current-score')
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore)


        // update score
        // const currentScoreElement = document.getElementById('current-score')
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText)


        const newScore = currentScore + 1;

        // currentScoreElement.innerText = newScore;


        removeBackgroundColorById(expectedAlphabet)
        continueGame();
    }
    else{
        console.log('you missed. you lost a life')

        const currentLife = getTextElementValueById('current-life')
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife)

        if(updatedLife === 0){
            gameOver()
        }
    }
}
document.addEventListener('keyup', handleKeyboardKeyUpEvent)

function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet', alphabet)

    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabet;

   setBackgroundColorById(alphabet);
}

function play(){
    hiddenElementById('home-screen')
    hiddenElementById('final-score')
    showElementById('play-ground')

    setTextElementValueById('current-life', 5)
    setTextElementValueById('current-score', 0)

    continueGame()
    
}

function gameOver(){
hiddenElementById('play-ground')
showElementById('final-score')

const lastScore = getTextElementValueById('current-score')
console.log(lastScore)
setTextElementValueById('last-score', lastScore)

const currentAlphabet = getElementTextById('current-alphabet')
removeBackgroundColorById(currentAlphabet)

}