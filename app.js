const questions = [
  { day: 'DAY 1', q: '여행 일정에서 1만 동은 대략 얼마로 계산하기로 했나요?', options: ['약 400원', '약 500원', '약 600원', '약 1,000원'], answer: 2, explanation: '일정 상단에 “1만동 = 600원(실제 약 580~590원)”으로 정리되어 있습니다.' },
  { day: 'DAY 1', q: '대구에서 나트랑으로 출발하는 날짜는 언제인가요?', options: ['2026년 8월 25일', '2026년 8월 26일', '2026년 8월 27일', '2026년 8월 28일'], answer: 1, explanation: 'DAY 1은 2026년 8월 26일입니다.' },
  { day: 'DAY 1', q: '르모어 호텔 체크인 예정 시간은?', options: ['11:00', '12:00', '14:00', '16:00'], answer: 2, explanation: '르모어 호텔은 14:00 체크인 후 짐을 두고 나오는 일정입니다.' },
  { day: 'DAY 1', q: '첫날 포장 메뉴 조합으로 맞는 것은?', options: ['반미 판 + CCCP 코코넛커피', '안토이 + 척칩', '짜오마오1 + 피자 포피스', '그릭 수플라키 + 킹크랩'], answer: 0, explanation: 'DAY 1 포장 일정은 반미 판과 CCCP 코코넛커피입니다.' },
  { day: 'DAY 1', q: '첫날 환전 후보에 포함되지 않은 곳은?', options: ['ATM', '김빈', '김청', '세일링클럽'], answer: 3, explanation: '환전 후보는 ATM, 김빈, 김청입니다.' },
  { day: 'DAY 1', q: '첫날 점심으로 포장하기로 한 음식은?', options: ['곱창쌀국수', '그릭 수플라키', '피자', '킹크랩'], answer: 1, explanation: 'DAY 1 점심은 그릭 수플라키 포장입니다.' },
  { day: 'DAY 1', q: '화이트스파 앤 네일 예약 검토 시간은?', options: ['오전 9시', '오후 3시', '오후 8시', '밤 11시'], answer: 2, explanation: '일정에는 “20시 예약?”으로 적혀 있습니다.' },
  { day: 'DAY 1', q: '판랑 투어 전 호텔에서 하기로 한 것은?', options: ['요가', '낮잠(밤잠)', '수영', '짐 정리만 하기'], answer: 1, explanation: '투어 출발 전 체력 보충을 위해 호텔에서 낮잠(밤잠)을 잡았습니다.' },
  { day: 'DAY 2', q: 'DAY 2에 체크아웃하는 호텔은?', options: ['아미아나 리조트', '르모어 호텔', '빈펄 리조트', '인터컨티넨탈'], answer: 1, explanation: 'DAY 2에는 르모어 호텔을 체크아웃합니다.' },
  { day: 'DAY 2', q: '온시스파 예약 예정 시간은?', options: ['07:00', '09:00', '11:00', '15:00'], answer: 1, explanation: '온시스파는 09:00 예약 예정이며 여자 마사지사 요청 메모가 있습니다.' },
  { day: 'DAY 2', q: 'DAY 2 아점 식당으로 정한 곳은?', options: ['안토이', '꽌옥응온', '목 해산물 식당', '짜오마오1'], answer: 0, explanation: 'DAY 2 아점은 안토이이며 곱창쌀국수 호불호 메모가 있습니다.' },
  { day: 'DAY 2', q: '아미아나 리조트 체크인 시간은?', options: ['12시', '13시', '14시', '16시'], answer: 2, explanation: '아미아나 리조트 체크인은 14시입니다.' },
  { day: 'DAY 2', q: '아미아나 리조트 티아워 시간은?', options: ['10:00~11:00', '12:00~13:00', '15:00~16:00', '18:00~19:00'], answer: 2, explanation: '티아워는 15:00~16:00입니다.' },
  { day: 'DAY 3', q: 'DAY 3 요가 시작 시간은?', options: ['06:00', '07:00', '08:00', '09:00'], answer: 1, explanation: 'DAY 3 요가는 오전 7시입니다.' },
  { day: 'DAY 3', q: '물놀이 장소 중 추천 표시가 있는 곳은?', options: ['메인풀', '라군풀', '키즈풀', '루프탑풀'], answer: 1, explanation: '일정에는 메인풀과 라군풀이 있고, 라군풀 추천 메모가 있습니다.' },
  { day: 'DAY 3', q: '다음 중 무료 액티비티가 아닌 것은?', options: ['바구니배', '스노클링', '비치발리볼', '제트스키'], answer: 3, explanation: '제트스키는 유료 액티비티입니다.' },
  { day: 'DAY 3', q: '해피아워 제공 내용으로 맞는 것은?', options: ['1인 1음료만 무료', '1인 1디저트만 무료', '1인 1음료 + 1디저트 무료', '모든 메뉴 무제한'], answer: 2, explanation: '15:00~16:00에 1인 1음료와 1디저트가 무료입니다.' },
  { day: 'DAY 3', q: 'DAY 3 저녁으로 계획한 메뉴는?', options: ['킹크랩', '반미', '그릭 수플라키', '곱창쌀국수'], answer: 0, explanation: '목 해산물 식당에서 킹크랩을 먹는 일정입니다.' },
  { day: 'DAY 4-5', q: 'DAY 4-5 저녁 식당은?', options: ['피자 포피스 나트랑', '안토이', '꽌옥응온', 'CCCP'], answer: 0, explanation: '마지막 날 저녁은 피자 포피스 나트랑입니다.' },
  { day: 'DAY 4-5', q: '귀국일 공항 도착 목표 시각은?', options: ['20:00 이전', '22:00 이전', '00:00 이전', '02:00 이전'], answer: 2, explanation: '나트랑 → 대구 일정에는 00:00 이전 공항 도착이라고 적혀 있습니다.' }
];

