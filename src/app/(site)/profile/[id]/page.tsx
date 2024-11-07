"use client"
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";
import axios from "axios";
import Link from "next/link";


// eslint-disable-next-line @next/next/no-async-client-component
export default async function UserProfile({ params: { username } }: { params: { username: string } }) {
    const user = await prisma.user.findFirst({
        where:{
            name: username
        }
    })
    if(!user){
        username = "POPOPO";
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>profile</h1>
            <hr />
            
            <p className="text-4xl text-pink-200">Profile page <span className="text-pink-400 bg-black rounded-md py-2">{user?.name}</span></p>
        </div>
    )
}