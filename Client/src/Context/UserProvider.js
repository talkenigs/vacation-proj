import React from 'react'

export const UserContext = React.createContext()

export function UserProvider({ children }) {
    const userNow = () => {
        const localData = localStorage.getItem('userNow')
        return localData ? JSON.parse(localData) : []
      };

    return (
        <>
            <UserContext.Provider value={userNow()} >
            {children}
            </UserContext.Provider>
        </>
    )
}

export default UserProvider
