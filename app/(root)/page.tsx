'use client'

import { Badge } from "@/components/ui/badge"
import ProductList from "@/components/_ui/product/index";
import { HeroCarousel, } from "@/components/_ui/carousel/HeroCarousel";
import FeatureCard from "@/components/_ui/Feature/FeatureCard";
import Testimonial from "@/components/_ui/testimonial";


import Ads from "@/components/_ui/ads/index";
import BlogSection from "@/components/_ui/blog/index";





const imagesData = [
    {
        "image": "/images/carousel/bg1.png",
        "heading1": "Welcome to Our Service",
        "heading2": "Quality and Trust",
        "heading3": "Join Us Today"
    },
    {
        "image": "/images/carousel/bg1.png",
        "heading1": "Discover New Horizons",
        "heading2": "Adventure Awaits",
        "heading3": "Explore the World"
    },
    {
        "image": "/images/carousel/bg1.png",
        "heading1": "Innovative Solutions",
        "heading2": "Modern Technology",
        "heading3": "Future-Ready"
    },
    {
        "image": "/images/carousel/bg1.png",
        "heading1": "Stay Connected",
        "heading2": "Anytime, Anywhere",
        "heading3": "Seamless Experience"
    },
    {
        "image": "/images/carousel/bg1.png",
        "heading1": "Healthy Living",
        "heading2": "Wellness and Fitness",
        "heading3": "Join the Movement"
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
