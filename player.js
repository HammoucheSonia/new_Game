const player = document.getElementById("player");

export function moveLeft() {
    if (player.style.left !== "0vw") {
        player.style.left = `${parseInt(player.style.left) - 10}vw`;
    }
}

export function moveRight() {
    if (player.style.left !== "85vw") {
        player.style.left = `${parseInt(player.style.left) + 10}vw`;
    }
}
