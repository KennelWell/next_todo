"use client"
import { Container } from "@/src/components/Container";
import { TodoList } from "@/src/components/dashboard/TodoList";
import { DashboardTaskList } from "@/src/components/Tasklist/DashboardTaskList";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";



export default function Dashboard(){

    

    return (
        <>
        <div className="px-20">
            <div className="max-h-32 flex py-5 items-center justify-between">
                <p>Menus</p>
                <Link href={'/board'}>Boards</Link>
                <p>Profile</p>
            </div>

        <div className="max-h-10">Dashboard</div>

        <div>

        </div>

        </div>
        
        </>
    )

    // const [lists, setLists] = useState([]);



    // useEffect(() => {
    //     const getLists = async () => {
    //         try{
    //             const res = await axios.get('/api/todo');
    //             console.log(res.data);
    //             setLists(res.data);
    //         }catch(e: any){
    //             console.log(e.message);
    //         }
    //     }
    //     getLists();
 
    // }, []);

    // return (
    //     <Container>     
    //     <div className="flex">
    //         <TodoList lists={lists} tasks={[]} />
    //         {/* {lists.map((list: any) => (
    //             <TodoList className="min-w-[300px]" key={list.id} title={list.title} description={list.description} tasks={[list.tasks]} />
    //         ))} */}
    //     </div>
    //     </Container>
    // )
}