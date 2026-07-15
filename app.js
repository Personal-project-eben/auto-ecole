// État global de l'application
let currentSection = 'quiz'; // 'quiz', 'flash', 'stats'
let appState = {
  mode: null,
  currentQuestions: [],
  currentIndex: 0,
  score: 0,
  mistakes: [],
  selectedTheme: null,
  selectedAnswers: []
};

let timerInterval;
let timeLeft = 40;

// AUDIO (Mode Examen)
function stopSpeech() {
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel();
  }
}

function speakText(text) {
  if (!('speechSynthesis' in window)) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'fr-FR';
  utterance.rate = 0.95;
  speechSynthesis.speak(utterance);
}

function speakQuestionAudio(q) {
  stopSpeech();
  const letters = ['A', 'B', 'C', 'D'];
  speakText(q.text);
  q.options.forEach((opt, i) => speakText(`Option ${letters[i]}. ${opt}`));
}

function replayAudio() {
  const q = appState.currentQuestions[appState.currentIndex];
  if (q) speakQuestionAudio(q);
}

// Statistiques (sauvegardées en localStorage si possible)
let userStats = JSON.parse(localStorage.getItem('autoEcoleStats')) || {
  sessions: 0,
  correct: 0,
  wrong: 0,
  bestScore: 0,
  history: []
};

// Obtenir tous les chapitres uniques
const chapters = [...new Set(questions.map(q => q.chapter))];

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', () => {
  updateStatsUI();
  populateThemes();
  populateFlashcardThemes();
  initFlashcards();
  document.getElementById('total-questions-count').innerText = questions.length;
});

// NAVIGATION
function showSection(section) {
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  const btnId = `nav-${section}`;
  const btn = document.getElementById(btnId);
  if (btn) btn.classList.add('active');

  document.getElementById('section-quiz').style.display = 'none';
  document.getElementById('section-flash').style.display = 'none';
  document.getElementById('section-stats').style.display = 'none';
  document.getElementById('section-review').style.display = 'none';
  document.getElementById('section-panneaux').style.display = 'none';
  document.getElementById('quiz-screen').style.display = 'none';
  document.getElementById('results-screen').style.display = 'none';

  document.getElementById(`section-${section}`).style.display = 'block';
  currentSection = section;

  if (section === 'stats') {
    updateStatsUI();
  }
}

// LOGIQUE QUIZ
function startQuiz(mode) {
  appState.mode = mode;
  appState.score = 0;
  appState.mistakes = [];
  appState.currentIndex = 0;

  if (mode === 'thematic') {
    document.getElementById('theme-selector').style.display = 'block';
    return;
  }

  let questionsToPlay = [...questions];

  if (mode === 'exam') {
    // 40 questions max, ou tout si moins
    questionsToPlay = questionsToPlay.sort(() => 0.5 - Math.random()).slice(0, 40);
  } else if (mode === 'random') {
    questionsToPlay = questionsToPlay.sort(() => 0.5 - Math.random());
  } else if (mode === 'panneaux') {
    questionsToPlay = questionsToPlay.filter(q =>
      q.chapter === "L'éclairage et la signalisation" ||
      q.chapter === "Les Piétons et Usagers Vulnérables"
    );
    questionsToPlay = questionsToPlay.sort(() => 0.5 - Math.random());
  }

  appState.currentQuestions = questionsToPlay;
  launchQuizScreen();
}

function startThematicQuiz(theme) {
  appState.mode = 'thematic';
  appState.selectedTheme = theme;
  appState.score = 0;
  appState.mistakes = [];
  appState.currentIndex = 0;
  appState.currentQuestions = questions.filter(q => q.chapter === theme);
  hideThemeSelector();
  launchQuizScreen();
}

function launchQuizScreen() {
  if (appState.currentQuestions.length === 0) {
    alert("Aucune question disponible pour ce mode.");
    return;
  }
  document.getElementById('section-quiz').style.display = 'none';
  document.getElementById('quiz-screen').style.display = 'flex';
  loadQuestion();
}

function hideThemeSelector() {
  document.getElementById('theme-selector').style.display = 'none';
}

