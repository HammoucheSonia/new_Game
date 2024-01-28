import { moveLeft, moveRight } from './player.js';

const gameContainer = document.getElementById("game-container");

let score = 0;

export function createFish() {
    const fish = document.createElement("div");
    fish.className = "fish";
    fish.style.left = `${Math.random() * 70 + 15}vw`;
    fish.style.backgroundColor = getRandomFishColor();
    gameContainer.appendChild(fish);

    const checkCollision = setInterval(() => {
        const playerRect = player.getBoundingClientRect();
        const fishRect = fish.getBoundingClientRect();

        if (
            playerRect.bottom > fishRect.top &&
            playerRect.top < fishRect.bottom &&
            playerRect.right > fishRect.left &&
            playerRect.left < fishRect.right
        ) {
            clearInterval(checkCollision);
            fish.remove();
            score += getFishValue(fish.style.backgroundColor);
            document.body.style.setProperty('--score', score);
        }
    }, 10);
}

function getRandomFishColor() {
    const colors = ["#FF6347", "#00FFFF", "#FFD700", "#32CD32"]; // Salmon, Cyan, Gold, LimeGreen
    return colors[Math.floor(Math.random() * colors.length)];
}

function getFishValue(color) {
    switch (color) {
        case "#FF6347":
            return 10;
        case "#00FFFF":
            return 20;
        case "#FFD700": 
            return 30;
        case "#32CD32": 
            return 40;
        default:
            return 0;
    }
}

export function updateGame() {

}

export function startGame() {

}
