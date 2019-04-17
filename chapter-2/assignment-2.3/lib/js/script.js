let bindingSize = 8;
let result = "";

for (let y = 0; y < bindingSize; y++) {
    for (let x = 0; x <= bindingSize; x++) {
        if (isEven(x,y)) {
            result += " ";
        } else {
            result += "#";
        }
    }

    result += "\n";
}

console.log(result);

function isEven(axisX, axisY) {
    if ((axisX + axisY) % 2 == 0) {
        return true;
    }

    return false;
}