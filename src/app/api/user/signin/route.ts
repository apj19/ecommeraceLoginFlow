"use server"
import { NextRequest, NextResponse } from "next/server"
import { loginFormSchema } from "~/app/helper/zodschems";
import { db } from "~/server/db";
import bcrypt from 'bcryptjs';

// import { redirect } from 'next/navigation'

import createJwtToken from "~/app/helper/jwthelper";
import hashInput from "~/app/helper/hashinput";
type RequestData = {
    email:string;
    password: string;
};


export async function POST(request:NextRequest,res:NextResponse){


    try {
        const requestData:RequestData= await request.json() as RequestData;
        //input validation
        const validation=loginFormSchema.safeParse(requestData);
        if(!validation.success){
            return  NextResponse.json({error:"Bad input"},{status:400}) 
        }

        const {email,password}=requestData;

        //find user from db with email

        const user= await db.user.findFirst({
            where:{
                email:email
            }
        });

        if(user){
            
            //checking password
            const hashedPassword = await hashInput(password);
            console.log(hashedPassword)
            ////
            const validPassword = await bcrypt.compare(password, user.password);
            if(!validPassword){
                
                return NextResponse.json({error: "Invalid password spi/user/signin"}, {status: 400})
            }
            const jwttoken= createJwtToken(user.email);

            const response= NextResponse.json({
                message:"login successful",
                success:true
            },{status:201});

            response.cookies.set("token",jwttoken,{httpOnly:true});

            return response;


            // return NextResponse.json({message:"user Logged in"},{status:200}) 

        }else{
            return  NextResponse.json({error:"user not exists"},{status:400})
        }




    } catch (error) {
        return NextResponse.json({error:"server error from sign in"},{status:500}) 
    }

}