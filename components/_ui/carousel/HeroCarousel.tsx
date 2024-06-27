"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
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
    console.log("data", imagesData);
    const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

    return (
        <div className="container my-3">
            <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3">
                <div className="md:col-span-2 relative">
                    <Image
                        src={"/images/carousel/bg5.png"}
                        width={300}
                        height={200}
                        alt=""
                        className="w-full h-full"
                    />
                    {/* <div className="absolute top-[40%]">
                        <h1 className="text-[48px] text-white">Fresh & Healthy
                        Organic Food</h1>
                        <p>Sale up to
                        30% OFF</p>
                        <p>Free shipping on all your order.</p>
                        <Button>Shop now</Button>
                    </div> */}
                   
                </div>
                <div className="space-y-2">
                    <Image
                        src={"/images/carousel/bg6.png"}
                        width={300}
                        height={200}
                        alt=""
                        className="w-full"
                    />
                     <Image
                        src={"/images/carousel/bg7.png"}
                        width={300}
                        height={200}
                        alt=""
                        className="w-full"
                    />
                </div>

            </div>
        </div>
        // <Carousel
        //     plugins={[plugin.current]}
        //     onMouseEnter={() => plugin.current.stop()}
        //     onMouseLeave={() => plugin.current.reset()}
        // >
        //     <CarouselContent className="w-full h-[700px]">
        //         {imagesData?.map((payload: any, index: React.Key | null | undefined) => (
        //             <CarouselItem key={index} className="w-full">
        //                  <div 
        //         className="w-full h-[700px] bg-cover bg-center" 
        //         style={{ backgroundImage: `url(${payload.image})` }}
        //     >
        //                     <div className="">
        //                         <h1 >{payload?.heading1}</h1>
        //                     </div>
        //                 </div>
        //             </CarouselItem>
        //         ))}
        //     </CarouselContent>
        //     {/* <CarouselPrevious />
        //     <CarouselNext /> */}
        // </Carousel>
    );
}
