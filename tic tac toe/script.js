let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let winGame = document.querySelector(".winGame");
let DrawGame = document.querySelector(".draw")

let turnO = true;

const winPatterns = [
    [0, 1 ,2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO) {
            box.innerText = "O";
            box.style.color = "green";
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.color = "red";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
        checkDraw();
    })
})

const Draw = () => {
    DrawGame.innerText = "Match DRAW, Reset GAME";
}

const youWin = () => {
    winGame.innerText = "YOU WON";
}

const resetGame = () => {
    turnO = true;
    enable();
    winGame.innerText = "";
    DrawGame.innerText = "";
    }

const enable = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const disable = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
    for(let draw of Draw) {
        Draw.disabled = true;
    }
}

const checkWinner = () => {
    for(let patterns of winPatterns) {
        let pos1 = boxes[patterns[0]].innerText;
        let pos2 = boxes[patterns[1]].innerText;
        let pos3 = boxes[patterns[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != "") {
            if(pos1 === pos2 && pos2 === pos3) {
                youWin();
                disable();
            }
        }
    }
}
               
const checkDraw = () => {
    let filledBoxes = 0;
    boxes.forEach((box) => {
        if (box.innerText !== "") {
            filledBoxes++;
        }
    });
    if (filledBoxes === 9) {
        Draw();
        disable();
    }
}

reset.addEventListener("click", resetGame);