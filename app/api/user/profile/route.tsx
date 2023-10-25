import { db } from "@/db";
import { NextResponse } from "next/server";
type photo ={
    photo?: string
}

export async function PATCH(req:Request) {
    try {
        const body = await req.json();
        const{ username, email, photo } = body;
        await db.user.update({
            where:{
                email: email
            },
            data:{
                username: username,
                email: email,
                photo: photo,
            }
        });
        return NextResponse.json({message: "Profile updated succesfully"}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "Unable to update your profile"}, {status: 500})
    }
}
export async function DELETE(req:Request) {
    try {
        const body = await req.json();
        const {email} = body;
        await db.user.delete({
            where: {
                email: email
            }
        })
        return NextResponse.json({message: "Profile deleted"}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: "Unable to delete profile"},{status: 501})
    }
}