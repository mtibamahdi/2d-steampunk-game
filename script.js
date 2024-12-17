window.addEventListener("load", function () {
  // canvas setup
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 500;

  // Will keep track of specified user inputs
  class InputHandler {}

  // Will handle player lasers
  class Projectile {}

  // Will deal with falling screws, corks and bolts that come from damaged enemies
  class Particle {}

  // Will control the main caracter, it will animate player spreadsheet and so on
  class Player {
    constructor(game) {
      this.game = game;
      this.width = 120;
      this.height = 190;
      this.x = 20;
      this.y = 100;
      this.speedY = 0.1;
    }
    update() {
      this.y += this.speedY;
    }
    draw(context) {
      context.fillStyle = "green";
      context.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  // Will be the blueprint handling many different enemy types
  class Enemy {}

  // Will handle individual background layers in our parallax, seamlessly scrolling, multilayered
  class Layer {}

  // Will pull all layer project together to animate the entire game
  class Background {}

  // Will draw score, timer and other information that needs to be displayed
  class UI {}

  // The main game class, all logic will come together here.
  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.player = new Player(this);
    }
    update() {
      this.player.update();
    }
    draw(context) {
      this.player.draw(context);
    }
  }

  const game = new Game(canvas.width, canvas.height);
  // animation loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update();
    game.draw(ctx);
    requestAnimationFrame(animate);
  }
  animate();
});
