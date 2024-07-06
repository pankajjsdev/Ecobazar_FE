import Link from "next/link";
import { GoHome, GoArrowRight, GoChevronRight } from "react-icons/go";

type links = 
 {
        title: string,
        path: string
    
}

type Props = {
    linksData?: links[],
    currentPage: string
}
function Breadcumb({ linksData, currentPage }: Props) {
    return (
        <div>
            <div style={{ background: `url(/images/common/breadcumb.jpg) no-repeat` }} className="w-full h-[120px] bg-breadcrumb-gradient bg-cover flex items-center justify-center">
                <div className="container">

                    <div className="flex items-center space-x-2">
                        <Link href="/"><GoHome size={28} className="text-gray-gray5" /></Link>
                        <span><GoChevronRight size={20} className="text-gray-gray5 font-semibold" /></span>
                        {
                            linksData?.map((links, insex) => {
                                return (
                                    <>
                                        <Link href={links.path} className="text-base text-primary-primary">{links.title}</Link>
                                        <span><GoChevronRight size={20} className="text-gray-gray5 font-semibold" /></span>
                                    </>
                                )
                            })
                        }
                        <span className="text-base text-primary-primary">{currentPage}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Breadcumb;
