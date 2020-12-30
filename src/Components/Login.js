import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from '../firebase'
import './Login.css'

const Login = () => {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message))
    }

    return (
        <div className="login">
            <div className="login__telegram">
                <img src="https://i.ibb.co/B2zkny3/Logo.png"/>
                <h1>LurbChat</h1>
            </div>  
            <Button onClick={signIn}>Sign In</Button>          
        </div>
    )
}

export default Login
