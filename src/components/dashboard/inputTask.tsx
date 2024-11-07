import { cn } from "@/src/lib/utils"
import { title } from "process"

interface Props {
    className?: string
    title: string
}

export const InputTask: React.FC<Props> = ({className}) => {
    return (
        <input className={cn(className)} value={title}/>
    )
}