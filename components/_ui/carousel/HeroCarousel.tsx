"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { BsArrowRight } from "react-icons/bs";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Props = {
    imagesData: any;
};

export function HeroCarousel({ imagesData }: Props) {
    const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

    return (
        <Carousel
            plugins={[plugin.current]}
            onMouseEnter={() => plugin.current.stop()}
            onMouseLeave={() => plugin.current.reset()}
        >
            <CarouselContent>
                {imagesData?.map((payload: any, index: React.Key) => (
                    <CarouselItem key={index}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center gap-3 px-6">
                            <div className="order-2 lg:order-none flex flex-col items-center lg:items-start">
                                <span className="text-primary-primary text-[14px]">Welcome to shopery</span>
                                <p className="text-gray-gray9 text-4xl lg:text-7xl w-[396px] lg:w-[596px] font-semibold py-2 lg:py-3 text-center lg:text-left">
                                    Fresh & Healthy Organic Food
                                </p>
                                <p className="space-x-2 text-[28px]">
                                    <span>Sale up to </span>
                                    <span className="font-semibold text-[#FCC900] py-[6px]">30% OFF</span>
                                </p>
                                <p className="text-sm text-gray-gray5 py-2 lg:py-3">
                                    Free shipping on all your order. we deliver, you enjoy
                                </p>
                                <Button className="text-white bg-primary-primary rounded-3xl my-6 hover:bg-primary-hard">
                                    Shop now <BsArrowRight size={20} className="text-white mx-1" />
                                </Button>
                            </div>
                            <div>
                                <Image
                                    src={payload.image}
                                    width={500}
                                    height={500}
                                    alt={payload.alt || "Carousel Image"}
                                    className="w-full h-full"
                                />
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}
