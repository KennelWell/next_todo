import { prisma } from "@/prisma/prisma-client";
import { DataFromToken } from "@/src/lib/DataFromToken"
import { NextRequest, NextResponse } from "next/server"
import jwt, { JwtPayload } from 'jsonwebtoken'



export async function GET(request: NextRequest) {
    try {
        const id = await DataFromToken(request);
        const lists = await prisma.list.findMany(
            {
                where: {
                    userId: id
                },
                include: {
                    tasks: true
                }
            }
        )
        
        return NextResponse.json(lists);
    } catch (error: any) {
        return NextResponse.json({error: error.message})
    }
}

export async function POST(request: NextRequest) {
    try {
        const {title, listId} = await request.json();
        const req = await prisma.task.create({
            data: {
                title,
                listId,
                status: 'NEW',
            }
        })

        // const req = {id: 1, title, listId, status: 'NEW'}

        console.log(req)
        return NextResponse.json({message: "success", body: req});
    } catch (error: any) {
        console.log(error.message);
    }
}

