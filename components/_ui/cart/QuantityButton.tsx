'use client'

import { Button } from "@/components/ui/button";
import { useState } from "react";

import { IoMdAdd, IoIosRemove } from "react-icons/io";
export default function QuantityButton() {
    const [quantity, setQuantity] = useState<number>(0)

    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }

    const decreaseQuantity = () => {
        if (quantity > 0)
            setQuantity(quantity - 1)
    }
    return (
        <div className="flex items-center justify-center  space-x-3 rounded-full p-[8px] border border-gray-gray.5 w-1/2">
            <Button className="bg-gray-gray.5 rounded-full p-3 " onClick={decreaseQuantity}><IoIosRemove size={20}/></Button>
            <span className="text-base w-4">{quantity}</span>
            <Button className="bg-gray-gray.5 rounded-full p-3" onClick={increaseQuantity}><IoMdAdd size={20}/></Button>
        </div>
    )
}
