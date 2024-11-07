"use client"

import { Container } from "@/src/components/Container";
import { service } from "@/src/hooks";
import React, {useState } from "react";



export default function Lists() {

    
    const handleLists = async () => {
        try {
            const response = await service.get.lists();
            return response;
        } catch (error: any) {
            console.log({message: error.message})
        }

    }

    const [lists, setLists] = useState<any>(handleLists);
    console.log(lists)
    return (
        <Container>
            <div className="flex border border-primary justify-between">
                <div className="p-5 flex flex-col items-center">
                    <p className="text-3xl">Tasks</p>
                    {lists ? "L" : "N"}

                </div>
                <div className="flex flex-col items-center p-5">
                    <p className="text-3xl"> new list</p>
                </div>
            </div>
        </Container>
    )
}