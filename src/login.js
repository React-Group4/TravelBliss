import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

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
            className="btn btn-primary btn-block"
            onClick={() => loginWithRedirect()}
            style={buttonStyles}
        >
            Login
        </button>
    );
};

export default LoginButton;