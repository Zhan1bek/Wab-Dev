let i = 3;

alert(i--); // shows 3, decreases i to 2

alert(i--) // shows 2, decreases i to 1

alert(i--) // shows 1, decreases i to 0

// done, while(i) check stops the loop


//2
let i = 0;
while (++i < 5) alert( i );

let i = 0;
while (i++ < 5) alert( i );

//3
for (let i = 0; i < 5; ++i) alert( i );

for (let i = 0; i < 5; i++) alert( i );

//4
let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
}


//5
let num;

do {
    num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);


//6
let n = 10;

nextPrime:
    for (let i = 2; i <= n; i++) { // for each i...

        for (let j = 2; j < i; j++) { // look for a divisor..
            if (i % j == 0) continue nextPrime; // not a prime, go next i
        }

        alert( i ); // a prime
    }
