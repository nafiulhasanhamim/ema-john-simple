import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';

function App() {
 
  return (
    <div>
     <Header></Header>
     <Shop></Shop>
    </div>
  );
}


export default App;
