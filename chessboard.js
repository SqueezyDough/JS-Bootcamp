// chessboard

let bindingSize = 8;
let result = "";

/* a chessboard has 2 dimensions (x, y)
   sum index nr from both dimensions tells you if there should be a # or a space
   example: x = 6, y = 5
            6 + 5 == 11
            11 == odd
            11 should be #
*/

for (let y = 0; y < bindingSize; y++) {
    for (let x = 0; x <= bindingSize; x++) {
        if (isEven(x,y)) {
            result += " ";
        } else {
            result += "#";
        }
    }

    // new line when x loop completes for this row
    result += "\n";
}

console.log(result);

function isEven(axisX, axisY) {
    // sum both index numbers and check odd or even
    if ((axisX + axisY) % 2 == 0) {
        return true;
    }

    return false;
}