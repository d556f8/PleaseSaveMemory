// example

function novar() {
    console.log(n);
    for (var n = 0; n < 5; n++) {
        console.log(n);
    }
    console.log(n);
}

novar();