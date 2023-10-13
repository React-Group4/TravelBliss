import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./login.css";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();


    const buttonStyles = {
        backgroundColor: "#e5e5e5", 
        color: "#000000",              
        padding: "8px 16px",       
        borderRadius: "4px",        
        border: "none",             
        cursor: "pointer",          
        fontSize: "16px",           
        fontWeight: "bold",       
        marginLeft: "30%"        
    };


    return (
        <button
            className="login-button"
            onClick={() => loginWithRedirect()}

        >
            Login
        </button>
    );
};

export default LoginButton;