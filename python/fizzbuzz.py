amount = input("Enter an amount (default 100): ")

if (amount == ""):
    amount = 100

for i in range(amount + 1):
    text = ""
    if (i % 3 == 0):
        text = "Fizz"
    if (i % 5 == 0):
        text += "Buzz"
    print(str(i) + ((" -- " + text) if (text != "") else ""))