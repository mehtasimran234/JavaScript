////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// const weightMark = 78;
// const heightMark = 1.69;
// const weightJohn = 92;
// const heightJohn = 1.95;

// const weightMark = 95;
// const heightMark = 1.88;
// const weightJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = weightMark / heightMark ** 2;
// const BMIJohn = weightJohn / heightJohn ** 2;

// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);


////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

// if (BMIMark > BMIJohn) {
//     console.log("Mark's BMI is higher than John's!");
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//     console.log("John's BMI is higher than Mark's!");
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// const averageDolphins = (96 + 108 + 89) / 3;
// const averageKoalas = (88 + 91 + 110) / 3;

// if (averageDolphins > averageKoalas) {
//     console.log("Team Dolphins wins!!!");
// } else if (averageKoalas > averageDolphins) {
//     console.log("Team Koalas wins!!!");
// } else if (averageDolphins === averageKoalas) {
//     console.log("There is a tie.");
// }

//  BONUS #1 and 2
const averageDolphins = (97 + 112 + 101) / 3;
const averageKoalas = (109 + 95 + 106) / 3;

if (averageDolphins > averageKoalas && averageDolphins >= 100) {
    console.log("Team Dolphins wins!!!");
} else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
    console.log("Team Koalas wins!!!");
} else if (averageDolphins === averageKoalas && averageDolphins >= 100) {
    console.log("There is a tie. So both the team wins!!!");
} else {
    console.log("None of the teams win...");
}