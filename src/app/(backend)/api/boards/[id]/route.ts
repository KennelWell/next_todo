import { prisma } from "@/prisma/prisma-client";
import { DataFromToken } from "@/src/lib/DataFromToken"
import { NextRequest, NextResponse } from "next/server"
export async function GET(request: NextRequest, {params}: {params: {slug: string}}) {
    try{
        const id = await DataFromToken(request);
        const board = await prisma.board.findUnique({
            where: {
                id: Number(params.slug),
                userId: id
            }
        })
    }catch(error: any) {
        return NextResponse.json({error: error.message})
    }
}