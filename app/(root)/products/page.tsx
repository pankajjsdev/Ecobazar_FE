import React from 'react'
import ProductList from './ProductList'

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { CategoryFilter, PriceFilter, RatingFilter, TagFilter, ProductFilter } from './Filters'
import { ScrollArea } from "@/components/ui/scroll-area"
const categoryFilter = [
    'Fresh Fruit',
    'Vegetables',
    'Cooking',
    'Snacks',
    'Beverages',
    'Beauty & Health',
    'Bread & Bakery'

]

const products = [
    {
      product_id: "p001",
      name: "Smartphone X",
      description: "Latest smartphone with advanced features",
      category: "Electronics",
      brand: "Brand A",
      currency: "USD",
      stock_quantity: 50,
      images: [
        { url: "https://example.com/image1.jpg", alt_text: "Front view" },
        { url: "https://example.com/image2.jpg", alt_text: "Back view" }
      ],
      specifications: {
        weight: "150g",
        origin: "Country A",
        certification: "Cert A"
      },
      variants: [
        { variant_id: "v001", weight: "150g", stock_quantity: 20 },
        { variant_id: "v002", weight: "160g", stock_quantity: 30 }
      ],
      reviews: [
        {
          review_id: "r001",
          user: "user1",
          rating: 4.5,
          comment: "Great product!",
          date: "2024-01-01"
        },
        {
          review_id: "r002",
          user: "user2",
          rating: 4.0,
          comment: "Good value for money",
          date: "2024-02-01"
        }
      ],
      seller: {
        seller_id: "s001",
        name: "Seller A",
        rating: 4.8
      },
      shipping: {
        weight: "200g",
        dimensions: {
          length: "10cm",
          width: "5cm",
          height: "1cm"
        },
        cost: 10,
        currency: "USD",
        estimated_delivery: "2024-07-01"
      },
      tags: ["smartphone", "electronics", "gadget"],
      saleOff: "10%",
      salePrice: 450,
      regularPrice: 500,
      status: true
    },
    {
      product_id: "p002",
      name: "Laptop Y",
      description: "High-performance laptop for professionals",
      category: "Computers",
      brand: "Brand B",
      currency: "USD",
      stock_quantity: 30,
      images: [
        { url: "https://example.com/image3.jpg", alt_text: "Open view" },
        { url: "https://example.com/image4.jpg", alt_text: "Closed view" }
      ],
      specifications: {
        weight: "1.5kg",
        origin: "Country B",
        certification: "Cert B"
      },
      variants: [
        { variant_id: "v003", weight: "1.5kg", stock_quantity: 10 },
        { variant_id: "v004", weight: "1.6kg", stock_quantity: 20 }
      ],
      reviews: [
        {
          review_id: "r003",
          user: "user3",
          rating: 5.0,
          comment: "Excellent performance!",
          date: "2024-03-01"
        },
        {
          review_id: "r004",
          user: "user4",
          rating: 4.5,
          comment: "Highly recommend",
          date: "2024-04-01"
        }
      ],
      seller: {
        seller_id: "s002",
        name: "Seller B",
        rating: 4.9
      },
      shipping: {
        weight: "2kg",
        dimensions: {
          length: "30cm",
          width: "20cm",
          height: "2cm"
        },
        cost: 20,
        currency: "USD",
        estimated_delivery: "2024-07-15"
      },
      tags: ["laptop", "computers", "technology"],
      saleOff: "15%",
      salePrice: 850,
      regularPrice: 1000,
      status: true
    },
    {
      product_id: "p002",
      name: "Laptop Y",
      description: "High-performance laptop for professionals",
      category: "Computers",
      brand: "Brand B",
      currency: "USD",
      stock_quantity: 30,
      images: [
        { url: "https://example.com/image3.jpg", alt_text: "Open view" },
        { url: "https://example.com/image4.jpg", alt_text: "Closed view" }
      ],
      specifications: {
        weight: "1.5kg",
        origin: "Country B",
        certification: "Cert B"
      },
      variants: [
        { variant_id: "v003", weight: "1.5kg", stock_quantity: 10 },
        { variant_id: "v004", weight: "1.6kg", stock_quantity: 20 }
      ],
      reviews: [
        {
          review_id: "r003",
          user: "user3",
          rating: 5.0,
          comment: "Excellent performance!",
          date: "2024-03-01"
        },
        {
          review_id: "r004",
          user: "user4",
          rating: 4.5,
          comment: "Highly recommend",
          date: "2024-04-01"
        }
      ],
      seller: {
        seller_id: "s002",
        name: "Seller B",
        rating: 4.9
      },
      shipping: {
        weight: "2kg",
        dimensions: {
          length: "30cm",
          width: "20cm",
          height: "2cm"
        },
        cost: 20,
        currency: "USD",
        estimated_delivery: "2024-07-15"
      },
      tags: ["laptop", "computers", "technology"],
      saleOff: "15%",
      salePrice: 850,
      regularPrice: 1000,
      status: true
    },
   
  ];

export default function page() {
    return (
        <div>
            <div className='container'>
                <div className='flex'>
                    <div className='w-[25%] h-[100vh] mr-3 '>
                        <ScrollArea className='h-[100vh] border-none' >
                            <CategoryFilter filterData={categoryFilter}/>
                            <PriceFilter filterData={categoryFilter}/>
                            <RatingFilter filterData={categoryFilter}/>
                            <TagFilter filterData={categoryFilter}/>
                            <ProductFilter filterData={products} />
                        </ScrollArea>

                    </div>
                    <div className='grid grid-cols-3 w-full gap-6'>
                        <ProductList />
                    </div>
                </div>
            </div>
        </div>
    )
}
