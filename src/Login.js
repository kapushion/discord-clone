import React from "react";
import {Button} from "@material-ui/core";
import "./Login.css";
import {auth, provider} from "./firebase";
function Login() {
    const signIn = () => {
        //do oauth2.0
        auth.signInWithPopup(provider).catch((error) => alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="./DiscordLogo3-2.jpg" alt=""/>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login;