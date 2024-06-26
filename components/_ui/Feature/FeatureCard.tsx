import React from 'react'
import { PiPackage, PiTruck } from "react-icons/pi";

function FeatureCard({ FeatureData }: any) {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 border-b-[1px] border-gray-gray2'>
            {
                FeatureData?.map((item: any, index: any) => {
                    return (
                        <div key={index} className='flex flex-col items-center hover:border-b-4  hover:border-primary-hard space-x-2 group '>
                            <PiTruck size={40} className='text-primary-primary group-hover:text-primary-hard' />
                            <h1 className='text-center text-[18px] text-gray-gray9 font-semibold'>{item.name}</h1>
                            <h6 className='text-center text-[14px] text-gray-gray4'>{item.subHeading}</h6>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FeatureCard