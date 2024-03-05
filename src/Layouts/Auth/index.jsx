import React from "react";

import "./index.css";

export const AuthLayout = ({ children }) => {
    return (
        <div className="auth-main flex-column">
            <div className="auth-container flex-column">
                <img 
                    alt="logo" 
                    src="imgs/qecodelogo.svg" 
                    className="auth-title" 
                />
                { children }
            </div>
        </div>
    )
}
