import Link from 'next/link';


export default function HomePage() {
  return (
    
    <main className=" flex justify-center ">
      <div className="w-[576px] flex flex-col items-center border rounded-[20px] mt-[40px]">
        <h1 className="mt-[40px] font-[600] text-[2rem]">Login</h1>
        <h2 className="mt-[43px] font-[500] text-[24px]">Welcome back to ECOMMERCE</h2>
        <p className="mt-[18px] font-normal">The next gen business marketplace</p>
        

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
              <div className="mt-2 relative">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="password"
                  placeholder="Enter"
                />
                <button className="absolute font-medium underline underline-offset-1 inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"> Show</button>
              </div>
        </div>
        <button
                type="button"
                className="inline-flex w-[456px] mt-8 items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
              >
                LOGIN
                
        </button>

        <div className="border-t mt-8 w-[456px] "></div>

        <div className="my-8   text-gray-600">
          Don&#x27;t have an Account?{" "}
          <Link
          href={"/signup"}
    
            className="font-[500] text-black "
          >
            SIGN UP
          </Link>
        </div>


        


      
  </div>
        
        


      
  
    </main>

    
  );
}
