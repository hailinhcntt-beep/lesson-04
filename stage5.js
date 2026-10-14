
for (let a = 1; a <= 100; a++) {
    for (let b = 1; b <= 100; b++) {
        if (a * b % 19 === 0 && a <= b) {
            console.log(`(${a} ,${b})`);
        }
    }
}