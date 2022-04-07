var healthPoints = 100;

// Health Point
function updateHealthPoints(points) {
  healthPoints = points;
  let healthBar = document.querySelector("#healthBar");

  healthBar.style.width = points + "%";

  if (healthPoints < 1) {
    alert("Game over!");
    window.location.reload();
  }
}

// Enemy Begin To Attack
function enemyAttacksMe(enemy) {
  enemy.classList.add("showing");
  setTimeout(() => {
    enemyShootsMe(enemy);
  }, 1000);
  setTimeout(() => {
    enemy.classList.remove("showing");
  }, 1200);
}

// nambahin difficulty kalo bisa

// Enemy Shoots Me
function enemyShootsMe(enemy) {
  if (!enemy.classList.contains("dead")) {
    enemy.classList.add("shooting");
    updateHealthPoints(healthPoints - 20);

    setTimeout(() => {
      enemy.classList.remove("shooting");
    }, 200);
  }
}

// Living Enemies
function livingEnemies() {
  return document.querySelectorAll(".enemy:not(.dead)");
}

// Random Enemy Attacks
function randomEnemyAttacks() {
  let randomEnemyNo = Math.random() * livingEnemies().length;
  // console.log("random enemy no : " + randomEnemyNo);

  randomEnemyNo = Math.floor(randomEnemyNo);
  // console.log("random enemy no floor : " + randomEnemyNo);

  let enemy = livingEnemies()[randomEnemyNo];

  // console.log("random : " + Math.random());
  let randomDelay = Math.random() * 2000 + 1000;
  // console.log("random delay : " + randomDelay);

  setTimeout(() => {
    enemyAttacksMe(enemy);
    randomEnemyAttacks();
  }, randomDelay);
}

// Shooting Enemies
function iShoot(enemy) {
  enemy.classList.add("dead");

  if (!livingEnemies().length) {
    alert("You win!");
    window.location.reload();
  }
}

// New Game
function newGame() {
  randomEnemyAttacks();
  document.querySelector("button").style.display = "none";
}
