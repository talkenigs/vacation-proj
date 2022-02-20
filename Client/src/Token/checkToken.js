import React from 'react'
import axios from 'axios'

function checkToken() {
    const token = localStorage.getItem('token')
    const check = async () => {
        axios.get("/token", {
            params: {
                token: token
            }
        })
        .then((response) => {
            console.log(response.data)
        })
    }
    check()
    return (
        <>
            
        </>
    )
}

export default checkToken
