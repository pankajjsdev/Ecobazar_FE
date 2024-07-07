import AddressForm from "@/components/_ui/cart/AddressForm"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

function page() {
  return (
    <div className="container">
        <div className="grid grid-cols-1  lg:grid-cols-12 gap-3">
            <div className="col-span-8 my-8">
                <AddressForm/>
            </div>
            <div className="col-span-4">
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
                                    <Button className="bg-primary-primary text-white rounded-full w-full text-[16px] font-semibold">
                                        Proceed to checkout</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

        </div>
    </div>
  )
}

export default page