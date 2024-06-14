const readline = require("readline");

const rl = readline.createInterface(process.stdin, process.stdout);
rl.question("Enter amount (default/blank is 100): ", (amount) => {
    amount = amount || 100;
    rl.close();

    for (var i = 0; i <= amount; i++) {
        var text = "";
        if (i % 3 == 0) {
            text = "Fizz";
        }
        if (i % 5 == 0) {
            text += "Buzz";
        }

        console.log(i + (text ? " -- " + text : ""));
    }
})