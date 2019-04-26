// bean counting

console.log(countChar("kakkerlakkenkak", "k"));

function countChar(char, countChar) {
    let count = 0;

    for (let i = 0; i < char.length; i++) {
        // add +1 to count if characters are equal
        if (char[i] === countChar) {
            count++;
        }
    }

    return count;
}