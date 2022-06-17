//Select the element on the page to interact with!
let button = document.querySelector("button");
let answer = document.querySelector("#answer");

// Add a click event to the button
button.addEventListener("click", function () {
      
//Create array with answers
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
    // "Concentrate and ask again"
    // '<img class="8ballRandom" src="img/magic8ball_1.png" />',
    // '<img class="8ballRandom" src="img/magic8ball_2.png" />',
    // '<img class="8ballRandom" src="img/magic8ball_3.png" />',
    // '<img class="8ballRandom" src="img/magic8ball_4.png" />',
    // '<img class="8ballRandom" src="img/magic8ball_5.png" />',
    // '<img class="8ballRandom" src="img/magic8ball_6.png" />',
    // '<img class="8ballRandom" src="img/magic8ball_7.png" />',
    // '<img class="8ballRandom" src="img/magic8ball_8.png" />',
    // '<img class="8ballRandom" src="img/magic8ball_9.png" />',
    // '<img class="8ballRandom" src="img/magic8ball_10.png" />',
    // '<img class="8ballRandom" src="img/magic8ball_11.png" />',
    // '<img class="8ballRandom" src="img/magic8ball_12.png" />',
    // '<img class="8ballRandom" src="img/magic8ball_13.png" />',
    // '<img class="8ballRandom" src="img/magic8ball_14.png" />',
    // '<img class="8ballRandom" src="img/magic8ball_15.png" />',
    // '<img class="8ballRandom" src="img/magic8ball_16.png" />',
    // '<img class="8ballRandom" src="img/magic8ball_17.png" />',
    // '<img class="8ballRandom" src="img/magic8ball_18.png" />',
    // '<img class="8ballRandom" src="img/magic8ball_19.png" />',
    // '<img class="8ballRandom" src="img/magic8ball_20.png" />'
];

//Generate a random number 
const randomNumber = Math.random() * answers.length;

//Turn Random number using the key above.
const randomNumberFloor = Math.floor(randomNumber)

//alert(answers[randomNumberFloor]);
answer.innerHTML = answers[randomNumberFloor];

});