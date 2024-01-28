import { startGame } from './game.js';
import { moveLeft, moveRight } from './player.js';

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        moveLeft();
    } else if (event.key === "ArrowRight") {
        moveRight();
    }
});

document.addEventListener("click", (event) => {
    const clickedY = event.clientY;
    if (clickedY < window.innerHeight * 0.1) {
        startGame();
    }
});

