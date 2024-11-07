import { NextRequest } from "next/server";
import jwt, { JwtPayload } from 'jsonwebtoken'


export const DataFromToken = (request: NextRequest) => {
    const hashedToken: any = request.cookies.get('token')?.value;
    try {
        const data  =  <JwtPayload> jwt.verify(hashedToken, process.env.SECRET_TOKEN as string);

        // console.log(data);

        return data.id;
        
    } catch (error: any) {
        throw new Error(error.message);
    }
}