
"use server"
import { NextRequest, NextResponse } from "next/server"
import { db } from "~/server/db";
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';
interface MyTokenPayload {
  email: string;
}
type RequestData = {
  otp:string;

};
export async function POST(request:NextRequest){

  const token = request.cookies.get('token')?.value ?? '';
  const requestData:RequestData= await request.json() as RequestData;

  if(token){

    try {
      const decoded = jwt.verify(token, process.env.TOKEN_SECRET!) as MyTokenPayload;
      const tokendata={
        email:decoded.email
      }
      //finding user from email
       const user= await db.user.findFirst({
        where:{
           email:tokendata.email
        }
      });

      if(user){
        const validToken = await bcrypt.compare(requestData.otp, user.verifyToken!);
        if(!validToken){
          return NextResponse.json({error: "Invalid password"}, {status: 400})
        }
        //token matched 
        //updating verify flag to true
        const updatedUser = await db.user.update({
          where: { email:tokendata.email },
          data: { 
            isverified:true,
          },
        });
        
        return NextResponse.json( {status: 200})
      }
      
    } catch (error) {
      
    }   

  }

  return NextResponse.json({message:"server error from verify"},{status:500}) 

}