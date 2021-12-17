import './App.css';
import React from 'react';
import Header from '../Header/header';
import Menu from '../Menu/Menu';
import Hero from '../Hero/Hero';
import { UserProvider } from '../Context/UserProvider'
import AdminRouter from '../Catalog/AdminRouter';

function App() {

  return ( 
    <>
    <UserProvider>
    <Header/>
    <Menu/>
    <Hero/>
    <AdminRouter/>
    </UserProvider>
    </>
  );
}

export default App;
