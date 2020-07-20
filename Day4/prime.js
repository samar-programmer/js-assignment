var n=10;
for (var j = 2; j <= n; j++) {

    var notPrime = false;
    for (var i = 2; i <= j; i++) {
        if (j%i===0 && i!==j) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(j);
    }
}