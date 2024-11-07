import { DataFromToken } from "@/src/lib/DataFromToken";
import { NextRequest, NextResponse } from "next/server";
import {prisma} from '@/prisma/prisma-client'

export async function GET(request: NextRequest){
    try {
        const userID = await DataFromToken(request);
        
        const user = await prisma.user.findUnique(
            {
                where: {
                    id: userID
                }
            }
        )
        return NextResponse.json(user)
    } catch (error: any) {
        return NextResponse.json({error: error.message})
    }
}
