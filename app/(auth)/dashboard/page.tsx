
import Image from "next/image";

import { usePathname } from "next/navigation"


import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
]


function page() {
    return (
        <>
            <div className="grid grid-cols-2 gap-6">
                <div className="border border-gray-gray1 rounded-lg p-20 flex items-center justify-center">
                    <div className="text-center flex flex-col items-center group ">
                        <Image
                            src="/images/user/user.png"
                            width={100}
                            height={100}
                            alt=""
                        />
                        <h1 className="text-xl font-medium group-hover:text-primary-hard">Dianne Russell</h1>
                        <h3 className="text-sm text-gray-gray4">Customer</h3>
                        <h6 className="text-primary-primary text-base font-medium my-3">Edit Profile</h6>
                    </div>

                </div>
                <div className="border border-gray-gray1 rounded-lg p-20">
                    {/* <div> */}
                    <h3 className="text-sm text-gray-gray4">BILLING ADDRESS</h3>
                    <h1 className="text-xl font-medium group-hover:text-primary-hard">Dianne Russell</h1>
                    <h3>4140 Parker Rd. Allentown, New Mexico 31134</h3>
                    <h3>dainne.ressell@gmail.com</h3>
                    <h3>(671) 555-0110</h3>
                    <h6 className="text-primary-primary text-base font-medium">Edit Address</h6>
                    {/* </div> */}
                </div>
            </div>
            <div className=" border border-gray-gray.5 rounded-lg my-6 p-6">
                <h1 className="my-3 text-lg">Recet Order History</h1>
                <Table>
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader>
                        <TableRow className="bg-gray-gray.5">
                            <TableHead className="w-[100px]">Invoice</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice) => (
                            <TableRow key={invoice.invoice}>
                                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                <TableCell>{invoice.paymentStatus}</TableCell>
                                <TableCell>{invoice.paymentMethod}</TableCell>
                                <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </div>
        </>
    )
}

export default page