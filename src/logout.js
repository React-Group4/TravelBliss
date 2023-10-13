import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    const { logout } = useAuth0();


    const buttonStyles = {
        backgroundColor: "#b23b3b", 
        color: "#fff",              
        padding: "8px 16px",       
        borderRadius: "4px",        
        border: "none",            
        cursor: "pointer",        
        fontSize: "16px",         
        fontWeight: "bold",          
        marginLeft: "18%"        
    };


    return (
        <button
            className="logout-button"
            onClick={() => logout({ returnTo: window.location.origin })}
        >
            Logout
        </button>
    );
};

export default LogoutButton;