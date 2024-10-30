function avg(numbers) {
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}

function prime(num) {
    if (num == 1) {
        return true;
    }
    for (let i = 2;i < num;i++) {
        if (num % i == 0) {
            return false;
        }
    }

    return true;
}

function factorial(num) {
    let fact = 1;

    for (let i = num;num >=1;i--) {
        fact *= i;
    }

    return fact;
}

module.exports = {
    avg,
    prime,
    factorial
    
}