import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const moon1 = document.querySelector('.moon');
const body = document.querySelector('body');
moon1.onclick = function(){
    body.classList.toggle('sun');
}

function stars(){
  let count=500;
  let scene = document.querySelector('.scene');
  let i=0;
  while(i<count){
      let star = document.createElement("i");
      let x = Math.floor(Math.random() * window.innerWidth);
      let y = Math.floor(Math.random() * window.innerHeight);
      let duration = Math.random() * 10;
      let size = Math.random() * 2;

      star.style.left = x + 'px';
      star.style.top = y + 'px';
      star.style.width = 1+size + 'px';
      star.style.height = 1+size + 'px';

      star.style.animationDuration = 5+duration + 's';
      star.style.animationDelay = duration + 's';

      scene.appendChild(star);
      i++
  }
}
stars();