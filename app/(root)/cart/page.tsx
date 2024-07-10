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
import Link from "next/link";


function page() {
    return (
        <>
         <Breadcumb
          currentPage="Shopping cart"
        />
        <div className="container py-6">
            <h1 className="text-center font-semibold text-3xl py-6">My Shopping Cart</h1>
            <section className="grid grid-cols-4 gap-3">
                <div className="col-span-3">
                    <div className="rounded-md border border-gray-gray1 shadow">
                        <Table>
                            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="">Product</TableHead>
                                    <TableHead>price</TableHead>
                                    <TableHead>Quantity</TableHead>
                                    <TableHead className="">Subtotal</TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
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
                                    <TableCell>
                                        <QuantityButton />
                                    </TableCell>
                                    <TableCell className="text-right">$250.00</TableCell>
                                    <TableCell><IoMdCloseCircleOutline className="text-gray-gray5 hover:text-secondary-danger cursor-pointer" size={25}/></TableCell>
                                </TableRow>

                                <TableRow>
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
                                    <TableCell>
                                        <QuantityButton />
                                    </TableCell>
                                    <TableCell className="text-right">$250.00</TableCell>
                                    <TableCell><IoMdCloseCircleOutline className="text-gray-gray5 hover:text-secondary-danger cursor-pointer" size={25}/></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        <div className="flex items-center justify-between border-t border-gray-gray1 py-3 px-3">
                            <div className="font-medium flex items-center">
                                <Button className="bg-gray-gray.5 rounded-full text-gray-gray7 text-[14px] font-semibold">Return to shop</Button>
                            </div>


                            <div className="text-right">
                                <Button className="bg-gray-gray.5 rounded-full text-gray-gray7 text-[14px] font-semibold">Update Cart</Button>
                            </div>
                        </div>


                    </div>
                    <div className="rounded-lg  border border-gray-gray1 my-6 py-6 px-3 flex items-center justify-around "> 
                      <p className="px-3 text-xl">Coupon Code</p>
                        <div className="flex items-center w-1/2 relative ">
                            <input className="w-full h-12 border border-r-0 px-2  border-gray-gray1 focus:border-gray-gray1 rounded-full rounded-r-none" />
                            <Button className="bg-gray-gray9 rounded-full text-white text-[14px] py-6 font-semibold px-6 absolute left-[80%]">Apply Coupon</Button>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Card>
                        <CardContent>
                            <div className="px-3">
                                <div className="text-xl font-medium my-3">Cart Total</div>
                                <div className="flex items-center justify-between border-b-2 border-b-[#E5E5E5] py-3">
                                    <h3 className="text-gray-gray7 text-sm">Subtotal:</h3>
                                    <h3>$84.00</h3>
                                </div>
                                <div className="flex items-center justify-between border-b-2 border-b-[#E5E5E5] py-3">
                                    <h3 className="text-gray-gray7 text-sm">Shipping:</h3>
                                    <h3>Free</h3>
                                </div>
                                <div className="flex items-center justify-between py-3">
                                    <h3 className="text-gray-gray7 text-sm">Total:</h3>
                                    <h3 className="text-lg font-semibold">$84.00</h3>
                                </div>
                                <Link href="/checkout">
                                    <Button className="bg-primary-primary text-white rounded-full w-full text-[16px] font-semibold">
                                        Proceed to checkout</Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
        </>
    )
}

export default page