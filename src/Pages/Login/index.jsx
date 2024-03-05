import React from 'react';

const Login = () => {
    return (
        <>
            <form onSubmit={onSubmit}>
                <input 
                    name="email" 
                    type="email" 
                    placeholder="Work Email" 
                />
                <input 
                    name="password" 
                    type="password" 
                    placeholder="Password" 
                />
                <input 
                    name="submit"
                    type="submit"
                    value="Log in to Qencode"
                />
            </form>
        </>
    )
}

export default Login;
