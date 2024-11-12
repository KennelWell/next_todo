"use client"
import { TaskItem } from '@/src/components/dashboard/TaskItem';
import axios from 'axios';
import React, { useEffect, useState } from 'react';



export default  function Page({params: {id}}: {params: {id: string}}) {
    
    const [board, setBoard] = useState<any>();
    useEffect((): any => {
        const getLists = async () => {
            try {
                const board = await axios('/api/boards/', {params: {id: id}});
                console.log(board.data[0]);
                setBoard(board.data[0]);
            } catch (e: any) {
                console.log(e.message);
            }
        }
        getLists();
    }, []);
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            
        </div>
    )
}