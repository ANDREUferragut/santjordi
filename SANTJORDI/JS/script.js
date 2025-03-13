document.addEventListener("DOMContentLoaded", function () {

    const scoreDisplay = document.getElementById("score");
    const width = 28;
    let score = 0;
    const grid = document.querySelector(".grid");

    //0 - pètal
    //1 - mur
    //2 - cova 
    //3 - rosa
    //4 - buit

    let squares = []

    const layout = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1,
        1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1,
        1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1,
        1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1,
        1, 1, 1, 0, 1, 3, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1,
        1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1,
        1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1,
        1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 3, 1, 0, 0, 0, 0, 0, 0, 1, 1,
        1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1,
        1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
        1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 2, 2, 2, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1,
        4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 4, 4,
        1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 2, 2, 2, 2, 2, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1,
        1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1,
        1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1,
        1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1,
        1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1,
        1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
        1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1,
        1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1,
        1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
        1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1,
        1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1,
        1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    ]

    //create board
    function createBoard() {
        for (let i = 0; i < layout.length; i++) {
            const square = document.createElement('div')
            if (layout[i] == 0) {
                square.classList.add("pink")
            } else if (layout[i] == 1) {
                square.classList.add("green")
            } else if (layout[i] == 2) {
                square.classList.add("blue")
            } else if (layout[i] == 3) {
                square.classList.add("red")
            } else if (layout[i] == 4) {
                square.classList.add("white")
            }
            grid.appendChild(square);
            squares.push(square)
        }
    }

    createBoard();
    console.log(squares)

    let posicipPrincrep = 490;
    squares[posicipPrincrep].classList.add("princep")

    function movePrincep(e){
        squares[posicipPrincrep].classList.remove("princep")
        switch(e.key){
            case 'ArrowLeft':
                posicipPrincrep -= 1
                break;
            case 'ArrowRight':
                posicipPrincrep += 1
                break;
            case 'ArrowUp':
                posicipPrincrep -= 28
                break;
            case 'ArrowDown':
                posicipPrincrep += 28
                break;
        }
        squares[posicipPrincrep].classList.add("princep")
    }

    document.addEventListener('keyup', movePrincep);

    let posicipDrac1 = 431;
    squares[posicipDrac1].classList.add("drac1")
    let posicipDrac2 = 432;
    squares[posicipDrac2].classList.add("drac2")
    let posicipDrac3 = 433;
    squares[posicipDrac3].classList.add("drac3")
    let posicipDrac4 = 434;
    squares[posicipDrac4].classList.add("drac4")

})