const questions = [
    { q: "La capital de Francia es París.", a: true },
    { q: "El Sol gira alrededor de la Tierra.", a: false },
    { q: "La teoría de la relatividad fue propuesta por Newton.", a: false },
    { q: "El océano más grande es el Pacífico.", a: true },
    { q: "La Gran Muralla China es visible desde la Luna.", a: false },
    // ...agrega más preguntas si lo deseas
  ];
  
  let currentQuestion = 0;
  let correctAnswers = 0;
  
  function startTrivia() {
    correctAnswers = 0;
    currentQuestion = 0;
    document.getElementById('result').textContent = '';
    document.getElementById('trivia-container').style.display = 'block';
    nextQuestion();
  }
  
  function nextQuestion() {
    if (currentQuestion < 10) {
      const question = questions[Math.floor(Math.random() * questions.length)];
      document.getElementById('question').textContent = question.q;
      currentQuestion++;
      window.currentAnswer = question.a;
    } else {
      document.getElementById('trivia-container').style.display = 'none';
      const score = Math.round((correctAnswers / 10) * 100);
      document.getElementById('result').textContent = 
        score >= 70 ? `¡Felicidades! Aprobaste con un ${score}%` : `Tu puntaje es de ${score}%. Inténtalo de nuevo.`;
    }
  }
  
  function answer(isCorrect) {
    if (isCorrect === window.currentAnswer) correctAnswers++;
    nextQuestion();
  }
  