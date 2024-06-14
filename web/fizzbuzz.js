var statusMsg = document.getElementById("status");
var output = document.getElementById("output");

function start() {
    output.innerHTML = 'Calculating...';
    statusMsg.innerHTML = 'Preparing';
    checkNumber();
}

function checkNumber() {
    var amount = document.getElementsByName("amount")[0].value;
    console.log("Amount entered: " + amount);
    if ((amount < 0) || Math.ceil(amount) != amount) {
        statusMsg.innerHTML = 'Error; Now Awaiting Input';
        alert("Please provide an integer greater than 0");
        document.getElementsByName("amount")[0].value = 0;
        output.innerHTML = '';
        return;
    } else {
        fizzBuzz(amount);
    }
}

function fizzBuzz(amount) {
    statusMsg.innerHTML = 'Beginning calculations';
    output.innerHTML = '';
    for (let i = 0; i <= amount; i++) {
        setTimeout(() => {
            var text = "";
            var elem = document.createElement("span");
            statusMsg.innerHTML = 'Calculating: ' + i + ' of ' + amount;
            // Detect Fizzes
            if (i % 3 == 0) {
                text += 'Fizz';
            }

            //Detect Buzzes
            if (i % 5 == 0) {
                text += 'Buzz';
            }

            //Output
            elem.innerText = i + (text ? " -- " + text : "");
            output.appendChild(elem);
        }, 0.5)
    }
}