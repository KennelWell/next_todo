"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
const validator = require('validator');
import { useRouter } from 'next/navigation'
import toast, { Toaster } from 'react-hot-toast'
import axios, { Axios } from 'axios'



export default function LoginPage() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const router = useRouter();

    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [loading, setLoading] = useState(false);


    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log('success');
            toast.success('Login success');
            router.push("/dashboard");
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message)
        }finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if(validator.isEmail(user.email) && user.password.length > 7){
            setButtonDisabled(false)
        }else{
            setButtonDisabled(true)
        }
    }, [user])

    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <h1>{loading ? "Processing" : "Login"}</h1>
            <hr />
            <form  className='flex flex-col'>
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

                <button className='mt-2 p-2 border border-pink-200 hover:border-pink-400'
                    formAction={onLogin}
                    disabled={buttonDisabled}>
                login</button>

                </form>
                <Link href="/signup" className='text-pink-200 p-2 mt-2'>signup</Link>
        </div>
    )
}