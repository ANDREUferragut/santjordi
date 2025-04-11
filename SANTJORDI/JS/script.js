document.addEventListener("DOMContentLoaded", function () {

    function playMusic() {
        let audio = new Audio('./KAROL G, Nicki Minaj - Tusa (Official Video) [tbneQDc2H3I].mp3');
        audio.loop = true;
        audio.volume = 0.8;
    }

    document.addEventListener("DOMContentLoaded", playMusic);

    playMusic();

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
        1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
        1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 2, 2, 2, 2, 2, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1,
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

    let posicioPrincrep = 490;
    squares[posicioPrincrep].classList.add("princep")

    function movePrincep(e) {
        squares[posicioPrincrep].classList.remove("princep");

        switch (e.key) {
            case 'ArrowLeft':
                if (!squares[posicioPrincrep - 1].classList.contains('green') &&
                    !squares[posicioPrincrep - 1].classList.contains('blue')) {
                    posicioPrincrep -= 1
                } if (posicioPrincrep - 1 === 363) {
                    posicioPrincrep = 391
                }

                break;
            case 'ArrowRight':
                if (!squares[posicioPrincrep + 1].classList.contains('green') &&
                    !squares[posicioPrincrep + 1].classList.contains('blue')) {
                    posicioPrincrep += 1
                } if (posicioPrincrep + 1 === 392) {
                    posicioPrincrep = 364
                }

                break;
            case 'ArrowUp':
                if (!squares[posicioPrincrep - 28].classList.contains('green') &&
                    !squares[posicioPrincrep - 28].classList.contains('blue')) {
                    posicioPrincrep -= 28
                }

                break;
            case 'ArrowDown':
                if (!squares[posicioPrincrep + 28].classList.contains('green') &&
                    !squares[posicioPrincrep + 28].classList.contains('blue')) {
                    posicioPrincrep += 28
                }

                break;
        }

        squares[posicioPrincrep].classList.add("princep");

        llevarPetals();
        rosaAgafada();
        checkForWin();
        checkForGameOver();
    }

    class Drac {
        constructor(className, startIndex, speed) {
            this.className = className
            this.startIndex = startIndex
            this.speed = speed
            this.currentIndex = startIndex
            this.isScared = false
            this.timerId = NaN
        }
    }

    const dracs = [
        new Drac('drac1', 431, 250),
        new Drac('drac2', 432, 250),
        new Drac('drac3', 433, 250),
        new Drac('drac4', 434, 250)
    ]

    //console.log(dracs)

    dracs.forEach(drac => {
        squares[drac.currentIndex].classList.add(drac.className, 'drac')
    })

    dracs.forEach(drac => moveDracs(drac))

    function moveDracs(drac) {
        const directions = [-1, 1, 28, -28]
        let direction = directions[Math.floor(Math.random() * directions.length)]

        drac.timerId = setInterval(function () {
            if (!squares[drac.currentIndex + direction].classList.contains('green') &&
                !squares[posicioPrincrep - 1].classList.contains('blue')
            ) {
                squares[drac.currentIndex].classList.remove(drac.className, 'drac', 'drac-asustat')
                drac.currentIndex += direction
                squares[drac.currentIndex].classList.add(drac.className, 'drac')
            } else direction = directions[Math.floor(Math.random() * directions.length)]

            if (drac.isScared) {
                squares[drac.currentIndex].classList.add('drac-asustat')
            }

            if (drac.isScared && squares[drac.currentIndex].classList.contains('princep')) {
                score += 100
                scoreDisplay.innerHTML = score
                squares[drac.currentIndex].classList.remove(drac.className, 'drac', 'drac-asustat')
                drac.currentIndex = drac.startIndex
                drac.isScared = false
                squares[drac.currentIndex].classList.add(drac.className, 'drac')
            }

            checkForGameOver();

        }, drac.speed
        )
    }

    function llevarPetals() {
        if (squares[posicioPrincrep].classList.contains("pink")) {
            score++;
            scoreDisplay.innerHTML = score
            squares[posicioPrincrep].classList.remove("pink")

        }
    }

    function rosaAgafada() {
        if (squares[posicioPrincrep].classList.contains("red")) {
            score += 10
            scoreDisplay.innerHTML = score
            squares[posicioPrincrep].classList.remove("red")

            espantaDracs(true)
            setTimeout(() => espantaDracs(false), 10000)
        }
    }

    function espantaDracs(scaredDrac) {
        dracs.forEach(drac => drac.isScared = scaredDrac)
    }

    function checkForWin() {
        if(score >= 750){
            dracs.forEach(drac => clearInterval(drac.timerId))
            document.removeEventListener('keyup', movePrincep)
            setTimeout(function(){alert(`YOU HAVE WON`)},500)
        }
    }

    function checkForGameOver() {
        if (
            squares[posicioPrincrep].classList.contains('drac') &&
            !squares[posicioPrincrep].classList.contains('drac-asustat')
        ){
            dracs.forEach(drac => clearInterval(drac.timerId))
            document.removeEventListener('keyup', movePrincep)
            setTimeout(function(){alert(`GAME OVER`)},500)
        }
    }

    document.addEventListener('keyup', movePrincep);
});

