import { db } from "./../../../../db";
import { NextResponse } from "next/server";
import  bcrypt  from 'bcrypt'

export async function POST(req:Request) {
    try {
        const body = await req.json();

        const { email, username , password } = body;
        
        const hashedPassword = await bcrypt.hash(password, 12)

        const existingEmail = await db.user.findUnique({
            where: {email: email}
        })
        if(existingEmail){
            return NextResponse.json({user: null, message: "User already exists with this email"})
        }
        const existingUsername = await db.user.findUnique({
            where: {username: username}
        })
        if(existingUsername){
            return NextResponse.json({user: null, message: "User already exists with this username"})
        }

        const newUser = await db.user.create({
            data: {
                email,
                username,
                password: hashedPassword
            }
        })

        const { password: newUserPassword, ...rest } = newUser

        return NextResponse.json({user: rest, message: "User created"}, {status: 201} )

        
    } catch (error) {
        return NextResponse.json({error})
        
    }
}