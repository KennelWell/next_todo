import {prisma} from '@/prisma/prisma-client';
import { Board } from '@prisma/client';
import { TimeLike } from 'fs';
import Link from 'next/link';

export default async function Board() {

    const lists = await prisma.board.findMany({
        where: {
            userId: 1,
        }
        
    });
    const date = (data: TimeLike) => {
        const newDate = new Date(data).toLocaleDateString('ru-RU', {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'});
        return newDate;
    } 
    console.log(lists);
    return (
    <div>
        Boards
        <p className='border border-red-500'></p>

        <div className='border-t-2 border-gray-500 min-h-[900px] px-10 flex '>
        {lists.map((list: Board) => (
            <Link key={list.id} href={`/board/${list.id}`} className="max-w-sm max-h-[300px] min-w-lg p-6 mt-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex-col">
           
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{list.title}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 h-[80%]">{list.description ? list.description : 'some description'}</p>
            <p className="mb-2 text-sm font-bold tracking-tight text-gray-200 dark:text-white">{date(list.createdAt)}</p>
            </Link>

        ))}
        </div>
    </div>
)
}


{/* <div className='mt-4 w-1/3 border border-gray-500 text-center' key={list.id}>
<Link className='text-3xl' href={`/board/${list.id}`}>{list.title} </Link>
</div> */}