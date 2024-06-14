import java.util.Scanner;

public class FizzBuzz {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter amount: ");
        String inputStr = input.next();
        int amount;
        try {
            amount = Integer.parseInt(inputStr);
        } catch(Exception e) {
            amount = 100;
        }

        input.close();

        for (int i = 0; i <= amount; i++) {
            String text = "";
            if (i % 3 == 0) {
                text = "Fizz";
            }
            if (i % 5 == 0) {
                text += "Buzz";
            }
            System.out.println(i + (text != "" ? " -- " + text : ""));
        }
    }
}