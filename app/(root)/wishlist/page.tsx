import QuantityButton from "@/components/_ui/cart/QuantityButton"
import { Button } from "@/components/ui/button"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { IoMdCloseCircleOutline } from "react-icons/io";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Image from "next/image"
import Breadcumb from "@/components/_ui/breadcumb/Breadcumb";


function page() {
    return (
        <>
         <Breadcumb
          currentPage="Wishlist"
        />
        <div className="container my-8">
            <h1 className="text-center font-semibold text-3xl py-6">My Wishlist</h1>
            <section className="">
                <div className="">
                    <div className="rounded-md border border-gray-gray1 shadow">
                        <Table>
                            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="">Product</TableHead>
                                    <TableHead>price</TableHead>
                                    <TableHead>Stock Status</TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {
                                    [1, 2, 3]?.map((item, index) => {
                                        return (
                                            <TableRow key={index}>
                                                <TableCell className="font-medium flex items-center">
                                                    <Image
                                                        src={"/images/products/product1.png"}
                                                        width={80}
                                                        height={80}
                                                        alt=""
                                                    />
                                                    <h1>    Green Capsicum</h1>
                                                </TableCell>
                                                <TableCell>$14.00</TableCell>

                                                <TableCell ><span className="px-2 py-1 bg-primary-soft text-primary-hard rounded text-[14px]"> In stack </span></TableCell>
                                                <TableCell>
                                                    <div className="flex items-center justify-around">
                                                        <Button className="bg-primary-primary text-white rounded-full  text-[16px] font-semibold">
                                                            Add to Cart</Button>
                                                        <IoMdCloseCircleOutline className="text-gray-gray5 hover:text-secondary-danger cursor-pointer" size={25} />

                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                        <div className="flex items-center justify-between border-t border-gray-gray1 py-3 px-3">
                            <div className="font-medium flex items-center">
                                <span className="mx-2">Share: </span>
                                <Button className="bg-gray-gray.5 rounded-full text-gray-gray7 text-[14px] font-semibold mx-2">F</Button>
                                <Button className="bg-gray-gray.5 rounded-full text-gray-gray7 text-[14px] font-semibold">I</Button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
        </>
    )
}

export default page