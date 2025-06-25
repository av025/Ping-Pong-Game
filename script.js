document.addEventListener("DOMContentLoaded", function domContentHandler() {
  //* Accessing the ball div
  let ball = document.getElementById("ball");
//* Accessing the ping-pong table 
const pingPongTable = document.getElementById("ping-pong-table")

  let ballX = 50; //* Distance of the top of the ball w.r.t ping pong table.
  let ballY = 50; //* Distance of the left of the ball w.r.t ping pong table. 

  let dx = 2;  //*  Displacement factor to x-direction.  
  let dy = 2; //*  Displacement factor to y-direction. 

  ball.style.top = `${ballX}px `;
  ball.style.left = `${ballY}px `; 

  setInterval(function execute(){
    //* Displacement should of of +2 
    ballX += dx; 
    ballY += dy;
    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;
    // if(ballX > 770 || ballX <= 0)  dx *= -1 ;
    // if(ballY > 370 || ballY <= 0) dy *= -1; 

    if(ballX > pingPongTable.offsetWidth - ball.offsetWidth || ballX <= 0) dx *= -1;
    if(ballY > pingPongTable.offsetHeight - ball.offsetHeight || ballY <= 0) dy *= -1; 

  }, 1)

});
