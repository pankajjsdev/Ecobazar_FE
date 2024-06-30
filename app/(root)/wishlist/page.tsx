import { Button } from "@/components/ui/button"
import { BsX } from "react-icons/bs";
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
        <div className="container my-3">
            <h1 className="text-[32px] text-center my-10">My Wishlist</h1>
            <Table className="border border-gray-gray1 my-10">
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader>
                    <TableRow className="border-gray-gray1">
                        <TableHead className="">Product</TableHead>
                        <TableHead>price</TableHead>
                        <TableHead>Stock Status</TableHead>
                        <TableHead className="text-right"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                   {
                    [1,2,3,4,5]?.map((item,index)=>{
                        return(
                            <TableRow key={index} className="border-gray-gray1">
                            <TableCell className="font-medium flex items-center justify-center">
                                <Image
                                    src={"/images/products/product1.png"}
                                    width={80}
                                    height={80}
                                    alt=""
                                />
                                <h1>    Green Capsicum</h1>
                            </TableCell>
                            <TableCell>$14.99</TableCell>
                            <TableCell><span className={`p-1 text-white ${true ? 'bg-primary-primary' : 'bg-secondary-danger'}`}>In Stock</span></TableCell>
                            <TableCell className="flex">
                                <Button>add to cart</Button>
                                <BsX size={30}/>
                            </TableCell>
                        </TableRow>
                        )
                    })
                   }
                </TableBody>
            </Table>
        </div>
    )
}

export default page