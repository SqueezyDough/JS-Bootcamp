console.log(countChar("kakkerlak", "k"));

function countChar(char, countChar) {
    let count = 0;

    for (let i = 0; i < char.length; i++) {
        if (char[i] === countChar) {
            count++;
        }
    }

    return count;

}