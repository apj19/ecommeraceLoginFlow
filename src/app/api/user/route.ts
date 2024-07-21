import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

interface MyTokenPayload {
    email: string;
}
export async function GET(request:NextRequest){

    const token = request.cookies.get('token')?.value ?? '';

    if(token){

        try {
            const decoded = jwt.verify(token, process.env.TOKEN_SECRET!) as MyTokenPayload;
            const data={
                        email:decoded.email
                    }
                    const response= NextResponse.json(data,{status:200});
                    return response;
            
        } catch (error) {
            // console.log(error);
            const response= NextResponse.json({
                message:"token expired",
            },{status:401});

            response.cookies.set("token","",{httpOnly:true});
            return response;

        }
        
    }
    

    return NextResponse.json({message:"server error"},{status:500}) 
}