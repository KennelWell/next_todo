"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/navigation'
import axios from 'axios'
import toast from 'react-hot-toast'
const validator = require('validator');


export default function SignupPage() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    })
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log(response.data);
            router.push("/login");
        } catch (error: any) {
            console.log(error.message)
            toast.error(error.message);
        }finally{
            setLoading(false)
        }

    }
    
    useEffect(() => {
        if(validator.isEmail(user.email) && user.password.length > 7 && user.name.length > 3){
            setButtonDisabled(false);
        }else {
            setButtonDisabled(true);
        }
    }, [user])

    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <h1>{loading ? "Processing" : "Signup"}</h1>
            <hr />
            <label htmlFor='name'>Login</label>
            <input 
                className='p-2 border-2 border-pink-200 focus:border-gray-400'
                id='name' 
                type='text' 
                value={user.name} 
                onChange={(e) => setUser({...user, name: e.target.value})}
                placeholder='login' />
            <label htmlFor='email'>Email</label>
            <input 
                className='p-2 border-2 border-pink-200 focus:border-gray-400'
                id='email' 
                type='text' 
                value={user.email} 
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder='email' />
            <label htmlFor='password'>password</label>
            <input 
                className='p-2 border-2 border-pink-200 focus:border-gray-400'
                id='password' 
                type='password' 
                value={user.password} 
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder='password' />

                <button 
                    className='mt-2 p-2 border border-pink-200 hover:border-pink-400'
                    onClick={onSignup}
                    disabled={buttonDisabled}>
                        {buttonDisabled ? "no signup" : "Signup"}
                </button>
                <Link href="/login" className='text-pink-200 p-2 mt-2'>login</Link>
        </div>
    )
}