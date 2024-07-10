"use client"

import * as React from "react"
// import { CaretSortIcon } from "@radix-ui/react-icons"

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import { Button } from "@/components/ui/button"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"


import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Rating from "@/components/_ui/product/Rating";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider"
import ProductCard from "@/components/_ui/product/ProductCard";
import Image from "next/image";





export function CategoryFilter({ filterData }: { filterData: any }) {
    const [isOpen, setIsOpen] = React.useState(true)
    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-[350px] space-y-2 transition-all duration-500 my-3 "
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


export function PriceFilter({ filterData }: { filterData: any }) {
    const [isOpen, setIsOpen] = React.useState(true)
    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-[350px] space-y-2 transition-all duration-500 my-3"
        >
            <div className="flex items-center justify-between space-x-4 px-4">
                <h4 className="text-sm font-semibold">
                    Price
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
                <Slider defaultValue={[33]} max={100} step={1} className=" bg-gray-gray6" />

            </CollapsibleContent>
        </Collapsible>
    )
}


export function RatingFilter({ filterData }: { filterData: any }) {
    const [isOpen, setIsOpen] = React.useState(true)
    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-[350px] space-y-2 transition-all duration-500 my-3"
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
                    <Checkbox id="terms1" />  <Rating totalStars={3} /> <span>3.0 & up</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox id="terms1" />  <Rating totalStars={2} /> <span>2.0 & up</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox id="terms1" />  <Rating totalStars={1} /> <span>1.0 & up</span>
                </div>
            </CollapsibleContent>
        </Collapsible>
    )
}


export function TagFilter({ filterData }: { filterData: any }) {
    const [isOpen, setIsOpen] = React.useState(true)
    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-[350px] space-y-2 transition-all duration-500 my-3"
        >
            <div className="flex items-center justify-between space-x-4 px-4">
                <h4 className="text-sm font-semibold">
                    Popular Tag
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
            <CollapsibleContent className="space-y-2 mx-3 flex items-center space-x-2 flex-wrap">
                {
                    filterData?.map((item: string, index: number) => {
                        return (
                            <span key={index} className="px-4 py-1 rounded-xl bg-gray-gray.5 text-sm hover:bg-primary-primary hover:text-white cursor-pointer">{item}</span>
                        )
                    })
                }

                <div>
                    <div
                        className="w-[312px] h-[295px] bg-cover"
                        style={{ background: 'url(/images/ads/ads3.png) no-repeat' }}
                    >
                        <div>
                            <span className="text-[14px] font-medium">
                                <span className="text-secondary-warning text-2xl">79%</span> Discount
                            </span>
                            <p className="text-xs">on your first order</p>
                            <Button className="text-primary-primary rounded-3xl my-3 hover:bg-gray-500">
                                Shop now <BsArrowRight size={15} className="text-primary-primary mx-1" />
                            </Button>
                        </div>
                    </div>
                </div>

            </CollapsibleContent>
        </Collapsible>
    )
}


export function ProductFilter({ filterData }: { filterData: any }) {
    const [isOpen, setIsOpen] = React.useState(true)
    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-[350px] space-y-2 transition-all duration-500 my-3"
        >
            <div className="flex items-center justify-between space-x-4 px-4">
                <h4 className="text-sm font-semibold">
                    Sale Products
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
            <CollapsibleContent className="space-y-2 mx-3 flex items-center space-x-2 flex-wrap">
                {
                    filterData?.map((product: any, index: any) => {
                        return (
                            <ProductCard
                                key={index}
                                productCardType={2}
                                product={product}
                            />
                        )
                    })

                }

            </CollapsibleContent>
        </Collapsible>
    )
}
