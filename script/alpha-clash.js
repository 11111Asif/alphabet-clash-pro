// function play(){
//     // console.log('function alpha')
//     const homeSection = document.getElementById('home-screen')
//     homeSection.classList.add('hidden')

//     const playGroundSection = document.getElementById('play-ground')
//     playGroundSection.classList.remove('hidden')
// }

function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet', alphabet)
}

function play(){
    hiddenElementById('home-screen')
    showElementById('play-ground')
    continueGame()
}