import './App.css';
import React from 'react';
import Header from '../Header/header';
import Menu from '../Menu/Menu';
import Hero from '../Hero/Hero';
import Catalog from '../Catalog/Catalog';
import { UserProvider } from '../Context/UserProvider'

// export const UserContext = React.createContext("time")
// const userNow = () => {
//   const localData = localStorage.getItem('userNow')
//   return localData ? JSON.parse(localData) : []
// };

function App() {

  return ( 
    <>
    <UserProvider>
    <Header/>
    <Menu/>
    <Hero/>
    <Catalog/>
    </UserProvider>
    </>
  );
}

export default App;
