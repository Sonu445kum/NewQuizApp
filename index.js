// Initialize variables
let currentPage = "homePage";
let currentCategory = null;
let currentQuestionIndex = 0;
let score = 0;
let timer = 30;
let timerInterval;
let startTime;
let userName = "";

// Define the questions
const questions = {
  pipeAndCisterns: [
    // create a question with options and the correct answer

    {
        question: "A pipe can fill a tank in 3 hours. If 2 pipes of the same size work together, how long will they take to fill the tank?",
        options: ["3 hours", "4 hours", "2 hours", "5 hours"],
        answer: "0",
    },
    {
      question:
        "A pipe can fill a tank in 6 hours. If two identical pipes work together, how long will they take to fill the tank?",
      options: ["3 hours", "4 hours", "2 hours", "5 hours"],
      answer: "0",
    },
    {
      question:
        "A tank is filled by a pipe in 12 hours and emptied by a drain pipe in 18 hours. If both work simultaneously, how long will it take to fill the tank?",
      options: ["36 hours", "40 hours", "30 hours", "45 hours"],
      answer: "2",
    },
    {
      question:
        "A pipe fills 3/4 of a tank in 12 minutes. How much time is required to fill the entire tank?",
      options: ["16 minutes", "18 minutes", "20 minutes", "15 minutes"],
      answer: "1",
    },
    {
      question:
        "Two pipes A and B can fill a tank in 12 hours and 15 hours, respectively. If both pipes are opened together, how long will it take to fill the tank?",
      options: [
        "6 hours",
        "6 hours 40 minutes",
        "7 hours",
        "7 hours 30 minutes",
      ],
      answer: "1",
    },
    {
      question:
        "Pipe A fills a tank in 10 hours, and pipe B empties the tank in 15 hours. If both are opened together, how long will it take to fill the tank?",
      options: ["20 hours", "30 hours", "25 hours", "15 hours"],
      answer: "1",
    },
    {
      question:
        "Pipe A can fill a tank in 5 hours, and Pipe B can fill it in 10 hours. If Pipe C empties the tank in 8 hours, how long will it take to fill the tank if all three are opened?",
      options: ["10 hours", "8 hours", "20 hours", "6 hours"],
      answer: "3",
    },
    {
      question:
        "A pipe fills a tank in 4 hours. However, due to a leak, it takes 5 hours to fill. How long would the leak alone take to empty the full tank?",
      options: ["10 hours", "15 hours", "20 hours", "25 hours"],
      answer: "2",
    },
    {
      question:
        "Pipe A fills a tank in 8 hours, and pipe B empties it in 16 hours. If both are opened together, how long will it take to fill the tank?",
      options: ["12 hours", "14 hours", "16 hours", "24 hours"],
      answer: "0",
    },
    {
      question:
        "Three pipes A, B, and C can fill a tank in 3, 4, and 6 hours, respectively. If all three pipes are opened simultaneously, how long will it take to fill the tank?",
      options: [
        "1 hour 12 minutes",
        "1 hour 20 minutes",
        "1 hour 30 minutes",
        "1 hour 45 minutes",
      ],
      answer: "1",
    },
  ],
  probability: [
    // create a question with options and the correct answer
    {
      question:
        "What is the probability of getting a head when flipping a fair coin?",
      options: ["1/2", "1/3", "1/4", "1"],
      answer: "0",
    },
    {
      question:
        "A bag contains 5 red and 3 blue balls. What is the probability of drawing a blue ball?",
      options: ["5/8", "3/8", "1/2", "3/5"],
      answer: "1",
    },
    {
      question:
        "What is the probability of rolling a 4 on a fair six-sided die?",
      options: ["1/6", "1/4", "1/3", "1/2"],
      answer: "0",
    },
    {
      question:
        "A box contains 4 red, 3 green, and 5 blue balls. What is the probability of drawing a green ball?",
      options: ["1/3", "1/4", "3/12", "3/9"],
      answer: "1",
    },
    {
      question:
        "Two dice are rolled. What is the probability of getting a sum of 7?",
      options: ["1/6", "1/8", "1/12", "1/36"],
      answer: "0",
    },
    {
      question:
        "A card is drawn at random from a standard deck of 52 cards. What is the probability of drawing an Ace?",
      options: ["1/13", "1/4", "1/12", "1/52"],
      answer: "0",
    },
    {
      question:
        "In a class of 10 boys and 5 girls, one student is selected randomly. What is the probability of selecting a girl?",
      options: ["1/2", "1/3", "1/5", "2/5"],
      answer: "3",
    },
    {
      question:
        "What is the probability of getting an even number when rolling a fair six-sided die?",
      options: ["1/2", "1/3", "1/4", "2/3"],
      answer: "0",
    },
    {
      question:
        "A bag contains 4 red balls, 3 yellow balls, and 3 blue balls. If one ball is picked randomly, what is the probability of it being yellow?",
      options: ["3/10", "1/3", "1/4", "3/9"],
      answer: "0",
    },
    {
      question:
        "Two coins are flipped simultaneously. What is the probability of getting at least one tail?",
      options: ["1/4", "3/4", "1/2", "2/3"],
      answer: "1",
    },
  ],
  problemsOnAge: [
    // create a question with options and the correct answer
    {
      question:
        "The present age of A is 4 years more than the age of B. If the sum of their ages is 40 years, what is the age of A?",
      options: ["22", "24", "26", "28"],
      answer: "24",
    },
    {
      question:
        "A’s father is 4 times as old as A. After 10 years, the father will be 3 times as old as A. What is the present age of A?",
      options: ["10 years", "12 years", "14 years", "15 years"],
      answer: "10 years",
    },
    {
      question:
        "The sum of the present ages of A and B is 40 years. 5 years ago, A was three times as old as B. What are their present ages?",
      options: ["A=25, B=15", "A=30, B=10", "A=28, B=12", "A=35, B=5"],
      answer: "A=30, B=10",
    },
    {
      question:
        "The present age of a mother is 6 times that of her daughter. After 10 years, the mother will be 4 times as old as her daughter. What is the present age of the daughter?",
      options: ["5 years", "6 years", "7 years", "8 years"],
      answer: "5 years",
    },
    {
      question:
        "The sum of the present ages of A and B is 50 years. 10 years ago, A was twice as old as B. What are their present ages?",
      options: ["A=30, B=20", "A=40, B=10", "A=35, B=15", "A=45, B=5"],
      answer: "A=40, B=10",
    },
    {
      question:
        "A is 3 years older than B. In 6 years, A will be twice as old as B. What is their present age?",
      options: ["A=12, B=9", "A=14, B=11", "A=15, B=12", "A=18, B=15"],
      answer: "A=12, B=9",
    },
    {
      question:
        "The present age of a man is 5 years more than twice the age of his son. In 5 years, the man will be 3 times as old as his son. What is the present age of the son?",
      options: ["5 years", "6 years", "7 years", "8 years"],
      answer: "5 years",
    },
    {
      question:
        "The sum of the present ages of two persons is 56 years. 4 years ago, the ratio of their ages was 7:5. What are their present ages?",
      options: ["A=32, B=24", "A=36, B=20", "A=28, B=28", "A=30, B=26"],
      answer: "A=36, B=20",
    },
    {
      question:
        "A man is 20 years older than his son. In 5 years, the man will be twice as old as his son. What is the present age of the son?",
      options: ["10 years", "15 years", "20 years", "25 years"],
      answer: "15 years",
    },
    {
      question:
        "The sum of the ages of A and B is 60 years. 5 years ago, A was 5 times as old as B. What are their present ages?",
      options: ["A=55, B=5", "A=50, B=10", "A=45, B=15", "A=40, B=20"],
      answer: "A=50, B=10",
    },
  ],

  profitAndLoss: [
    // create a question with options and the correct answer
    {
      question: "What is the formula for calculating Profit?",
      options: [
        "Selling Price - Cost Price",
        "Cost Price - Selling Price",
        "Selling Price + Cost Price",
        "Selling Price / Cost Price",
      ],
      answer: "Selling Price - Cost Price",
    },
    {
      question:
        "If an article is sold for ₹1500 at a profit of 20%, what is the cost price?",
      options: ["₹1250", "₹1200", "₹1300", "₹1400"],
      answer: "₹1250",
    },
    {
      question:
        "A person sells a product for ₹1200 and makes a loss of 10%. What is the cost price?",
      options: ["₹1300", "₹1400", "₹1100", "₹1250"],
      answer: "₹1333.33",
    },
    {
      question:
        "If the selling price of an item is ₹500 and the profit made is ₹100, what is the cost price?",
      options: ["₹400", "₹500", "₹600", "₹700"],
      answer: "₹400",
    },
    {
      question:
        "A trader buys goods worth ₹4000 and sells them at a profit of 25%. What is the selling price?",
      options: ["₹4500", "₹5000", "₹5500", "₹6000"],
      answer: "₹5000",
    },
    {
      question:
        "What will be the profit percentage if a product is sold for ₹1500, and its cost price is ₹1200?",
      options: ["20%", "25%", "30%", "15%"],
      answer: "25%",
    },
    {
      question:
        "A shopkeeper sells an article for ₹250, making a loss of 10%. What was the cost price?",
      options: ["₹275", "₹300", "₹280", "₹270"],
      answer: "₹277.78",
    },
    {
      question:
        "If the cost price of an item is ₹500 and the profit earned is ₹100, what is the selling price?",
      options: ["₹600", "₹550", "₹510", "₹570"],
      answer: "₹600",
    },
    {
      question:
        "A trader bought an article for ₹1200 and sold it for ₹1350. What is his profit percentage?",
      options: ["10%", "15%", "12.5%", "14%"],
      answer: "12.5%",
    },
    {
      question:
        "If an article is sold at ₹250 with a profit of 25%, what is the cost price?",
      options: ["₹200", "₹180", "₹210", "₹190"],
      answer: "₹200",
    },
  ],
};

