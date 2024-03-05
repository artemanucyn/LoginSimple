import React from 'react';

const PasswordForgot = () => {
    return (
    <form>
        <input 
            name="email" 
            type="email" 
            placeholder="Work Email" 
        />
        <input 
            name="submit"
            type="submit"
            value="Send"
        />
        <input 
            name="submit"
            type="submit"
            value="Cancel"
        />
    </form>
    )
}

export default PasswordForgot;
