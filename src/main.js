import './style.css';

const MBTI_DESCRIPTIONS = {
  E: 'E · 외향형 — 사람들과 함께할 때 에너지를 얻어요',
  N: 'N · 직관형 — 큰 그림과 가능성을 먼저 봐요',
  F: 'F · 감정형 — 사람의 마음과 관계를 소중히 여겨요',
  J: 'J · 판단형 — 계획을 세우고 차근차근 실행해요',
};

const GREETINGS = ['안녕하세요!', '반갑습니다!', 'Hello!'];

const mbtiLetters = document.querySelector('#mbti-letters');
const mbtiDesc = document.querySelector('#mbti-desc');
const greeting = document.querySelector('#greeting');

mbtiLetters.addEventListener('click', (event) => {
  const button = event.target.closest('.mbti-letter');
  if (!button) return;

  mbtiLetters
    .querySelectorAll('.mbti-letter')
    .forEach((el) => el.classList.toggle('active', el === button));
  mbtiDesc.textContent = MBTI_DESCRIPTIONS[button.dataset.letter];
});

let greetingIndex = 0;
setInterval(() => {
  greetingIndex = (greetingIndex + 1) % GREETINGS.length;
  greeting.classList.add('fade');
  setTimeout(() => {
    greeting.textContent = GREETINGS[greetingIndex];
    greeting.classList.remove('fade');
  }, 300);
}, 3000);
