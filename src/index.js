import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CommentsComponent from './components/Comments.component';
import Todo from './components/Todo.component';
import Calculator from './components/Calculator.component';
import Counter from './components/Counter.component';
import {testimonial} from './clasess/testimonial.model.js';

const testi1 = new testimonial('Shawn Wang','Singapore','Software Engenieer','Amazon','"Its scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."','https://www.freecodecamp.org/static/Shawn-bf42c7b909dae3111d18a21870ee6ca5.png')
const testi2 = new testimonial('Sarah Chima','Nigeria','Software Engenieer','ChatDesk','"freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."','https://www.freecodecamp.org/static/Sarah-45de0e53b7b2520ebbac35c454b9748a.png')
const testi3 = new testimonial('Emma Bostian','Sweden','Software Engenieer','Spotify','"Ive always struggled with learning JavaScript. Ive taken many courses but freeCodeCamps course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."','https://www.freecodecamp.org/static/Emma-5a662db9bcf55809a1fefb2ea17634bc.png')


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <React.StrictMode>
  <Routes>
    <Route path='/' element={<App />}></Route>
    <Route path='/clone-comments-component' element={<CommentsComponent myProp={[testi1,testi2,testi3]}/>}></Route>
    <Route path='/todo-component' element={<Todo />}></Route>
    <Route path='/calculator-component' element={<Calculator /> }></Route>
    <Route path='/counter-component' element={<Counter />}></Route>
  </Routes>
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
