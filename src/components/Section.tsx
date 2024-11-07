import React from 'react'
import { cn } from '../lib/utils'


interface Props {
    className?: string
}

export const Section: React.FC<React.PropsWithChildren<Props>> = ({className, children}) => {

    return (
        <div className={cn(className, "bg-slate-600")}>
            {children}
        </div>
    )
}