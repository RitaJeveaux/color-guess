var rgbText = document.querySelector('#rgb-color');
var answer = document.querySelector('#answer');
var score = document.querySelector('#score');
var count = 0;

function rgbGenerator() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  return `(${x}, ${y}, ${z})`;
}


function rgbInputText() {
  rgbText.innerHTML = rgbGenerator();
}


function rgbColorBalls() {
  let balls = document.querySelectorAll('.ball');
  balls.forEach((ball) => {
    ball.style.backgroundColor = `rgb${rgbGenerator()}`;
  });
  balls[Math.floor(Math.random() * 5)].style.backgroundColor = `rgb${rgbText.innerHTML}`;
}


// https://github.com/tryber/sd-04-block5-project-color-guess/pull/17/files
function checkColor() {
   let balls = document.querySelectorAll('.ball');
   score.innerHTML='0';
   balls.forEach((ball) => {
     ball.addEventListener('click', () => {
       if (ball.style.backgroundColor === `rgb${rgbText.innerHTML}`) {
         answer.innerHTML = 'Acertou!';
         count += 3;
         score.innerHTML=(count);
       } else {
         answer.innerHTML = 'Errou! Tente novamente!';
       }
     });
   });
 }


function resetGame() {
  rgbInputText();
  rgbColorBalls();
  answer.innerHTML = 'Escolha uma cor';
}


rgbInputText();
rgbColorBalls();
checkColor();