// create a function to enter the quiz
function enterQuiz() {
  userName = document.getElementById("userName").value;
  if (userName === "") {
    alert("Please enter your name.");
    return;
  }
  document.getElementById("homePage").style.display = "none";
  document.getElementById("quizPage").style.display = "block";
  currentPage = "quizPage";
}

// create a function to select a category
function selectCategory(category) {
  currentCategory = category;
  loadNextQuestion();
}

// create a function to load the next question
function loadNextQuestion() {
  if (currentQuestionIndex >= questions[currentCategory].length) {
    showResultPage();
    return;
  }

  const currentQuestion = questions[currentCategory][currentQuestionIndex];

  document.getElementById("question").textContent = currentQuestion.question;
  document.getElementById("questionNumber").textContent = `Question: ${
    currentQuestionIndex + 1
  }/${questions[currentCategory].length}`;
  const options = document.getElementById("options");
  options.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option");
    button.onclick = () => handleAnswer(index);
    options.appendChild(button);
  });

  startTimer();
}

// create a function to handle the user's answer
function handleAnswer(selectedIndex) {
  const currentQuestion = questions[currentCategory][currentQuestionIndex];

  // Check if the selected answer is correct
  if (currentQuestion.options[selectedIndex] === currentQuestion.answer) {
    score++; // Increase score if correct answer
  }

  // Update the score display in the top-right corner
  document.getElementById("score").textContent = `Score: ${score}`;

  currentQuestionIndex++;

  // If there are more questions, load the next one
  if (currentQuestionIndex < questions[currentCategory].length) {
    loadNextQuestion();
  } else {
    showResultPage();
  }
}

