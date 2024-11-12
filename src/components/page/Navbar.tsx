"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/src/lib/utils";



interface Props {
    className?: string
}

export const Navbar: React.FC<Props> = ({className}) => {
    return (
        <header className={cn('border-b border-primary', className)}>
            <div className="container mx-auto flex items-center justify-between p-5">
                {/* LEFT SIDE*/}
                <div className="flex flex-col items-center">
                    <div>Logo</div>
                   <div className="flex text-sm font-thin text-primary">slogan</div>
                </div>

                {/* RIGHT SIDE*/}
                <div className="flex justify-between gap-6">
                    <div>
                    <Link className="menu-link text-lg mx-3" href={'/login'}>Login?</Link>
                    <Link className="menu-link text-lg hover:text-primary hover:underline underline-offset-4" href={'/login'}>Some?</Link>
                    </div>
                    <div>login</div>
                </div>
            </div>
        </header>
    )
}