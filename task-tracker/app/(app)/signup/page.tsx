"use client";

import { useState } from 'react';

export default function Signup(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Email and password", email, password);
    }

    return(
        <div>
            <form onSubmit={handleSignup}>
                <h2>Signup</h2>
                <input 
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <input 
                type='password'
                placeholder='Confirm Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit'>Signup</button>
            </form>
        </div>
    )
}