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
            <Card className="w-[424px]">
                <CardContent className="w-[424px] flex flex-col items-center pb-0 ">
                    <div className="relative">
                        <Image
                            src={image}
                            alt="blog1"
                            width={376}
                            height={276}

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
                </CardContent>
                <CardFooter className="pt-0">
                    <Link href={url || "#"} className="mx-1 text-primary-primary">Read More <BsArrowRight className="text-primary-primary font-semibold" /> </Link>
                </CardFooter>
            </Card>

        </div>
    )
}

export default BlogCard