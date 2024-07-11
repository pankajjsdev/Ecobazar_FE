'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdDashboard, MdHistory, MdShoppingCart, MdList , MdSettings, MdLogout } from "react-icons/md";
import Breadcumb from "@/components/_ui/breadcumb/Breadcumb"

const menu = [
    {
        title: 'dashboard',
        path: '/dashboard',
        icon: MdDashboard
    },
    {
        title: 'Order History',
        path: '/my-orders',
        icon: MdHistory
        
    },
    {
        title: 'Wishlist',
        path: '/wishlist',
        icon: MdList
    },
    {
        title: 'Shopping Cart',
        path: '/cart',
        icon: MdShoppingCart
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: MdSettings
    },
    {
        title: 'Log-out',
        path: 'wishlist',
        icon: MdLogout
    }
]


const linksData =
    [
        {
            title: 'Account',
            path: '/account'
        }
    ]


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const pathname =  usePathname()

    return (
        <>
         <Breadcumb
                currentPage="Dashboard"
                linksData={linksData}
            />
         <div className="container my-6">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-3">
                        <div className="border border-gray-gray1 rounded-lg">
                            <div className="">
                                <h1 className="mx-4 mt-6 text-xl font-medium">Navigation</h1>
                                <ul className="">
                                    {
                                        menu?.map((item, index) => {
                                            return (
                                                <li key={index} className={`py-3   text-gray-gray6 my-3 border-l-2 hover:border-l-primary-primary cursor-pointer hover:bg-gray-gray.5 ${pathname == item.path ? 'border-l-primary-primary bg-gray-gray.5 text-gray-gray9' : ''}`}>
                                                    <div className="flex items-center mx-3 ">
                                                        <item.icon size={30}  className={pathname == item.path ?  'text-gray-gray9' : 'text-gray-gray2'} />
                                                        <Link href={item.path} className={`mx-2 ${pathname == item.path ?  'text-gray-gray9' : 'text-gray-gray2'}`} > {item.title}</Link>
                                                    </div>

                                                </li>
                                            )
                                        })
                                    }
                                </ul>

                            </div>

                        </div>
                    </div>
                    <div className="col-span-9">
                    {children}
                    </div>
                </div>
            </div>
        </>
    );
}
