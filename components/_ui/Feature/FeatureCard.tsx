import React from 'react'
import { PiPackage, PiTruck, PiBag, PiHeadphones } from "react-icons/pi";

function FeatureCard({ FeatureData }: any) {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 border-b-[1px] border-gray-gray2 py-3'>
            <div className='flex flex-col items-center border-b-4 border-white  hover:border-primary-hard space-x-2 group py-3 '>
                <PiTruck size={40} className='text-primary-primary group-hover:text-primary-hard' />
                <h1 className='text-center text-[18px] text-gray-gray9 font-semibold'>Free Shipping                            </h1>
                <h6 className='text-center text-[14px] text-gray-gray4'>Free shipping with discount</h6>
            </div>

            <div className='flex flex-col items-center border-b-4 border-white  hover:border-primary-hard space-x-2 group py-3'>
                <PiHeadphones size={40} className='text-primary-primary group-hover:text-primary-hard' />
                <h1 className='text-center text-[18px] text-gray-gray9 font-semibold'>Great Support 24/7                           </h1>
                <h6 className='text-center text-[14px] text-gray-gray4'>Instant access to Contact</h6>
            </div>

            <div className='flex flex-col items-center border-b-4 border-white  hover:border-primary-hard space-x-2 group py-3'>
                <PiBag size={40} className='text-primary-primary group-hover:text-primary-hard' />
                <h1 className='text-center text-[18px] text-gray-gray9 font-semibold'>100% Sucure Payment                           </h1>
                <h6 className='text-center text-[14px] text-gray-gray4'>We ensure your money is save</h6>
            </div>

            <div className='flex flex-col items-center border-b-4 border-white  hover:border-primary-hard space-x-2 group py-3'>
                <PiPackage size={40} className='text-primary-primary group-hover:text-primary-hard' />
                <h1 className='text-center text-[18px] text-gray-gray9 font-semibold'>Money-Back Guarantee                           </h1>
                <h6 className='text-center text-[14px] text-gray-gray4'>
                    30 days money-backt</h6>
            </div>



        </div>
    )
}

export default FeatureCard