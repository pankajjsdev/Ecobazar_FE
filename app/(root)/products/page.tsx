import React from 'react'
import ProductList from './ProductList'

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { CategoryFilter, RatingFilter } from './Filters'

const categoryFilter = [
    'Fresh Fruit',
    'Vegetables',
    'Cooking',
    'Snacks',
    'Beverages',
    'Beauty & Health',
    'Bread & Bakery'

]

export default function page() {
    return (
        <div>
            <div className='container'>
                <div className='flex'>
                    <div className='w-[25%] h-[100vh] border mr-3 '>

                        <div>
                            <CategoryFilter filterData={categoryFilter}/>
                            {/* <PriceFilter filterData={categoryFilter}/> */}
                            <RatingFilter filterData={categoryFilter}/>
                        </div>

                    </div>
                    <div className='grid grid-cols-3 w-full gap-6'>
                        <ProductList />
                    </div>
                </div>
            </div>
        </div>
    )
}
