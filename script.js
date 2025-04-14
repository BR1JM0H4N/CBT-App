  let questions = [], currentQuestionIndex = 0, score = 0, userResponses = [], timer, timeLeft;
  const headUrs = document.getElementById("headUrs");

  function error(){
  document.getElementById("err").style.display = "block";
  document.getElementById("nameInput").style.display = "none";
  headUrs.innerHTML = '<span class="material-icons">error</span> ERROR';
  }

  function extractUrlParts(){
  const t = location.hash.substr(1);
  if (t){
  const e = t.split("@"), n = e[0], o = e[1];
  if (!n || !o) return alert("Wrong URL"), error();
  return {qSub: n, qFile: o};
  }
  alert("Wrong URL");
  error();
  }

  const {qSub, qFile} = extractUrlParts();

  function analyzeTable(){
  const rows = document.getElementById("scoreCard").getElementsByTagName("tr");
  for (let i = 0; i < rows.length; i++){
  let cols = rows[i].getElementsByTagName("td"),
  userAns = cols[1].innerText,
  correctAns = cols[2].innerText;
  if (userAns !== correctAns) rows[i].style.backgroundColor = "#781d00";
  }
  }

  async function startQuiz(){
  const t = document.getElementById("playerName").value;
  if (t === ""){
  return alert("Please enter your name to start the quiz!");
  }
  try {
  headUrs.innerHTML = '<span class="material-icons">expand_more</span> Getting Questions';
  document.getElementById("nameInput").style.display = "none";
  const e = `https://litter.catbox.moe/${qFile}.json`,
  n = await fetch(e);
  questions = await n.json();
  document.getElementById("playerNameDisplay").textContent = t;
  document.getElementById("quizContent").style.display = "block";
  headUrs.innerHTML = '<span class="material-icons">list_alt</span> MCQs';
  startTimer();
  displayQuestion();
  } catch(err) {
  alert("Error fetching question file: " + err.message);
  document.getElementById("err").style.display = "block";
  document.getElementById("nameInput").style.display = "none";
  headUrs.innerHTML = '<span class="material-icons">error</span> ERROR';
  }
  }

  function startTimer(){
  timeLeft = 60 * questions.length;
  timer = setInterval(() => {
  if (timeLeft <= 0){
  clearInterval(timer);
  skipAllRemainingQuestions();
  } else {
  timeLeft--;
  document.getElementById("timer").textContent = `Time left: ${Math.floor(timeLeft/60)}:${timeLeft % 60}`;
  }
  }, 1000);
  }

  function displayQuestion(){
  const curr = questions[currentQuestionIndex];
  document.getElementById("question").innerHTML = `<strong>${currentQuestionIndex+1} of ${questions.length}.</strong> ${curr.question}`;
  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";
  curr.options.forEach((option, idx) => {
  const btn = document.createElement("button");
  btn.textContent = option;
  btn.onclick = function(){ checkAnswer(option); };
  optionsContainer.appendChild(btn);
  });
  }

  function skipQuestion(){
  userResponses.push({
  question: questions[currentQuestionIndex].question,
  selectedOption: "Not attempted",
  correctAnswer: questions[currentQuestionIndex].correctAnswer
  });
  currentQuestionIndex++;
  currentQuestionIndex < questions.length ? displayQuestion(): endQuiz();
  }

  function checkAnswer(answer){
  const curr = questions[currentQuestionIndex];
  userResponses.push({
  question: curr.question,
  selectedOption: answer,
  correctAnswer: curr.correctAnswer
  });
  if (answer === curr.correctAnswer) score++;
  currentQuestionIndex++;
  currentQuestionIndex < questions.length ? displayQuestion(): endQuiz();
  }

  function skipAllRemainingQuestions(){
  while (currentQuestionIndex < questions.length){
  skipQuestion();
  }
  endQuiz();
  }

  function endQuiz(){
  clearInterval(timer);
  headUrs.innerHTML = '<span class="material-icons">bar_chart</span> Result';
  document.getElementById("quizContent").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("score").textContent = score;
  document.getElementById("totalScore").textContent = questions.length;
  const percentage = (score / questions.length * 100).toFixed(2);
  document.getElementById("percentage").textContent = percentage + "%";
  document.getElementById("resultStatus").textContent = percentage >= 50 ? "Passed": "Failed";
  const tbl = document.getElementById("scoreCard");
  tbl.innerHTML = "";
  userResponses.forEach(item => {
  const row = document.createElement("tr"),
  qCell = document.createElement("td"),
  userCell = document.createElement("td"),
  correctCell = document.createElement("td");
  qCell.textContent = item.question;
  userCell.textContent = item.selectedOption;
  correctCell.textContent = item.correctAnswer;
  row.appendChild(qCell);
  row.appendChild(userCell);
  row.appendChild(correctCell);
  tbl.appendChild(row);
  });
  analyzeTable();
  }

  // Set document title and subject header text.
  document.title = `${qSub} CBT By dr.brijmohan`;
  document.getElementById("sub").textContent = `Subject :: ${qSub}`;
  console.log("First Variable:", qSub);
  console.log("Second Variable:", qFile);
