import {
    Card,
    CardContent
} from "@/components/ui/card"
import Image from "next/image";
import { Badge } from "@/components/ui/badge"
import { BsHandbag, BsHeart, BsEye } from "react-icons/bs";
import Rating from "./Rating";
import ToolTip from "../common/ToolTip";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";

type Product = {
    product_id: string;
    name: string;
    description: string;
    category: string;
    brand: string;
    currency: string;
    stock_quantity: number;
    images: Image[];
    specifications: Specifications;
    variants: Variant[];
    reviews: Review[];
    seller: Seller;
    shipping: Shipping;
    tags: string[];
    saleOff?: string;
    salePrice?: number;
    regularPrice?: number;
    status?: boolean;
};

type Image = {
    url: string;
    alt_text: string;
};

type Specifications = {
    weight: string;
    origin: string;
    certification: string;
};

type Variant = {
    variant_id: string;
    weight: string;
    stock_quantity: number;
};

type Review = {
    review_id: string;
    user: string;
    rating: number;
    comment: string;
    date: string;
};

type Seller = {
    seller_id: string;
    name: string;
    rating: number;
};

type Shipping = {
    weight: string;
    dimensions: Dimensions;
    cost: number;
    currency: string;
    estimated_delivery: string;
};

type Dimensions = {
    length: string;
    width: string;
    height: string;
};

type Props = {
    product: Product;
    productCardType: number;
    addToCart?: (product: Product) => void;
    addToWishlist?: (product: Product) => void;
    onClickView?: (product: Product) => void;
};

function ProductCard({ product, productCardType = 1, addToWishlist, addToCart, onClickView }: Props) {
    return (
        <Card className="group">

            <div className="mt-2 ml-2">
                {/* // change this to sale tag as a array comming from BE */}
                {/* {product?.saleOff && <Badge variant="destructive" className="bg-secondary-danger text-white rounded top-3">sale 50%</Badge>} */}
                {/* {product?.status && <Badge variant="secondary" className="">sale 50%</Badge>} */}
                {/* {<Badge variant="secondary" className="bg-secondary-info text-white rounded top-3">Best Sale</Badge>} */}

            </div>
            <CardContent className={`relative ${productCardType == 2 ? 'flex' : ''}`}>

                <Image
                    src={"/images/products/product1.png"}
                    alt={"product1"}
                    width={300}
                    height={300}
                    className={`${productCardType == 2 ? 'w-[100px] h-[100px]' : ''} transform scale-100 group-hover:scale-105 transition-all duration-500`}
                />



                <div className={`${productCardType == 2 ? 'px-3' : ''}`}>
                    <h1 className="text-sm text-gray-gray7 group-hover:text-primary-hard mt-1 mb-2">{product?.name}</h1>

                    <div className="flex justify-between items-center">
                        <p className={`${productCardType == 2 ? 'group-hover:hidden' : ''}`}><span>${product?.salePrice}</span> <span className="line-through text-gray-gray4 text-base">${product?.regularPrice}</span></p>

                        {productCardType != 2 && <Button variant="outline" size="icon" className="p-2 rounded-full group-hover:bg-primary-primary cursor-pointer">
                            <BsHandbag className="text-xl group-hover:text-white" />
                        </Button>}

                        <div className={` flex ${productCardType == 2 ? 'space-x-3' : 'absolute flex-col right-3 top-0 space-y-3 transition-all duration-500'} opacity-0 transform scale-75 group-hover:opacity-100 group-hover:scale-100  `}>
                            {productCardType == 2 && <Button variant="outline" size="icon" className="p-2 rounded-full group-hover:bg-primary-primary cursor-pointer">
                                <BsHandbag className="text-xl group-hover:text-white" />
                            </Button>}
                            <Button variant="outline" size="icon" className="bg-white shadow rounded-full">
                                <BsHeart className="text-xl" title="add to wishlist" />
                            </Button>
                            <Button variant="outline" size="icon" className="bg-white shadow rounded-full">
                                <BsEye className="text-xl" title="view product" />
                            </Button>



                        </div>


                    </div>
                    <div className={`${productCardType == 2 ? 'group-hover:hidden' : ''}`}>
                        <Rating />
                    </div>
                </div>

                {/* <div className={`absolute ${productCardType == 2 ? '' : 'right-3 top-3 space-y-3'}   transform scale-75 group-hover:opacity-100 group-hover:scale-100 flex transition-all duration-500`}>
                    <Button variant="outline" size="icon" className="bg-white shadow rounded-full">
                        <BsHeart className="text-xl" title="add to wishlist" />
                    </Button>
                    <Button variant="outline" size="icon" className="bg-white shadow rounded-full">
                        <BsEye className="text-xl" title="view product" />
                    </Button>

                </div> */}

                {/* rating component start */}

                {/* rating component end */}
            </CardContent>
        </Card>
    )
}

export default ProductCard;
