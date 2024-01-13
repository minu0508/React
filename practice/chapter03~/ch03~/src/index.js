import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';

const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 * Chapter_03
 */
// root.render(
//   <React.StrictMode>
//     <Library />
//   </React.StrictMode>
// );

/**
 * Chapter_04
 * [setInterval 함수 사용]
 *  : 개발자가 맨 뒤에 설장한 값(ms)마다 새롭게 clock Component를 root.div에 Rendering.
 */
setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  );
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();