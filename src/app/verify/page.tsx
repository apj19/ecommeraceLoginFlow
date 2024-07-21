"use client"
import {z} from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import {useForm, SubmitHandler} from "react-hook-form"
import BtnLoder from "~/app/components/BtnLoder";
import { useEffect, useState } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
interface UserResponse {
  email: string;
  // Add other fields as needed
}

const verifiyOtp=z.object({
  digit1: z.coerce.number({message:"Expeted number"}).int().gte(0).lte(9),
  digit2: z.coerce.number({message:"Expeted number"}).int().gte(0).lte(9),
  digit3: z.coerce.number({message:"Expeted number"}).int().gte(0).lte(9),
  digit4: z.coerce.number({message:"Expeted number"}).int().gte(0).lte(9),
  digit5: z.coerce.number({message:"Expeted number"}).int().gte(0).lte(9),
  digit6: z.coerce.number({message:"Expeted number"}).int().gte(0).lte(9),
  digit7: z.coerce.number({message:"Expeted number"}).int().gte(0).lte(9),
  digit8: z.coerce.number({message:"Expeted number"}).int().gte(0).lte(9)
});

type VerifyOtp=z.infer<typeof verifiyOtp>;

export default function Verify(){

  const [userEmail,setUserEmail]= useState('default');
  const router = useRouter();

  const {register,handleSubmit,setError,formState:{errors,isSubmitting}} = useForm<VerifyOtp>({
    resolver:zodResolver(verifiyOtp)
  });


  const otpVerification:SubmitHandler<VerifyOtp>= async (data)=>{

      try {
        // console.log(data)
        const propertyValues = Object.values(data);
        console.log(propertyValues.join('')); 
         const response= axios.post("api/user/verify",{
          otp:propertyValues.join('')
         });
         router.push("/home");
        
      } catch (error) {
        setError("root",{
          message:"Invalid OTP try again"
        })
        
      
        }
  }

  async function fetchUserDetails(){
    try {
        const response = await axios.get<UserResponse>('/api/user');
        // console.log(response);
        // console.log(response.data.email as String);
        const email:string=response.data.email 
        setUserEmail(email)
     } catch (error) {
      router.push("/");
     }
     
  }


    useEffect(() => {
      void fetchUserDetails();
      

      
    }, [])


    return (
        <main className=" flex justify-center ">
      <div className="w-[576px] flex flex-col items-center border rounded-[20px] mt-[40px]">
        <h1 className="mt-[40px] font-[600] text-[2rem]">Verify your email</h1>
      
        <p>Enter the 8 digit code you have received on 
        </p>
        <p>{userEmail}</p>
  


        <form className="w-[456px] mt-8 " onSubmit={handleSubmit(otpVerification)}>
              <label  className="text-base font-medium text-gray-900">
                Code{" "}
              </label>
              <div className="mt-2 flex space-x-3 ">
              <input type="text" maxLength={1} {...register("digit1")}     
              className="*:block w-[46px] h-[48px] rounded-sm text-center border border-gray-400  text-sm  " />
              
              <input type="text" maxLength={1} {...register("digit2")}  className="block w-[46px] h-[48px] rounded-sm text-center border border-gray-400  text-sm  " />
              <input type="text" maxLength={1} {...register("digit3")}  className="block w-[46px] h-[48px] rounded-sm text-center border border-gray-400  text-sm  " />
              <input type="text" maxLength={1} {...register("digit4")}  className="block w-[46px] h-[48px] rounded-sm text-center border border-gray-400  text-sm  " />
              <input type="text" maxLength={1} {...register("digit5")}  className="block w-[46px] h-[48px] rounded-sm text-center border border-gray-400  text-sm  " />
              <input type="text" maxLength={1} {...register("digit6")}  className="block w-[46px] h-[48px] rounded-sm text-center border border-gray-400  text-sm  " />
              <input type="text" maxLength={1} {...register("digit7")}  className="block w-[46px] h-[48px] rounded-sm text-center border border-gray-400  text-sm  " />
              <input type="text" maxLength={1} {...register("digit8")}  className="block w-[46px] h-[48px] rounded-sm text-center border border-gray-400  text-sm  " />   
              </div>
              {/* {errors.digit1 && <p className='text-red-600'>{
              errors.digit1.message}</p>} */}
              {errors.root && <p className='text-red-600'>{
              errors.root.message}</p>}
          
          <button
                  type="submit"
                  className="inline-flex w-[456px] my-10 items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-light leading-7 text-white hover:bg-black/80"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <BtnLoder/>: "VERIFY"}
                  
          </button>
          </form>
      
        </div>
        
        
    </main>
    )
}