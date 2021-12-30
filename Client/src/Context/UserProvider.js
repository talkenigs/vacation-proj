import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

export function UserProvider({ children }) {
    const token = localStorage.getItem('token')
    const [userNow, setUserNow] = useState({id: '', username: null})

    useEffect(async () => {
        await axios.get("http://127.0.0.1:4000/token", {
            params: {
                token: token
            }
        })
        .then((response) => {
            setUserNow({id: response.data.decoded.id, username: ''})
            localStorage.setItem('userNow', JSON.stringify({id: response.data.decoded.id, username: ''}))
        })
        .catch((err) => {
            console.log(err)
            setUserNow({id: '', username: ''})
        })
    }, [])

    return (
        <>
            {userNow.username === null? <p>test</p>:<UserContext.Provider value={userNow} >
            {children}
            </UserContext.Provider>}
        </>
    )
}

export default UserProvider
