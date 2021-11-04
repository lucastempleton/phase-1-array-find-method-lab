// function findWins(wins){
//     return wins.result === "W"
// }
// function superbowlWin(array){
//     return Object.keys(array).find(findWins)
// }

// function superbowlWin(object) {
//     return Object.keys(object).find(key => object[key] === "W");
//   }


// function superbowlWin(array){
//     let win = array.find(findWins);
//     return win
// }


// function findWins(array){
//     return array.year === "W"
// }

const superbowlWin = array => {
    const winningObject = array.find(wins => wins.result === "W");
        if(winningObject === undefined){
            return undefined
        }
        else{
            return winningObject.year
        }
}

