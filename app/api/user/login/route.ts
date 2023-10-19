import { db } from "../../../../db";
import { NextResponse } from "next/server";
import  bcrypt  from 'bcrypt'

export async function POST(req:Request) {
    try {
        const body = await req.json();

        const { email, password } = body;

        const userByEmail = await db.user.findUnique({
            where: {
              email: email,
            },
          })

        console.log(userByEmail)
        if(!userByEmail){
            return NextResponse.json({user: null, message: "This is not a valid email"})
        }

        const isValidPassword = await bcrypt.compare(password, userByEmail.password);
        console.log(isValidPassword);
        if(!isValidPassword){
            return NextResponse.json({user: null, message: "This password is not valid"})
        }

        return NextResponse.json({userByEmail, message: "User Authenticated!"}, {status: 201} )

        
    } catch (error) {
        return NextResponse.json({error})
        
    }
}