function populateThemes() {
  const container = document.getElementById('themes-grid');
  container.innerHTML = '';
  const chapterEmojis = {
    "L'éclairage et la signalisation": "🚦",
    "Intersections et Priorité": "🔀",
    "Croisement et Dépassement": "↔️",
    "Arrêt et Stationnement": "🅿️",
    "Le Véhicule": "🔧",
    "Route et Autoroute": "🛣️",
    "Freinage et Dérapage": "🛑",
    "Catégories de Permis": "📋",
    "Infractions": "⚠️",
    "Accidents et Secourisme": "🚑",
    "Notion de Mécanique": "⚙️",
    "Les Piétons et Usagers Vulnérables": "🚶",
    "Environnement et Écologie": "🌿"
  };

  chapters.forEach(chap => {
    const count = questions.filter(q => q.chapter === chap).length;
    const div = document.createElement('div');
    div.className = 'theme-item';
    div.innerHTML = `
      <span class="theme-emoji">${chapterEmojis[chap] || '📖'}</span>
      <div class="theme-text">
        <div class="theme-name">${chap}</div>
        <div class="theme-count">${count} question${count > 1 ? 's' : ''}</div>
      </div>
    `;
    div.onclick = () => startThematicQuiz(chap);
    container.appendChild(div);
  });
}

function loadQuestion() {
  appState.selectedAnswers = [];
  const q = appState.currentQuestions[appState.currentIndex];
  document.getElementById('question-chapter').innerText = q.chapter;
  document.getElementById('question-text').innerText = q.text;
  
  const imgEl = document.getElementById('question-image');
  if (q.image) {
    imgEl.src = q.image;
    imgEl.style.display = 'block';
  } else {
    imgEl.style.display = 'none';
    imgEl.src = '';
  }

  document.getElementById('quiz-counter').innerText = `Question ${appState.currentIndex + 1} / ${appState.currentQuestions.length}`;
  document.getElementById('quiz-score-badge').innerText = `✓ ${appState.score}`;
  
  const progressPct = (appState.currentIndex / appState.currentQuestions.length) * 100;
  document.getElementById('quiz-progress-fill').style.width = `${progressPct}%`;

  const isAudioMode = appState.mode === 'exam';

  const optionsList = document.getElementById('options-list');
  optionsList.innerHTML = '';

  const letters = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    if (isAudioMode) {
      btn.classList.add('audio-only');
      btn.innerHTML = `<span class="option-letter">${letters[index]}</span>`;
    } else {
      btn.innerHTML = `<span class="option-letter">${letters[index]}</span>${opt}`;
    }
    btn.onclick = () => toggleAnswer(index, btn);
    optionsList.appendChild(btn);
  });

  document.getElementById('feedback-panel').style.display = 'none';
  document.getElementById('validate-btn').style.display = 'inline-block';
  document.getElementById('validate-btn').disabled = false;

  const replayBtn = document.getElementById('replay-audio-btn');
  if (isAudioMode) {
    replayBtn.style.display = 'inline-block';
    speakQuestionAudio(q);
  } else {
    replayBtn.style.display = 'none';
    stopSpeech();
  }

  startTimer();
}

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 40;
  const timerDisplay = document.getElementById('quiz-timer');
  timerDisplay.innerText = `⏱ ${timeLeft}s`;
  timerDisplay.style.color = 'var(--text)';

  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.innerText = `⏱ ${timeLeft}s`;
    
    if (timeLeft <= 5) {
      timerDisplay.style.color = 'var(--danger)';
    }

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      validateAnswer(true); // timeout validation
    }
  }, 1000);
}

function toggleAnswer(index, btnElement) {
  if (appState.selectedAnswers.includes(index)) {
    appState.selectedAnswers = appState.selectedAnswers.filter(i => i !== index);
    btnElement.classList.remove('selected');
    btnElement.style.borderColor = 'var(--border)';
  } else {
    appState.selectedAnswers.push(index);
    btnElement.classList.add('selected');
    btnElement.style.borderColor = 'var(--primary)';
  }
}

function validateAnswer(isTimeout = false) {
  clearInterval(timerInterval);
  stopSpeech();
  document.getElementById('validate-btn').style.display = 'none';
  document.getElementById('replay-audio-btn').style.display = 'none';

  const btns = document.querySelectorAll('.option-btn');
  btns.forEach(b => b.disabled = true);

  const q = appState.currentQuestions[appState.currentIndex];
  const letters = ['A', 'B', 'C', 'D'];

  // Révéler le texte des options (utile en Mode Examen où seules les lettres étaient visibles)
  btns.forEach((btn, idx) => {
    btn.classList.remove('audio-only');
    btn.innerHTML = `<span class="option-letter">${letters[idx]}</span>${q.options[idx]}`;
  });

  // Array comparison
  const sortedSelected = [...appState.selectedAnswers].sort();
  const sortedCorrect = [...q.correctAnswers].sort();
  const isCorrect = JSON.stringify(sortedSelected) === JSON.stringify(sortedCorrect) && !isTimeout;

  if (isCorrect) {
    appState.score++;
    userStats.correct++;
    showFeedback(true, "Bonne réponse !", q.explanation);
  } else {
    appState.mistakes.push({
      ...q,
      userAnswer: sortedSelected
    });
    userStats.wrong++;
    showFeedback(false, isTimeout ? "Temps écoulé !" : "Mauvaise réponse", q.explanation);
  }
  
  // Highlight correct and wrong answers
  btns.forEach((btn, idx) => {
    if (q.correctAnswers.includes(idx)) {
      btn.classList.add('correct');
      btn.style.borderColor = 'var(--success)';
      btn.style.color = 'var(--success)';
    } else if (appState.selectedAnswers.includes(idx) && !q.correctAnswers.includes(idx)) {
      btn.classList.add('wrong');
      btn.style.borderColor = 'var(--danger)';
      btn.style.color = 'var(--danger)';
    }
  });

  document.getElementById('quiz-score-badge').innerText = `✓ ${appState.score}`;
}

