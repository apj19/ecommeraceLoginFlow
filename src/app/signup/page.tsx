import Link from 'next/link';



export default function Signup(){

    return (
        <main className=" flex justify-center ">
      <div className="w-[576px] flex flex-col items-center border rounded-[20px] mt-[40px]">
        <h1 className="mt-[40px] font-[600] text-[2rem]">Create your account</h1>
      
        

        <div className="w-[456px] mt-8">
              <label  className="text-base font-medium text-gray-900">
                {" "}
                Name {" "}
              </label>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Enter"
                />
              </div>
        </div>
        
        
        
        
        <div className="w-[456px] mt-8">
              <label  className="text-base font-medium text-gray-900">
                {" "}
                Email {" "}
              </label>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Enter"
                />
              </div>
        </div>


        <div className="w-[456px] mt-8">
              <label  className="text-base font-medium text-gray-900">
                {" "}
                Password {" "}
              </label>
              <div className="mt-2 e">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="password"
                  placeholder="Enter"
                />
                
              </div>
        </div>
        <button
                type="button"
                className="inline-flex w-[456px] mt-8 items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-light leading-7 text-white hover:bg-black/80"
              >
                CREATE ACCOUNT
                
        </button>

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