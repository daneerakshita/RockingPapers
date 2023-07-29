const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay =document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result
let imageId
const newWidth = 200; // Adjust as needed
const newHeight = 175; // Adjust as needed

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.currentTarget.id
    /*console.log(e.currentTarget.id)*/
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if (randomNumber === 1){
        computerChoice = 'rock'
        imageNumber = 1
    }
    if (randomNumber === 2){
        computerChoice = 'paper'
        imageNumber = 2
    }
    if (randomNumber === 3){
        computerChoice = 'scissors'
        imageNumber = 3
    }

    computerChoiceDisplay.innerHTML =computerChoice
    showImage(imageNumber)
}

function getResult() {
    if (computerChoice === userChoice){
        result= 'Its a Draw. meh.'
    }

    if (computerChoice === 'rock' && userChoice === 'scissors'){
        result= 'you lose. :('
    }

    if (computerChoice === 'rock' && userChoice === 'paper'){
        result= 'you win! <3 '
    }

    if (computerChoice === 'paper' && userChoice === 'scissors'){
        result= 'you win! <3'
    }

    if (computerChoice === 'paper' && userChoice === 'rock'){
        result= 'you lose! :('
    }

    if (computerChoice === 'scissors' && userChoice === 'paper'){
        result= 'you lose! :('
    }

    if (computerChoice === 'scissors' && userChoice === 'rock'){
        result= 'you win! <3'
    }

    resultDisplay.innerHTML = result

}

function enlargeButton(image) {
    image.classList.toggle("enlarged");
  }

function showImage(imageNumber) {
    const imageContainer = document.getElementById("image-container");
  
    // Remove any previously displayed image
    while (imageContainer.firstChild) {
      imageContainer.removeChild(imageContainer.firstChild);
    }
  
    // Create the image element based on the input number
    const image = new Image();
    if (imageNumber === 1) {
      image.src = "./rock.png";
     

  // Set the size of the image
       image.width = newWidth;
       image.height = newHeight;
    } else if (imageNumber === 2) {
      image.src = "./paper.png";
      image.width = newWidth;
      image.height = newHeight;
    } else if (imageNumber === 3) {
      image.src = "./scissors.png";
      image.width = newWidth;
      image.height = newHeight;
    } else {
      // If the input number is not 1, 2, or 3, display an error message
      image.src = "./rock.png";
    }
  
    // Append the image to the container
    imageContainer.appendChild(image);
  }
  