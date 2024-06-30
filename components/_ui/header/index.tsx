
import { Separator } from "@/components/ui/separator"

import { CiLocationOn, CiHeart, CiPhone } from "react-icons/ci";

import { Input } from "@/components/ui/input"

import { BsHandbag } from "react-icons/bs";
import { NavigationMenuDemo } from "./Desktop";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Mobile from "./Mobile";
import Link from "next/link";



function index() {
    return (
        <header className="">
            <div className="hidden xl:flex xl:flex-col">
                {/* header 1 */}
                <div className="bg-green-green.5 text-green-green7 py-[13px]">
                    <div className="container flex justify-between ">

                        <div className="flex items-center"><CiLocationOn size={20} /><span className="text-gray-gray6 text-xs">Store Location: Lincoln- 344, Illinois, Chicago, USA</span></div>


                        <div className="space-x-2 text-gray-gray6 text-xs flex items-center">
                            <span>Eng</span>
                            <span>USD</span>
                            {/* <Separator orientation="vertical" /> */}
                            <p> <span>Sign In</span>/
                                <span> Sign Up</span></p>
                        </div>
                    </div>
                </div>
                {/* header 2 */}
                <div className="py-[20px]">
                    <div className="container flex justify-between ">
                        <Image
                            src={"/images/logo/logo.svg"}
                            alt="logo"
                            width={200}
                            height={150}

                        />

                        <div className="flex w-full max-w-sm items-center">
                            <Input type="email" placeholder="Email" className="rounded-none focus:border-none" />
                            <Button className="bg-primary-primary rounded-none rounded-e text-white" type="submit">Search</Button>
                        </div>

                        <div className="flex">
                          <Link href="/wishlist" >  <CiHeart size={30} /></Link>

                            <div className="flex">
                                |    <BsHandbag size={25} />
                                <div className="flex flex-col items-center justify-center">
                                    <p className="text-[12px] text-gray-gray7">shoping cart</p>
                                    <span className="text-[14px]">$57.0</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* header 3 */}
                <div className="shadow py-[13px]">
                    <div className="container  flex justify-between items-center">
                        <NavigationMenuDemo />
                        <span className="flex items-center"><CiPhone size={25} className="mx-1"/> (219) 555-0114</span>
                    </div>
                </div>
            </div>

            <div className="xl:hidden">
                <div className="bg-green-green.5 text-green-green7 py-[12px]">
                    <div className="flex justify-between px-3">

                        <div className="flex items-center"><CiLocationOn size={20} /><span className="text-gray-gray6 text-xs">Store Location: Lincoln- 344, Illinois, Chicago, USA</span></div>
                    </div>
                </div>
                <div className="flex items-center justify-between pr-3 py-3 shadow">
                    <Mobile />
                    <div className="flex">
                        <BsHandbag size={25} />

                    </div>
                </div>
            </div>
        </header>
    )
}

export default index