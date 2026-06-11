let score = 0;
let current = 0;
let userName = "";

const questions = [
  { text: "テスト質問1", a: "A", b: "B" },
  { text: "テスト質問2", a: "A", b: "B" }
];

function showQuestion() {
  const q = questions[current];
  document.getElementById("question").innerText = q.text;
  document.getElementById("btnA").innerText = q.a;
  document.getElementById("btnB").innerText = q.b;
}

function answer(choice) {
  if (choice === "a") {
    score++;
  }

  current++;

  if (current < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  let resultText = "";
  let img = "";

  if (score === 2) {
    resultText = "共感タイプ";
    img = "images/01.jpeg";
  } else if (score === 1) {
    resultText = "包容タイプ";
    img = "images/02.PNG";
  } else {
    resultText = "分析タイプ";
    img = "images/03.jpeg";
  }

  document.body.innerHTML = `
    <h1>${userName}さんは<br>${resultText}</h1>
    <img src="${img}">
  `;
}

window.onload = function () {

  document.getElementById("startBtn").addEventListener("click", function () {
    userName = document.getElementById("username").value.trim();

    
// 名前が空なら「ゲスト」にする
if (userName === "") {
  userName = "ゲスト";
}


    document.getElementById("start").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    showQuestion();
  });

  document.getElementById("btnA").addEventListener("click", function () {
    answer("a");
  });

  document.getElementById("btnB").addEventListener("click", function () {
    answer("b");
  });

};