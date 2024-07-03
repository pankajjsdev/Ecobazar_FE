import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

type Props = {
    title: string,
    subHeading: string,
    image: string,
    url?: string,
    date: string
}
function BlogCard({ title, subHeading, image, date, url }: Props) {
    return (
        <div>
            {/* <div className="w-[424px] bg-white shadow-lg p-3 border-2 border-white flex flex-col items-center rounded-lg ">
                <div className="w-[424px] flex flex-col items-center pb-0 ">
                    <div className="relative overflow-hidden">
                        <Image
                            src={image}
                            alt="blog1"
                            width={376}
                            height={276}
                            // className="w-full"
                            className="transform scale-100 hover:scale-110 transition-all duration-500 cursor-pointer"   

                        />
                        <div className="absolute bg-white bottom-8 left-4 px-3 py-1 rounded opacity-80 text-center">
                            <p className="text-[16px]">{date?.split(' ')[0]}</p>
                            <p className="text-[12px] text-gray-gray5">{date?.split(' ')[1]}</p>
                        </div>
                    </div>
                    <div className="p-2">
                        <p className="text-[18px]">{title}</p>
                        <p className="text-green-green5 text-[12px]">{subHeading}</p>
                    </div>
                </div>
                <div className="pt-0">
                    <Link href={url || "#"} className="mx-1 text-primary-primary flex items-center justify-start">Read More <BsArrowRight className="text-primary-primary font-semibold mx-2" /> </Link>
                </div>
            </div> */}

        </div>
    )
}

export default BlogCard