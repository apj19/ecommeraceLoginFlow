import nodemailer from "nodemailer";
import otpGenerator from 'otp-generator';
import hashInput from './hashinput';
import { db } from '~/server/db';


export const sendEmail= async (email:string)=>{


    try{

    const otp=otpGenerator.generate(8,{digits:true,lowerCaseAlphabets :false,upperCaseAlphabets :false,specialChars :false});
    //hasing otp to stroing in datbase
    const hashOtp=await hashInput(otp);
    //finding user from email
    const user= await db.user.findFirst({
        where:{
            email:email
        }
    });

    if(user){
        
        const updatedUser = await db.user.update({
            where: { email:email },
            data: { 
                verifyToken:hashOtp,
            },
          });
        
            
        const transport = nodemailer.createTransport({
            host:"smtp.gmail.com",
            secure:true,
            port:465,
            auth: {
                user: process.env.USER_Email!,
                pass: process.env.USER_Email_PASSWORD!,
              //TODO: add these credentials to .env file
            }
          });
          const mailOptions = {
            from: process.env.USER_Email!,
            to: email,
            subject: "ecommerace otp " ,
            html: `<p>your OTP is ${otp}<p/>`
        }
          await transport.sendMail(mailOptions)
        
        
          
    }  
        
    }

    catch (error){
        throw new Error("natable to send email");
    }

    // var transport = nodemailer.createTransport({
    //             host:"smtp.gmail.com",
    //             secure:true,
    //             port:465,
    //             auth: {
    //                 user: "apjcr223@gmail.com",
    //                 pass: "yxysqazjwbugfozs",
    //               //TODO: add these credentials to .env file
    //             }
    //           });
    //           const mailOptions = {
    //             from: 'apjcr223@gmail.com',
    //             to: email,
    //             subject: "VERIFY" ,
    //             html: "<p>Click<p/>"
    //         }
    // await transport.sendMail(mailOptions)




}