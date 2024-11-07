import { cn } from "@/src/lib/utils";
import { Task } from "@/src/types";
import React, { useEffect, useState } from "react";
import { InputTask } from "./inputTask";
import { DndContext, DragEndEvent } from "@dnd-kit/core";

interface Props {
    className?: string
    id: number
    tasks: Task[]
}


export  const TaskItem: React.FC<Props> = ({className, id, tasks}) => {
    const [activeTask, setActiveTask] = useState(0);
    const [taskStatus, setTaskStatus] = useState({id: 0, status: false});
    const [task, setTask] = useState<Task[]>(tasks);

    function handleDragEnd(event: DragEndEvent){
        const {active, over} = event;

        if(!over) return;

        const taskId = active.id as number;
        const newStatus = over.id as Task["status"];

        setTask(() => task.map(task => task.id  === taskId ? {...task, status: newStatus} : task, ), )
    }




    const vars = `<input type='text' value={task.title}/>`; 
    return (
        <div className={cn(className)}>
            <DndContext onDragEnd={handleDragEnd}>
            {tasks.map((task: Task) => (
                <div  className='px-2 mt-5 bg-white text-black min-h-[150px] rounded-lg hover:bg-gray-100 hover:border border-red-400' key={task.id}>
                 {task.title}
             </div>
                // <li  onClick={() => {handleHide(task)}} 
                // className="border-b border-gray-200 flex items-center justify-between px-3 py-1 hover:bg-gray-400 select-none"
                // key={task.id}>{task.title} 
                // <p className="relative" ></p> 
                // </li>
            ))}
            </DndContext>
        </div>
    )
}


//{task.status === 'NEW' ? <span onClick={() => handleDropdown()} className="w-3 h-3 p-1  bg-primary rounded-full cursor-pointer">{task.status}</span> : <span  className="w-3 h-3 bg-gray-300 rounded-full">{task.status}</span>}