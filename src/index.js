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

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <React.StrictMode>
  <Routes>
    <Route path='/' element={<App />}></Route>
    <Route path='/clone-comments-component' element={<CommentsComponent />}></Route>
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
