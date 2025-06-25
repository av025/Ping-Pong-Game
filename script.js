document.addEventListener("DOMContentLoaded", function domContentHandler() {
  //* Accessing the ball div
  let ball = document.getElementById("ball");
  //* Accessing the ping-pong table
  const pingPongTable = document.getElementById("ping-pong-table");
  //* Accessing the paddle
  const paddle = document.getElementById("paddle");

  let ballX = 50; //* Distance of the top of the ball w.r.t ping pong table.
  let ballY = 50; //* Distance of the left of the ball w.r.t ping pong table.

  let dx = 2; //*  Displacement factor to x-direction.
  let dy = 2; //*  Displacement factor to y-direction.

  ball.style.top = `${ballX}px `;
  ball.style.left = `${ballY}px `;

  //? This setInterval was giving the animation to our ball in both x and y direction.
  setInterval(function execute() {
    //* Displacement should of of +2
    ballX += dx;
    ballY += dy;
    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;
    // if(ballX > 770 || ballX <= 0)  dx *= -1 ;
    // if(ballY > 370 || ballY <= 0) dy *= -1;

    if (
      ballX < paddle.offsetLett + paddle.offsetWidth &&
      ballY > paddle.offsetTop &&
      ballY - ball.offsetHeight < paddle.offsetTop + paddle.offsetHeight
    ) {
      dx *= -1;
    }

    if (ballX > pingPongTable.offsetWidth - ball.offsetWidth || ballX <= 0)
      dx *= -1;
    if (ballY > pingPongTable.offsetHeight - ball.offsetHeight || ballY <= 0)
      dy *= -1;
  }, 1);

  let paddleY = 0;

  let dPy = 10; //* Displacement Paddle to y-direction + y direction

  document.addEventListener("keydown", function (event) {
    event.preventDefault();
    if (event.keyCode == 38 && paddleY > 0) {
      paddleY += -1 * dPy;
    } else if (
      event.keyCode == 40 &&
      paddleY < pingPongTable.offsetHeight - paddle.offsetHeight
    ) {
      paddleY += dPy;
    }
    paddle.style.top = `${paddleY}px`;
  });

  document.addEventListener("mousemove", function eventHandler(event) {
    let mouseDistanceFromTop = event.clientY;
    let tableDistanceFromTop = pingPongTable.offsetTop;
    let mousePointControl =
      mouseDistanceFromTop - tableDistanceFromTop - paddle.offsetHeight / 2;
    paddleY = mousePointControl;

    if (
      paddleY <= 0 ||
      paddleY > pingPongTable.offsetHeight - paddle.offsetHeight
    )
      return;

    paddle.style.top = `${paddleY}px`;
  });
});
