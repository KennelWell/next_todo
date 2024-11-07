import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

const validator = require('validator');
const bcryptjs = require('bcryptjs');


export async function GET() {
    const users = await prisma.user.findMany();

    return NextResponse.json(users)
}

export async function POST(request: NextRequest){
   try {
     const data = await request.json();
     const {email, password} = data;
     console.log(data);

     const user = await prisma.user.findUnique({where: {email: email}})
     console.log(process.env.SECRET_TOKEN);
     if(!user){
        return NextResponse.json({error: "user doesn't exist"}, {status: 400})
     }

     const validPassword = await bcryptjs.compare(password, user.password);
     
     if(!validPassword){
        return NextResponse.json({error: "Wrong email or password"}, {status: 400})
     }

     const tokenData = {
        id: user.id,
        name:user.name,
        email: user.email
     }

     //create token
     const token = jwt.sign(tokenData, process.env.SECRET_TOKEN!, {expiresIn: '1d'});
     console.log(token);
     const response = NextResponse.json({message: 'success enter', success: true});

     response.cookies.set("token", token, {httpOnly: true})

     return response;




   } catch (error: any) {
    console.log(error)
     return NextResponse.json({error: error.message}, {status: 500})
   }
}