function showFeedback(isCorrect, title, explanation) {
  const panel = document.getElementById('feedback-panel');
  panel.style.display = 'block';
  panel.className = `feedback-panel ${isCorrect ? 'feedback-correct' : 'feedback-wrong'}`;
  document.getElementById('feedback-icon').innerText = isCorrect ? '✅' : '❌';
  document.getElementById('feedback-text').innerText = title;
  document.getElementById('feedback-explication').innerText = explanation || '';
}

function nextQuestion() {
  appState.currentIndex++;
  if (appState.currentIndex >= appState.currentQuestions.length) {
    endQuiz();
  } else {
    loadQuestion();
  }
}

function endQuiz() {
  stopSpeech();
  document.getElementById('quiz-screen').style.display = 'none';
  document.getElementById('results-screen').style.display = 'flex';

  const total = appState.currentQuestions.length;
  const pct = Math.round((appState.score / total) * 100);

  document.getElementById('score-number').innerText = appState.score;
  document.getElementById('score-total').innerText = `/ ${total}`;
  document.getElementById('results-pct').innerText = `${pct}% de réussite`;

  // Le barème "Examen" en France/Bénin est souvent 35/40 (soit 87.5%)
  if (pct >= 87.5) {
    document.getElementById('results-emoji').innerText = '🏆';
    document.getElementById('results-title').innerText = 'Félicitations, vous avez le niveau Examen !';
  } else if (pct >= 50) {
    document.getElementById('results-emoji').innerText = '👍';
    document.getElementById('results-title').innerText = 'Pas mal, mais il faut encore s\'entraîner.';
  } else {
    document.getElementById('results-emoji').innerText = '📚';
    document.getElementById('results-title').innerText = 'Beaucoup d\'erreurs, révisez vos cours.';
  }

  userStats.sessions++;
  if (appState.score > userStats.bestScore) {
    userStats.bestScore = appState.score;
  }
  
  userStats.history.unshift({
    date: new Date().toLocaleDateString(),
    mode: appState.mode,
    score: appState.score,
    total: total,
    pct: pct
  });
  
  if (userStats.history.length > 10) userStats.history.pop();
  
  saveStats();
  updateStatsUI();
}

function quitQuiz() {
  if(confirm("Voulez-vous vraiment quitter l'entraînement en cours ?")) {
    clearInterval(timerInterval);
    stopSpeech();
    document.getElementById('quiz-screen').style.display = 'none';
    showSection('quiz');
  }
}

function restartQuiz() {
  document.getElementById('results-screen').style.display = 'none';
  if (appState.mode === 'thematic') {
    startThematicQuiz(appState.selectedTheme);
  } else {
    startQuiz(appState.mode);
  }
}

function reviewMistakes() {
  document.getElementById('results-screen').style.display = 'none';
  document.getElementById('section-review').style.display = 'block';
  
  const list = document.getElementById('review-list');
  list.innerHTML = '';
  
  if (appState.mistakes.length === 0) {
    list.innerHTML = '<p style="text-align:center;">Aucune erreur à revoir ! 🎉</p>';
    return;
  }

  appState.mistakes.forEach(q => {
    const card = document.createElement('div');
    card.style.background = 'var(--surface)';
    card.style.padding = '1.5rem';
    card.style.borderRadius = 'var(--radius)';
    card.style.marginBottom = '1rem';
    card.style.borderLeft = '4px solid var(--danger)';
    
    let correctStr = q.correctAnswers.map(idx => q.options[idx]).join(" ET ");
    
    let imgHtml = q.image ? `<img src="${q.image}" style="max-width: 100%; max-height: 150px; border-radius: var(--radius); margin-bottom: 1rem;" />` : '';

    card.innerHTML = `
      <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">${q.chapter}</div>
      ${imgHtml}
      <h3 style="margin-bottom: 1rem; color: var(--text);">${q.text}</h3>
      <p style="color: var(--success); font-weight: 500; margin-bottom: 0.5rem;">✓ Bonne(s) réponse(s) : ${correctStr}</p>
      <p style="color: var(--text-muted); font-size: 0.95rem; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border);">${q.explanation}</p>
    `;
    list.appendChild(card);
  });
}

