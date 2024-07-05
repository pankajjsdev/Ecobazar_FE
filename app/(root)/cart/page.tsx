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


function page() {
    return (
        <div className="container py-6">
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
                                        <QuantityButton/>
                                    </TableCell>
                                    <TableCell className="text-right">$250.00</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>

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
                                <div>
                                    <Button className="bg-primary-primary text-white rounded-full w-full">
                                        Proceed to checkout</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    )
}

export default page