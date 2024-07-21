"use client"
import Link from 'next/link';
import {useForm, SubmitHandler} from "react-hook-form"
import {z} from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import BtnLoder from '../components/BtnLoder';
import { signUpFormSchema } from '../helper/zodschems';
import {useRouter} from "next/navigation";
import axios from 'axios';

type FormField=z.infer<typeof signUpFormSchema>;

export default function Signup(){
  const router = useRouter();

 const {register,handleSubmit,setError,formState:{errors,isSubmitting}} = useForm<FormField>({
  resolver:zodResolver(signUpFormSchema)
 });

 const signUpFormSubmit:SubmitHandler<FormField>= async (data)=>{

      try {

        const response= await axios.post("/api/user/signup",data);
        router.push("/verify");
        // console.log("after push",response);
        
      } catch (error) {
        console.log(error);
        
      }


    

 }


    return (
        <main className=" flex justify-center ">
      <div className="w-[576px] flex flex-col items-center border rounded-[20px] mt-[40px]">
        <h1 className="mt-[40px] font-[600] text-[2rem]">Create your account</h1>
      
        

        <form className="w-[456px] mt-8" onSubmit={handleSubmit(signUpFormSubmit)}>
              <label  className="text-base font-medium text-gray-900">
                {" "}
                Name {" "}
              </label>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Enter"
                  {...register("name")}
                />
                {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
              </div>
        
        
        
        
        
        <div className=" mt-8">
              <label  className="text-base font-medium text-gray-900">
                {" "}
                Email {" "}
              </label>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Enter"
                  {...register("email")}
                />
                {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
              </div>
        </div>


        <div className=" mt-8">
              <label  className="text-base font-medium text-gray-900">
                {" "}
                Password {" "}
              </label>
              <div className="mt-2 e">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="password"
                  placeholder="Enter"
                  {...register("password")}
                />
                {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
               
                
              </div>
        </div>
        <button
                type="submit"
                className="inline-flex w-[456px] mt-8 items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-light leading-7 text-white hover:bg-black/80"
                disabled={isSubmitting}
              >
                {isSubmitting? <BtnLoder/> : "CREATE ACCOUNT"}
                
                
                
        </button>
        {errors.root && <p className='text-red-600'>{errors.root.message}</p>}
        </form>

        <div className="border-t mt-8 w-[456px] "></div>

        <div className="my-8   text-gray-600">
          Have an Account?{" "}
          
          <Link
          href="/"
    
            className="font-[500] text-black "
          >
            LOGIN
          </Link>
        </div>


        


      
  </div>
        
        


      
  
        </main>
    )
}