// FLASHCARDS
let currentFlashcardIndex = 0;
let activeFlashcards = [...questions];

function populateFlashcardThemes() {
  const select = document.getElementById('fc-theme-select');
  if(!select) return;
  chapters.forEach(chap => {
    const opt = document.createElement('option');
    opt.value = chap;
    opt.innerText = chap;
    select.appendChild(opt);
  });
}

function filterFlashcards() {
  const theme = document.getElementById('fc-theme-select').value;
  if (theme === 'all') {
    activeFlashcards = [...questions];
  } else {
    activeFlashcards = questions.filter(q => q.chapter === theme);
  }
  currentFlashcardIndex = 0;
  initFlashcards();
}

function initFlashcards() {
  document.getElementById('flashcard').classList.remove('flipped');
  if (activeFlashcards.length === 0) return;
  const q = activeFlashcards[currentFlashcardIndex];
  document.getElementById('fc-category').innerText = q.chapter;
  document.getElementById('fc-question').innerText = q.text;
  
  let correctStr = q.correctAnswers.map(idx => q.options[idx]).join(" ET ");
  document.getElementById('fc-answer').innerText = correctStr + "\n\n" + q.explanation;
  
  document.getElementById('fc-counter').innerText = `${currentFlashcardIndex + 1} / ${activeFlashcards.length}`;
}

function flipCard() {
  document.getElementById('flashcard').classList.toggle('flipped');
}

function nextCard() {
  if (currentFlashcardIndex < activeFlashcards.length - 1) {
    currentFlashcardIndex++;
    document.getElementById('flashcard').classList.remove('flipped');
    setTimeout(initFlashcards, 150);
  }
}

function prevCard() {
  if (currentFlashcardIndex > 0) {
    currentFlashcardIndex--;
    document.getElementById('flashcard').classList.remove('flipped');
    setTimeout(initFlashcards, 150);
  }
}

// STATS
function saveStats() {
  localStorage.setItem('autoEcoleStats', JSON.stringify(userStats));
}

function updateStatsUI() {
  document.getElementById('home-sessions').innerText = userStats.sessions;
  document.getElementById('home-best').innerText = userStats.bestScore;

  document.getElementById('stat-sessions').innerText = userStats.sessions;
  document.getElementById('stat-correct').innerText = userStats.correct;
  document.getElementById('stat-wrong').innerText = userStats.wrong;
  document.getElementById('stat-best').innerText = userStats.bestScore;
  
  const totalAnswers = userStats.correct + userStats.wrong;
  const rate = totalAnswers > 0 ? Math.round((userStats.correct / totalAnswers) * 100) : 0;
  
  document.getElementById('stat-rate').innerText = `${rate}%`;
  document.getElementById('stat-rate-bar').style.width = `${rate}%`;

  const historyList = document.getElementById('history-list');
  historyList.innerHTML = '';
  
  if (userStats.history.length === 0) {
    historyList.innerHTML = '<p style="text-align:center; color: var(--text-muted);">Aucune session jouée pour le moment.</p>';
  } else {
    userStats.history.forEach(h => {
      const item = document.createElement('div');
      item.style.background = 'var(--surface)';
      item.style.padding = '1rem';
      item.style.borderRadius = 'var(--radius)';
      item.style.marginBottom = '0.5rem';
      item.style.display = 'flex';
      item.style.justifyContent = 'space-between';
      item.style.alignItems = 'center';
      
      // Seuil examen à 87.5% de réussite (ex: 35/40)
      const isSuccess = h.pct >= 87.5;
      
      item.innerHTML = `
        <div>
          <strong>Mode ${h.mode === 'exam' ? 'Examen' : h.mode === 'thematic' ? 'Thématique' : 'Aléatoire'}</strong>
          <div style="font-size: 0.85rem; color: var(--text-muted);">${h.date}</div>
        </div>
        <div style="font-weight:bold; color: ${isSuccess ? 'var(--success)' : h.pct >= 50 ? 'var(--warning)' : 'var(--danger)'}">
          ${h.score} / ${h.total} (${h.pct}%)
        </div>
      `;
      historyList.appendChild(item);
    });
  }
}

function resetStats() {
  if (confirm("Êtes-vous sûr de vouloir supprimer tout votre historique ?")) {
    userStats = {
      sessions: 0,
      correct: 0,
      wrong: 0,
      bestScore: 0,
      history: []
    };
    saveStats();
    updateStatsUI();
  }
}
