import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

function NotFound() {
    return (
        <div className="container">
            <div className="flex items-center justify-center">
            <div className="text-center w-[600px] h-[571px] mt-9 py-3">
                <Image
                    src="/images/common/not-found.svg"
                    width={582}
                    height={354}
                    alt=""
                />

                <h1 className="text-[32px] font-semibold">Oops! page not found</h1>
                <p className="my-3 mb-6 text-base text-gray-gray5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, enim optio earum reiciendis excepturi quidem blanditiis.</p>
                <Link href={"/"} className="bg-primary-primary text-white rounded-full  text-[16px] px-6 py-4 font-semibold">
               Back to home</Link>
            </div>
            </div>
        </div>
    )
}

export default NotFound