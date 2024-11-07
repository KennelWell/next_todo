import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from "next/server";
const validator = require('validator');
const bcryptjs = require('bcryptjs');


export async function POST(request: NextRequest) {
    try{
        const data = await request.json();
        const {username, email, password} = data;

        console.log(data);

        //check 
        const candidate = await prisma.user.findUnique({where: {email: email}})
        if(candidate){
            return NextResponse.json({error: "User alredy exist"}, {status: 400})
        };


        if(validator.isEmail(email)){
            console.log('Good');
        }else{
            return NextResponse.json({error: "wrong email"}, {status: 400})
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        const user = await prisma.user.create({
            data:{
                name: username,
                email: email,
                password: hashedPassword
            }
        })
        

        const board = await prisma.board.create({
            data: {
                title: 'default board',
                userId: user.id
            }
        })
        const lists = await prisma.list.createMany({
            data: [{
                title: 'todo',
                boardId: board.id,
            }, {
                title: 'in progress',
                boardId: board.id
            }, {
                title: 'done',
                boardId: board.id
            }]
        })

        
        // console.log(user);

        return NextResponse.json({
            message: "Userc created success",
            success: true,
            user
        })


    }catch (error: any){
        return NextResponse.json({error: error.message}, {status: 500})
    }
}

