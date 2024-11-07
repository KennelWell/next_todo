import { NextResponse } from "next/server";

export async function GET(){
    try {
        const response = await NextResponse.json(
            {
                message: 'Success exit',
                success: true
            }
        )
        response.cookies.delete("token");

        return response;
    } catch (error: any) {
        return NextResponse.json({error:error.message});
    }
}