const $ = (selector) => document.querySelector(selector);
const startScreen = $('#start-screen');
const quizScreen = $('#quiz-screen');
const resultScreen = $('#result-screen');
const startForm = $('#start-form');
const playerNameInput = $('#player-name');
const currentPlayer = $('#current-player');
const questionCounter = $('#question-counter');
const progressPercent = $('#progress-percent');
const progressBar = $('#progress-bar');
const questionDay = $('#question-day');
const questionText = $('#question-text');
const optionsEl = $('#options');
const prevBtn = $('#prev-btn');
const nextBtn = $('#next-btn');
const reviewBtn = $('#review-btn');
const restartBtn = $('#restart-btn');
const reviewSection = $('#review-section');
const reviewList = $('#review-list');
const scoreTableBody = $('#score-table-body');
const emptyScores = $('#empty-scores');
const exportBtn = $('#export-btn');
const clearBtn = $('#clear-btn');

let playerName = '';
let currentIndex = 0;
let answers = Array(questions.length).fill(null);

function renderQuestion() {
  const item = questions[currentIndex];
  const percent = Math.round(((currentIndex + 1) / questions.length) * 100);
  questionCounter.textContent = `${currentIndex + 1} / ${questions.length}`;
  progressPercent.textContent = `${percent}%`;
  progressBar.style.width = `${percent}%`;
  questionDay.textContent = item.day;
  questionText.textContent = item.q;
  optionsEl.innerHTML = '';

  item.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `option${answers[currentIndex] === index ? ' selected' : ''}`;
    btn.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${option}</span>`;
    btn.addEventListener('click', () => {
      answers[currentIndex] = index;
      renderQuestion();
    });
    optionsEl.appendChild(btn);
  });

  prevBtn.style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
  nextBtn.disabled = answers[currentIndex] === null;
  nextBtn.textContent = currentIndex === questions.length - 1 ? '결과 보기' : '다음';
}

function startQuiz(name) {
  playerName = name.trim();
  currentIndex = 0;
  answers = Array(questions.length).fill(null);
  currentPlayer.textContent = playerName;
  startScreen.classList.add('hidden');
  resultScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  reviewSection.classList.add('hidden');
  renderQuestion();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function finishQuiz() {
  const correct = questions.reduce((sum, q, i) => sum + (answers[i] === q.answer ? 1 : 0), 0);
  const score = correct * 5;
  const accuracy = Math.round((correct / questions.length) * 100);
  saveScore({ name: playerName, score, correct, total: questions.length, createdAt: new Date().toISOString() });

  $('#result-name').textContent = playerName;
  $('#result-score').textContent = score;
  $('#correct-count').textContent = correct;
  $('#wrong-count').textContent = questions.length - correct;
  $('#accuracy').textContent = `${accuracy}%`;
  $('.score-ring').style.setProperty('--score-deg', `${score * 3.6}deg`);

  const resultEmoji = $('#result-emoji');
  const message = $('#result-message');
  if (score === 100) {
    resultEmoji.textContent = '👑'; message.textContent = '완벽합니다. 일정 총괄 인정입니다.';
  } else if (score >= 80) {
    resultEmoji.textContent = '🏆'; message.textContent = '일정을 거의 정확하게 기억하고 있습니다.';
  } else if (score >= 60) {
    resultEmoji.textContent = '🌴'; message.textContent = '핵심 일정은 알고 있습니다. 몇 가지만 다시 확인하세요.';
  } else {
    resultEmoji.textContent = '🧳'; message.textContent = '출발 전에 일정표를 한 번 더 보는 편이 좋겠습니다.';
  }

  quizScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');
  renderReview();
  renderScores();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderReview() {
  reviewList.innerHTML = '';
  questions.forEach((q, i) => {
    const item = document.createElement('div');
    item.className = 'review-item';
    const isCorrect = answers[i] === q.answer;
    const userAnswer = answers[i] === null ? '미응답' : q.options[answers[i]];
    item.innerHTML = `
      <div class="review-number">Q${i + 1} · ${q.day}</div>
      <div class="review-question">${q.q}</div>
      <div class="review-answer">
        내 답: <span class="${isCorrect ? 'answer-correct' : 'answer-wrong'}">${userAnswer}</span><br>
        정답: <span class="answer-correct">${q.options[q.answer]}</span>
        <div class="review-explanation">${q.explanation}</div>
      </div>`;
    reviewList.appendChild(item);
  });
}

function getScores() {
  try { return JSON.parse(localStorage.getItem('nhaTrangQuizScores') || '[]'); }
  catch { return []; }
}

function saveScore(score) {
  const scores = getScores();
  scores.push(score);
  localStorage.setItem('nhaTrangQuizScores', JSON.stringify(scores));
}

function renderScores() {
  const scores = getScores().sort((a, b) => b.score - a.score || new Date(a.createdAt) - new Date(b.createdAt));
  scoreTableBody.innerHTML = '';
  emptyScores.classList.toggle('hidden', scores.length > 0);
  scores.forEach((s, index) => {
    const row = document.createElement('tr');
    const date = new Date(s.createdAt).toLocaleString('ko-KR', { year:'2-digit', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit' });
    const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : index + 1;
    row.innerHTML = `<td><span class="rank-badge">${medal}</span></td><td>${escapeHtml(s.name)}</td><td>${s.score}점</td><td>${s.correct}/${s.total}</td><td>${date}</td>`;
    scoreTableBody.appendChild(row);
  });
}

function escapeHtml(str) {
  return String(str).replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[ch]));
}

function exportCsv() {
  const scores = getScores();
  if (!scores.length) return alert('저장할 기록이 없습니다.');
  const rows = [['이름','점수','정답수','총문제수','응시일시'], ...scores.map(s => [s.name, s.score, s.correct, s.total, new Date(s.createdAt).toLocaleString('ko-KR')])];
  const csv = '\uFEFF' + rows.map(row => row.map(value => `"${String(value).replace(/"/g, '""')}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `나트랑_퀴즈_점수_${new Date().toISOString().slice(0,10)}.csv`; a.click();
  URL.revokeObjectURL(url);
}

startForm.addEventListener('submit', e => { e.preventDefault(); if (playerNameInput.value.trim()) startQuiz(playerNameInput.value); });
prevBtn.addEventListener('click', () => { if (currentIndex > 0) { currentIndex--; renderQuestion(); } });
nextBtn.addEventListener('click', () => { if (answers[currentIndex] === null) return; if (currentIndex < questions.length - 1) { currentIndex++; renderQuestion(); } else finishQuiz(); });
reviewBtn.addEventListener('click', () => { reviewSection.classList.toggle('hidden'); reviewBtn.textContent = reviewSection.classList.contains('hidden') ? '오답 확인' : '오답 닫기'; if (!reviewSection.classList.contains('hidden')) reviewSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); });
restartBtn.addEventListener('click', () => startQuiz(playerName));
exportBtn.addEventListener('click', exportCsv);
clearBtn.addEventListener('click', () => { if (confirm('현재 브라우저에 저장된 모든 점수 기록을 삭제할까요?')) { localStorage.removeItem('nhaTrangQuizScores'); renderScores(); } });

renderScores();
