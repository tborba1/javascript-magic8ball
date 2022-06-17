let button = document.getElementById("button");
let answer = document.getElementById("answer");
let question = document.getElementById("question");

button.addEventListener("click", function () {
      if (question.value.length < 1) {
        alert("Enter a question!");
      } else {

const answers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Seems silly"
];

const randomNumber = Math.random() * answers.length;
const randomNumberFloor = Math.floor(randomNumber)
answer.innerHTML = answers[randomNumberFloor];

}});