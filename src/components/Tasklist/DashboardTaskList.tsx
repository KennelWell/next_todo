import axios from "axios";
import { useEffect, useState } from "react";
import { TaskItem } from "../dashboard/TaskItem";

export const DashboardTaskList = () => {


    const [lists, setLists] = useState([]);

    useEffect((): any => {
        const getLists = async () => {
            try {
                const res = await axios.get('/api/todo');
                console.log(res.data);
                setLists(res.data);
            } catch (e: any) {
                console.log(e.message);
            }
        }
        getLists();
    }, []);

    return (
        <div>
            <div className="flex gap-4 my-3 border border-primary">
                {lists.map((list: any) => (
                    <div className="border border-primary w-[200px] text-center" key={list.id}>
                        {list.title}
                        <TaskItem tasks={list.tasks} id={list.id} />
                    </div>
                ))}
            </div>


        </div>
    )
}