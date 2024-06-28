import { Button } from "@/components/ui/button"
import Image from "next/image"
import { BsArrowRight } from "react-icons/bs";

function index() {
    return (
        <section className="container my-6">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-3 text-white text-center">
                <div>
                    <div className="relative">
                        <Image
                            width={424}
                            height={536}
                            src={"/images/ads/ads1.png"}
                            alt="ads"
                            className="w-full"
                        />
                        <div className="absolute top-[20%] left-[10%]">
                            <span className="text-[14px] font-medium">Best Deals</span>
                            <p className="text-[28px] lg:text-[40px] font-semibold">Sale of the Month</p>
                            <div className="flex space-x-3  justify-center">
                                <span>
                                    <p className="text-[24px] font-normal">00</p>
                                    <span className="text-[12px] font-normal">Days</span>
                                </span>
                                <span className="mt-1">:</span>
                                <span>
                                <p className="text-[24px] font-normal">02</p>
                                <span className="text-[12px] font-normal">Hours</span>
                                </span>
                                <span className="mt-1">:</span>
                                <span>
                                <p className="text-[24px] font-normal">18</p>
                                <span className="text-[12px] font-normal">Min</span>
                                </span>
                                <span className="mt-1">:</span>
                                <span>
                                <p className="text-[24px] font-normal">46</p>
                                <span className="text-[12px] font-normal">Secs</span>
                                </span>
                            </div>

                            <Button className="bg-white text-primary-primary rounded-3xl my-6 hover:bg-gray-gray.5">Shop now <BsArrowRight size={20} className="text-primary-primary mx-1"/></Button>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="relative">
                        <Image
                            width={424}
                            height={536}
                            src={"/images/ads/ads2.png"}
                            alt="ads"
                             className="w-full"
                        />
                        <div className="absolute top-[20%] left-[10%]">
                            <span className="text-[14px] font-medium">Best Deals</span>
                            <p className="text-[28px] lg:text-[40px]  font-semibold">Sale of the Month</p>
                            <p className="space-x-2"><span className="text-[18px] font-normal">Started at</span><span className="text-[20px] font-semibold text-secondary-warning">$79.99</span></p>
                            <Button className="bg-white text-primary-primary rounded-3xl my-6 hover:bg-gray-gray.5">Shop now <BsArrowRight size={20} className="text-primary-primary mx-1"/></Button>
                        </div>
                       
                    </div>
                </div>


                <div>
                    <div className="relative">
                        <Image
                            width={424}
                            height={536}
                            src={"/images/ads/ads3.png"}
                            alt="ads"
                             className="w-full"
                        />
                        <div className="absolute top-[20%] left-[10%]">
                            <span className="text-[14px] font-medium">Best Deals</span>
                            <p className="text-[28px] lg:text-[40px] font-semibold">Sale of the Month</p>
                            <p className="space-x-2"><span className="text-[18px] font-normal">Up to</span>
                            <span className="text-[18px] font-semibold text-[#FCC900] bg-gray-gray9 px-[12px] py-[6px]">64% OFF</span>
                            </p>
                            <Button className="bg-white text-primary-primary rounded-3xl my-6 hover:bg-gray-gray.5">Shop now <BsArrowRight size={20} className="text-primary-primary mx-1"/></Button>

                        </div>
                    </div>
                </div>

                
            </div>
        </section>
    )
}

export default index