
import { Badge } from "@/components/ui/badge"
import ProductList from "@/components/_ui/product/index";
import { HeroCarousel, } from "@/components/_ui/carousel/HeroCarousel";
import FeatureCard from "@/components/_ui/Feature/FeatureCard";
import Testimonial from "@/components/_ui/testimonial";


import Ads from "@/components/_ui/ads/index";
import BlogSection from "@/components/_ui/blog/index";


const imagesData = [
    {
        "image": "/images/carousel/bg8.png",
        "heading1": "Welcome to Our Service",
        "heading2": "Quality and Trust",
        "heading3": "Join Us Today"
    },
    {
        "image": "/images/carousel/bg9.png",
        "heading1": "Discover New Horizons",
        "heading2": "Adventure Awaits",
        "heading3": "Explore the World"
    },
    {
        "image": "/images/carousel/bg10.png",
        "heading1": "Innovative Solutions",
        "heading2": "Modern Technology",
        "heading3": "Future-Ready"
    }
]



export default function Home() {
    return (
        <main>
          
            <HeroCarousel imagesData={imagesData} />
            <FeatureCard />
            <ProductList />
            <Ads/>
            <Testimonial/>
            <BlogSection/>
        </main>
    );
}
