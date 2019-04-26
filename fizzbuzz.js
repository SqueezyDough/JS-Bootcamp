// fizzbuzz

for (let i = 1; i <= 100; i++) {
    let result = '';

    // when modulo == 0 you'll know if the number can be devided by 3 or 5
    if (i % 3 == 0 && i % 5 == 0) {
        result = "FizzBuzz";
    }
    else if (i % 3 == 0) {
        result = "Fizz";
    }
    else if (i % 5 == 0) {
        result = "Buzz";
    }
    else {
        result = i;
    }

    console.log(result);
}