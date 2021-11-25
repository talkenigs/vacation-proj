import './App.css';
import { useState, useRef, useEffect } from 'react';
import Header from './header';
import Menu from './Menu';
import Hero from './Hero';


function App() {

  async function FetchTest() {
    const url = "http://127.0.0.1:4000/"
    const users = await fetch(url)
    const data = await users.json()
    console.log(data)
  }

  // FetchTest()
  
  return ( 
    <>
    <Header/>
    <Menu/>
    <Hero/>
    </>
  );
}

export default App;
