import React, {useState, useContext, useEffect} from 'react'
import io from 'socket.io-client'

export const SocketContext = React.createContext()

export function SocketProvider({ children }) {
    const socket = io.connect("/") 

    useEffect(() => {    
        
           }, []);

    return (
        <>
            <SocketContext.Provider value={socket} >
            {children}
            </SocketContext.Provider>
        </>
    )
}

export default SocketProvider
