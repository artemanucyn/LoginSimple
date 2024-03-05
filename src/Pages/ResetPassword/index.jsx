import React from 'react';

const PasswordReset = () => {
    return (
    <form>
        <input 
            name="password" 
            type="password" 
            placeholder="Password" 
        />
        <input 
            name="confirm-password" 
            type="password" 
            placeholder="Password" 
        />
        <input 
            name="submit"
            type="submit"
            value="Reset Password"
        />
    </form>
    )
}

export default PasswordReset;
