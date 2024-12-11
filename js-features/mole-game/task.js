(() => {
    const getHole = (index) => document.getElementById(`hole${index}`);
    let dead = document.getElementById("dead");
    let lost = document.getElementById("lost");
    console.log(dead);

    checkEndGame = (countDead, countLost) => {
        if ( countDead == 10) {
            alert("You win!");
            window.location.reload();
        } else if (countLost == 5) {
            alert("You lose!");
            window.location.reload();
        }
    }

    for (let i = 1; i < 10; i++) {
        getHole(i).onclick = function() {
            if (this.classList.contains("hole_has-mole")) {
                dead.textContent++;
                checkEndGame(dead.textContent, lost.textContent);
            } else {
                lost.textContent++;
                checkEndGame(dead.textContent, lost.textContent);
            }
        }
    }

})()