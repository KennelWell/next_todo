// import { User } from "@/src/app/(site)/dashboard/page";
import { cn } from "@/src/lib/utils";
import {List, Task} from "@/src/types/index";
import axios from "axios";
import { list } from "postcss";
import { title } from "process";
import React, { useEffect, useState } from "react";
import { set } from "react-hook-form";
import { TaskItem } from "./TaskItem";

interface Props {
    className?: string
    lists: List[]
    tasks: Task[]
}


export const TodoList: React.FC<Props> = ({className, lists, tasks}) => {

    const [activeLists, setActiveLists] = useState(1);
    const [activeTask, setActiveTask] = useState([]);
    const [newTask, setNewTask] = useState('');


    const addNewTask = async () => {
        try {
            const res = await axios.post('/api/todo', {title: newTask, listId: activeLists})
            const active = lists.find((list: List) => list.id === activeLists);
            setNewTask('');
            console.log(res.data.body)
            active!.tasks.push(res.data.body)
            return res.data.body
        } catch (error: any) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        console.log(activeTask)
    }, [activeTask])
    return (
        <div className={cn(className, "w-full border border-primary flex flex-col gap-3")}>
            <div>
            <input className="text-black" type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
            <button onClick={addNewTask}>Add</button>
            </div>
            <div className="flex gap-3">
            {lists.map((list: List) => (
            <div className="text-center select-none flex-col min-w-[200px] border-x border-primary " key={list.id} onClick={() => setActiveLists(list.id)}>
                 {activeLists === list.id ? <h1 className="bg-primary py-3">{list.title}</h1> : <h1 className="bg-gray-300 py-3">{list.title}</h1>}
                <TaskItem id={list.id} tasks={list.tasks}/>
            </div>
            ))}
            <div>
                123
            </div>
            </div>
            
        </div>
    )
}