// create a function to start the timer
function startTimer() {
  clearInterval(timerInterval);
  timer = 30;
  document.getElementById("timer").textContent = `Time: ${timer}s`;

  timerInterval = setInterval(() => {
    timer--;
    document.getElementById("timer").textContent = `Time: ${timer}s`;
    if (timer <= 0) {
      clearInterval(timerInterval);
      loadNextQuestion();
    }
  }, 1000);
}

// create a function to show the result page
function showResultPage() {
  clearInterval(timerInterval);
  document.getElementById("quizPage").style.display = "none";
  document.getElementById("resultPage").style.display = "block";
  currentPage = "resultPage";

  const timeTaken = Math.floor((new Date() - startTime) / 1000);

  document.getElementById("resultName").textContent = userName;
  document.getElementById("resultTime").textContent = timeTaken;
  document.getElementById("resultScore").textContent = score;
  document.getElementById("resultAttempts").textContent = currentQuestionIndex;
  document.getElementById("resultCorrect").textContent = score;
  document.getElementById("resultWrong").textContent =
    currentQuestionIndex - score;
  document.getElementById("resultPercentage").textContent = (
    (score / currentQuestionIndex) *
    100
  ).toFixed(2);
}

// create a function to restart the quiz
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  startTime = new Date();
  document.getElementById("resultPage").style.display = "none";
  document.getElementById("homePage").style.display = "block";
  currentPage = "homePage";
}
// create a function to go back to the home page
function goHome() {
  document.getElementById("resultPage").style.display = "none";
  document.getElementById("homePage").style.display = "block";
  currentPage = "homePage";
}
