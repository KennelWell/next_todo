export interface List {
    id: number;
    title: string;
    description?: string;
    userId: number;
    status: string;
    tasks: Task[];
}


export interface Task {
    id: number;
    title: string;
    description?: string;
    listId: number;
    status: string;
}