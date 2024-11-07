import { prisma } from "@/prisma/prisma-client";
import { DataFromToken } from "@/src/lib/DataFromToken";
import { NextRequest, NextResponse } from "next/server"



export async function GET(request: NextRequest) {
    try {
        const id = await DataFromToken(request);
        const boards = await prisma.board.findMany({
            where: {
                userId: id
            },
            include: {
                lists: {
                select: {
                    tasks: true,
                    title: true,
                    _count: true,
                },
            }
        }
        })

        return NextResponse.json(boards);
    }catch(error: any) {
        return NextResponse.json({error: error.message})
    }
}