import './App.css';
import React from 'react';
import Header from '../Header/header';
import Menu from '../Menu/Menu';
import Hero from '../Hero/Hero';
import { UserProvider } from '../Context/UserProvider'
import { VacationsProvider } from '../Context/VacationsProvider'
import AdminRouter from '../Catalog/AdminRouter';
import CheckToken from '../Token/checkToken'


function App() {

  return ( 
    <>
    <UserProvider>
    <VacationsProvider>
    {/* <CheckToken/> */}
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
