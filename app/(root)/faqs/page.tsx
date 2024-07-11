import Breadcumb from "@/components/_ui/breadcumb/Breadcumb"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"


function page() {
    return (
        <>
            <Breadcumb
                currentPage="Faqs"
            />
            <div className="mt-16">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1  lg:grid-cols-2 gap-6">
                        <div className="lg:mt-3 lg:px-10">
                            <h1 className="text-3xl  lg:text-5xl font-semibold">Welcome, Let’s Talk About Our Ecobazar</h1>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It adheres to the WAI-ARIA design pattern.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It comes with default styles that matches the other
                                        components&apos; aesthetic.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Is it animated?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It s animated by default, but you can disable it if you prefer.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger>Lorem ipsum it is,?                                    </AccordionTrigger>
                                    <AccordionContent>
                                    Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-5">
                                    <AccordionTrigger>tempor elementum.</AccordionTrigger>
                                    <AccordionContent>
                                    Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        <div>
                            <Image
                                src={"/images/common/faq.png"}
                                width={741}
                                height={808}
                                objectFit="cover"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page

