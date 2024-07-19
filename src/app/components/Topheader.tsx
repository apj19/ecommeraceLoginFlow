import Link from 'next/link';

export default function TopHeader(){

    return <nav >
        <div className="h-[100px]">
        <div className="flex text-[0.8rem]  flex-row-reverse gap-4 pt-2 mr-4">
        <p>Hi,John</p>
            
            <p>Orders & Returns</p>
            <p>Help</p>
            

        </div>
        <div className="flex justify-between items-center p-2 mr-2">
            <Link href={"/"}><span className="font-bold text-[1.5rem]">ECOMMERCE</span></Link>
           
            <ul className="flex gap-6 text-[0.9rem] font-semibold">
                <li>Categories</li>
                <li>Sale</li>
                <li>Clearance</li>
                <li>New Stock</li>
                <li>Treading</li>
            </ul>
            <div className="flex gap-8">
                <div><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                </div>
            </div>
        </div>

        </div>
        <div className="flex items-center justify-center gap-4 bg-[#F4F4F4] text-[0.8rem] py-2 h-[36px]  ">
            <span><svg xmlns="http://www.w3.org/2000/svg" className="w-2 h-2" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></span>
            <span className="font-semibold">
                get 10% off on business sign up
            </span>
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-2 h-2" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
            </span>
        </div>
    </nav>
}