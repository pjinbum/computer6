/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import Comment from './component/Comment';
import { useState } from 'react';
import Header from './component/Header';

function App() {
  return (
    <div className="App">
      <Header list='Menu 1' list1='Menu 2' list2='Menu 3' ></Header>

      <Comment name='라라라' St='안녕하세요 , 집에가고싶다'/>
      <Comment name='리리리' St='리액트 재밌다!'/>
      <Comment name='로로로' St='리액트 리액트 리액트'/>
    </div>
  );
}

export default App;
