document.addEventListener("DOMContentLoaded", function domContentHandler() {
  /**
   * Below we are accessing the divs with id ball, ping-pong-table and paddle with DOM document method getElementById()
   *
   * */
  let ball = document.getElementById("ball");
  const pingPongTable = document.getElementById("ping-pong-table");
  const paddle = document.getElementById("paddle");
  /**
   * Here we creating variable to assign  initial coordinates of our ball x distance was 50 and y distance was 50
   */
  let ballX = 50;
  let ballY = 50;
  /**
   * Here we creating the another variable for the movement of our ball in both x and y direction.
   */
  let dx = 2;
  let dy = 2;

  /**
   * Here we assign the initial movement to our ball which we target and assign variable ballX and ballY coordinates
   */
  ball.style.top = `${ballX}px `;
  ball.style.left = `${ballY}px `;

  /**
   * This setInterval function will help to implement our ball bouncing animation
   */

  setInterval(function execute() {
    /**
     *  Here we update the value of ballX direction and ballY direction with the movement of the ball
     */
    ballX += dx;
    ballY += dy;
    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;

    /**
 * This block handles the collision between the ball and the paddle.
 * Let's understand the conditions:
 * 
 * 1st. If the ball's X-axis position (ballX) is less than the paddle's right edge 
 *      (paddle.offsetLeft + paddle.offsetWidth) 
 *      AND the ball's right edge (ballX + ball.offsetWidth) is greater than the paddle's left edge,
 * 
 * 2nd. AND the ball's bottom edge (ballY + ball.offsetHeight) is below the paddle's top,
 *      AND the ball's top (ballY) is above the paddle's bottom edge (paddle.offsetTop + paddle.offsetHeight),
 * 
 * => Then both X and Y axes overlap, meaning the ball has hit the paddle.
 * So we reverse the ball's horizontal direction by multiplying dx by -1.
 * Also, we reset ballX to prevent the ball from getting stuck inside the paddle.
 */

   if (
  ballX < paddle.offsetLeft + paddle.offsetWidth &&
  ballX + ball.offsetWidth > paddle.offsetLeft && 
  ballY + ball.offsetHeight > paddle.offsetTop &&
  ballY < paddle.offsetTop + paddle.offsetHeight
) {
  dx *= -1;

  ballX = paddle.offsetLeft + paddle.offsetWidth;
}


    if (ballX > pingPongTable.offsetWidth - ball.offsetWidth || ballX <= 0)
      dx *= -1;
    if (ballY > pingPongTable.offsetHeight - ball.offsetHeight || ballY <= 0)
      dy *= -1;
  }, 1);

  let paddleY = 0;

  let dPy = 10;

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
