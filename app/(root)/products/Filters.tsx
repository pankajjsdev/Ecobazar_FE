"use client"

import * as React from "react"
// import { CaretSortIcon } from "@radix-ui/react-icons"

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { Button } from "@/components/ui/button"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"


import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Rating from "@/components/_ui/product/Rating";
import { Checkbox } from "@/components/ui/checkbox";


export function CategoryFilter({ filterData }: { filterData: any }) {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-[350px] space-y-2 transition-all duration-500"
        >
            <div className="flex items-center justify-between space-x-4 px-4">
                <h4 className="text-sm font-semibold">
                    All Categories
                </h4>
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                        {
                            isOpen ? <IoIosArrowUp className="h-4 w-4" /> : <IoIosArrowDown className="h-4 w-4" />
                        }

                        <span className="sr-only">Toggle</span>
                    </Button>
                </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-2 mx-3">
                {
                    filterData?.map((item: string, index: number) => {
                        return (
                            <RadioGroup key={index}>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value={item} id={`${item}${index}`} className="text-sm font-normal" />
                                    <p>{item}</p>
                                </div>
                            </RadioGroup>
                        )
                    })
                }

            </CollapsibleContent>
        </Collapsible>
    )
}


export function RatingFilter({ filterData }: { filterData: any }) {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-[350px] space-y-2 transition-all duration-500"
        >
            <div className="flex items-center justify-between space-x-4 px-4">
                <h4 className="text-sm font-semibold">
                    Rating
                </h4>
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                        {
                            isOpen ? <IoIosArrowUp className="h-4 w-4" /> : <IoIosArrowDown className="h-4 w-4" />
                        }

                        <span className="sr-only">Toggle</span>
                    </Button>
                </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-2 mx-3">
                <div className="flex items-center space-x-2">
                    <Checkbox id="terms1" />  <Rating totalStars={5} /> <span>5.0</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox id="terms1" />  <Rating totalStars={4} /> <span>4.0 & up</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox id="terms1" />  <Rating totalStars={3}  /> <span>3.0 & up</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox id="terms1" />  <Rating totalStars={2}  /> <span>2.0 & up</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox id="terms1" />  <Rating totalStars={1}  /> <span>1.0 & up</span>
                </div>
            </CollapsibleContent>
        </Collapsible>
    )
}
