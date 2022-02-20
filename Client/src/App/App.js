import './App.css';
import React from 'react';
import Header from '../Header/header';
import Menu from '../Menu/Menu';
import Hero from '../Hero/Hero';
import { UserProvider } from '../Context/UserProvider'
import { VacationsProvider } from '../Context/VacationsProvider'
import AdminRouter from '../Catalog/AdminRouter';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Footer from '../Footer/Footer'


function App() {

  return ( 
    <>
    <UserProvider>
    <VacationsProvider>
    <Header/>
    <Router>
    <Menu/>
    <Hero/>
    <AdminRouter/>
    </Router>
    <Footer/>
    </VacationsProvider>
    </UserProvider>
    </>
  );
}

export default App;
