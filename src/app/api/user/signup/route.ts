"use server"
import { NextRequest, NextResponse } from "next/server"
import { signUpFormSchema } from "~/app/helper/zodschems";
import { db } from "~/server/db";
import createJwtToken from "~/app/helper/jwthelper";
import hashInput from "~/app/helper/hashinput";
import { sendEmail } from "~/app/helper/mailer";


type RequestData = {
    name: string;
    email:string;
    password: string;
  };

export async function POST(request:NextRequest){


    try {
        //getting inut from request
        const requestData:RequestData= await request.json() as RequestData;
        ///doing input validations
        const validation=signUpFormSchema.safeParse(requestData);
        //if input not val;id sending 400 error request
        
        if(!validation.success){
            return  NextResponse.json({error:"Bad input"},{status:400}) 
        }
        //if input valid
        
        const {name,email,password}=requestData;
        //check in databse if user already exisis
        const user= await db.user.findFirst({
            where:{
                email:email
            }
        });

        if(user){
            //usser present in db
            return  NextResponse.json({error:"user exists"},{status:400})
        }else{
            //user not present in db so we will add it
            console.log("adding to database user");
            //1.hasing password
            const hashedPassword = await hashInput(password);
            console.log(hashedPassword);
            const newUser = await db.user.create({
                data: {
                 name:name,
                 email:email,
                 password:hashedPassword,
                 isverified:false
                },
              });
            //sending verification mail
            const res=await sendEmail(email);
            console.log(res);
            
            const jwttoken =  createJwtToken(email);
            const response= NextResponse.json({
                message:"login successful",
                success:true
            },{status:201});

            response.cookies.set("token",jwttoken,{httpOnly:true});


            return response;

             

            
        }

            
    } catch (error) {
        return NextResponse.json({error:"server error in signup"},{status:500})    
    }

}