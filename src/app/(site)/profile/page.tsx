"use client"

import { notFound } from "next/navigation";
import axios, { AxiosResponse } from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import React, {useState} from "react";


export default function ProfilePage() {
    const router = useRouter();
    const logout =  async () => {
        try {
            await axios.get("/api/users/logout")
            toast.success;
            router.push('/login');
            
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>profile</h1>
            <hr />
            <button onClick={logout} className='my-2 p-2 border border-pink-200 hover:border-pink-400'>logout</button>
            <p>Profile page</p>
            <div className="flex border border-red-400">
                
            </div>
        </div>
    )
}