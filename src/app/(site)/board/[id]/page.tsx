"use client"
import {prisma} from '@/prisma/prisma-client';
import { TaskItem } from '@/src/components/dashboard/TaskItem';
import { DropPlace } from '@/src/components/Tasklist/DropPlace';
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
        <div>
            Here board with id: {id}
<div className='border border-red-500 h-[800px] overflow-y-auto'>
    <div className='border-t-2 bg-white px-10 grid grid-cols-5 gap-2 h-[500px] pt-2'>


        {board?.lists.map((list: any) => (
                    <div className='border border-red-500 px-1 py-2 rounded-2xl bg-slate-300' key={list.id}>
                        <div className='flex justify-between mb-2 px-2'> 
                        <div className='flex items-center justify-between gap-2'>
                            <h2 className='text-md text-center'>{list.title}</h2>
                            <p className='text-sm text-grayfont-bold tracking-tight'>Колво задач:{list._count.tasks}</p>
                        </div>
                        <div>меню</div>
                        </div>

                        <TaskItem tasks={list.tasks} id={list.id}/>
                    </div>
            ))}
    </div>
</div>
        </div>
    )
}