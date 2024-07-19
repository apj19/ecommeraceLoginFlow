export default function Verify(){

    return (
        <main className=" flex justify-center ">
      <div className="w-[576px] flex flex-col items-center border rounded-[20px] mt-[40px]">
        <h1 className="mt-[40px] font-[600] text-[2rem]">Verify your email</h1>
      
        <p>Enter the 8 digit code you have received on 
        </p>
        <p>swa***@gmail.com</p>
  


        <div className="w-[456px] mt-8">
              <label  className="text-base font-medium text-gray-900">
                Code{" "}
              </label>
              <div className="mt-2 flex space-x-3 ">
              <input type="text" className="block w-[46px] h-[48px] rounded-sm text-center border border-gray-400  text-sm  " />
              <input type="text" className="block w-[46px] h-[48px] rounded-sm text-center border border-gray-400  text-sm  " />
              <input type="text" className="block w-[46px] h-[48px] rounded-sm text-center border border-gray-400  text-sm  " />
              <input type="text" className="block w-[46px] h-[48px] rounded-sm text-center border border-gray-400  text-sm  " />
              <input type="text" className="block w-[46px] h-[48px] rounded-sm text-center border border-gray-400  text-sm  " />
              <input type="text" className="block w-[46px] h-[48px] rounded-sm text-center border border-gray-400  text-sm  " />
              <input type="text" className="block w-[46px] h-[48px] rounded-sm text-center border border-gray-400  text-sm  " />
              <input type="text" className="block w-[46px] h-[48px] rounded-sm text-center border border-gray-400  text-sm  " />

              
                
              </div>
        </div>
        <button
                type="button"
                className="inline-flex w-[456px] my-10 items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-light leading-7 text-white hover:bg-black/80"
              >
                VERIFY
                
        </button>

       

       
        </div>
        
        
    </main>
    )
}