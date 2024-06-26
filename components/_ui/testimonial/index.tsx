import Image from "next/image";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const feedbacks = [
    {
        comment: "This product has significantly improved our team's productivity and collaboration.",
        name: "Jane Smith",
        image: "/images/testimonial/client1.png",
        designation: "Project Manager",
        company: "Tech Solutions Inc.",
    },
    {
        comment: "Excellent customer service and a user-friendly platform. Highly recommended!",
        name: "John Doe",
        image: "/images/testimonial/client1.png",
        designation: "CEO",
        company: "Innovatech Ltd.",
    },
    {
        comment: "The features are intuitive and the support team is always responsive.",
        name: "Emily Johnson",
        image: "/images/testimonial/client1.png",
        designation: "Marketing Director",
        company: "Creative Works",
    },
    {
        comment: "A game-changer for our business. The integration process was seamless.",
        name: "Michael Brown",
        image: "/images/testimonial/client1.png",
        designation: "IT Manager",
        company: "Global Enterprises",
    },
    {
        comment: "Reliable and efficient. Our team loves using this tool daily.",
        name: "Sarah Davis",
        image: "/images/testimonial/client1.png",
        designation: "Operations Head",
        company: "NextGen Solutions",
    },
];

function Testimonial() {
    return (
        <section >
            <Carousel className="w-full">
                <CarouselContent className="-ml-1">
                    {feedbacks.map((feedback, index) => (
                        <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 h-[450px] ">
                            <div className="p-1 w-[400px">
                                <div className="flex flex-col items-center justify-center">
                                    <div className="bg-white group p-4 rounded-md overflow-hidden transition-all duration-1000 ease-in-out">
                                        <p className="line-clamp-4 group-hover:line-clamp-none max-h-[4.5rem] group-hover:max-h-[20rem] text-[16px] transition-all duration-1000 ease-in-out text-green-green6 ">
                                            {/* {feedback.comment} */}
                                            “Aenean et nisl eget eros consectetur vestibulum vel id erat. Aliquam feugiat massa dui. Sed sagittis diam sit amet ante sodales semper. Aliquam commodo lorem laoreet ultricies ele.”
                                        </p>
                                       
                                    </div>
                                    <div className="mt-5 flex flex-col items-center relative">
                                    <div className="triangle absolute -top-6"></div>
                                        <Image
                                            src={feedback.image}
                                            alt=""
                                            width={80}
                                            height={80}
                                            className="rounded-full"
                                        />
                                        <h1 className="text-[24px] font-semibold mt-2">{feedback.name}</h1>
                                        <p className="text-sm text-center">
                                            {feedback.designation}, {feedback.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="top-10 hidden md:block lg:block" />
                <CarouselNext className="top-10 hidden md:block lg:block"  />
            </Carousel>
        </section>
    );
}

export default Testimonial;