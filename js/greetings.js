const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

const greetingMessages = [
  'Hello!',
  'Hi.',
  'Welcome!',
  'Hey.',
  "How's it going?",
  "What's up?",
  'Good to see you.',
  "It's been a while.",
];

const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintGreetings(username) {
  const greetingMessage =
    greetingMessages[Math.floor(Math.random() * greetingMessages.length)];
  greeting.innerText = `${username}, ${greetingMessage}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (!savedUsername) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // 브라우저의 기본 동작을 막음
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
  });
} else {
  paintGreetings(savedUsername);
}
