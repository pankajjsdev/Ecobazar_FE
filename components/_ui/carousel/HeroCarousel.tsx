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

type Props = {
    imagesData: any;
};

export function HeroCarousel({ imagesData }: Props) {
    console.log("data", imagesData);
    const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

    return (
        <Carousel
            plugins={[plugin.current]}
            onMouseEnter={() => plugin.current.stop()}
            onMouseLeave={() => plugin.current.reset()}
        >
            <CarouselContent className="w-full h-[300px]">
                {imagesData?.map((payload: any, index: React.Key | null | undefined) => (
                    <CarouselItem key={index} className="w-full">
                        <div className="w-full h-[300px]" style={{
                            background: `url(${payload.image})`
                        }}>
                            <div className="">
                                <h1 >{payload?.heading1}</h1>
                            </div>
                        </div>
                        {/* <Image
                            className="w-full h-[60%] md:h-full lg:h-full xl:full"
                                src={payload.image}
                                alt="img"
                                width={700}
                                height={400}
                                objectFit="contain"
                            /> */}

                    </CarouselItem>
                ))}
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
        </Carousel>
    );
}
