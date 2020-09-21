import './styles/styles.css';

const button = document.createElement('button');
button.innerText = 'Click Me';
button.onclick = () => alert('Hello World!');

document.body.appendChild(button);
