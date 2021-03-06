import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

export function UserProvider({ children }) {
    const token = localStorage.getItem('token')
    const [userNow, setUserNow] = useState({id: '', username: null})

    useEffect(async () => {
        await axios.get("/token", {
            params: {
                token: token
            }
        })
        .then((response) => {
            if(response.data.decoded.id !== undefined){
            setUserNow({id: response.data.decoded.id, username: ''})
            localStorage.setItem('userNow', JSON.stringify({id: response.data.decoded.id, username: ''}))
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])


    return (
        <>
            <UserContext.Provider value={userNow} >
            {children}
            </UserContext.Provider>
        </>
    )
}

export default UserProvider
