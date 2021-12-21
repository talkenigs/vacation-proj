import './App.css';
import React from 'react';
import Header from '../Header/header';
import Menu from '../Menu/Menu';
import Hero from '../Hero/Hero';
import { UserProvider } from '../Context/UserProvider'
import { VacationsProvider } from '../Context/VacationsProvider'
import AdminRouter from '../Catalog/AdminRouter';


function App() {

  return ( 
    <>
    <UserProvider>
    <VacationsProvider>
    <Header/>
    <Menu/>
    <Hero/>
    <AdminRouter/>
    </VacationsProvider>
    </UserProvider>
    </>
  );
}

export default App;
