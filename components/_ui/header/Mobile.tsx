import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter
} from "@/components/ui/sheet"
import Link from "next/link";

import { CiMenuFries } from "react-icons/ci"

import { Separator } from "@/components/ui/separator"


import { CiMenuBurger } from "react-icons/ci";
import Image from "next/image";

const links = [
    {
        title: 'Home',
        path: ''
    },
    {
        title: 'Shope',
        path: ''
    },
    {
        title: 'Page',
        path: ''
    },
    {
        title: 'About',
        path: ''
    },
    {
        title: 'Contact',
        path: ''
    }
]

function Mobile() {
    return (
        <Sheet>
            <SheetTrigger className="flex items-center space-x-6 px-3">
                <CiMenuFries size={30} />
                <Image
                    src={"/images/logo/logo.svg"}
                    alt="logo"
                    width={150}
                    height={150}

                />

            </SheetTrigger>
            <SheetContent side={"left"} >
                <SheetHeader>
                    <Image
                        src={"/images/logo/logo.svg"}
                        alt="logo"
                        width={200}
                        height={150}

                    />
                    <nav className="my-4">
                        <ul className="flex flex-col">
                            {
                                links?.map((item, index) => {
                                    return (
                                        <>
                                            <Link key={index} href={item.path} className="p-3 border">{item.title}</Link>
                                            <Separator />

                                        </>
                                    )
                                })
                            }

                        </ul>
                    </nav>
                </SheetHeader>
                {/* <SheetFooter>
        <p>Hello</p>
    </SheetFooter> */}
            </SheetContent>
        </Sheet>

    )
}

export default Mobile