import React from 'react'
import BlogCard from './BlogCard'
const data = [
    {
        "title": "The Future of AI: What to Expect",
        "subHeading": "Exploring the advancements and potential of artificial intelligence",
        "image": "/images/blog/blog1.png",
        "date": "2024-06-27",
        "url": "https://example.com/blog/future-of-ai"
    },
    {
        "title": "10 Tips for Effective Remote Work",
        "subHeading": "Boost your productivity and maintain work-life balance",
        "image": "/images/blog/blog1.png",
        "date": "2024-06-25",
        "url": "https://example.com/blog/remote-work-tips"
    },
    {
        "title": "Understanding Blockchain Technology",
        "subHeading": "A beginner's guide to blockchain and its applications",
        "image": "/images/blog/blog1.png",
        "date": "2024-06-20",
        "url": "https://example.com/blog/blockchain-guide"
    },
    // {
    //     "title": "The Rise of Electric Vehicles",
    //     "subHeading": "How EVs are changing the automotive industry",
    //     "image": "/images/blog/blog1.png",
    //     "date": "2024-06-15",
    //     "url": "https://example.com/blog/electric-vehicles"
    // },
    // {
    //     "title": "Healthy Eating: Tips and Tricks",
    //     "subHeading": "Simple ways to maintain a balanced diet",
    //     "image": "/images/blog/blog1.png",
    //     "date": "2024-06-10",
    //     "url": "https://example.com/blog/healthy-eating"
    // }
]

function index() {
    return (
        <section className='container my-3'>
             <h1 className='text-[32px] font-semibold'>Latest News</h1>
           <div className='grid grid-cols-3 gap-3 my-3'>
           {
                data?.map((blog, index) => {
                    return (
                        <BlogCard
                            key={index}
                            title={blog.title}
                            subHeading={blog.subHeading}
                            image={blog.image}
                            date="27 JAN"
                        />
                    )
                })
            }
           </div>
        </section>
    )
}

export default index