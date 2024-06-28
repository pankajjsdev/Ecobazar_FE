import Image from "next/image";
import { FaCircleChevronRight, } from "react-icons/fa6";

import { ImPriceTags, ImLeaf } from "react-icons/im";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Rating from "@/components/_ui/product/Rating";


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
    seller?: Seller;
    shipping?: Shipping;
    tags?: string[];
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



const products =
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
}


function page() {
    return (
        <div>

            <section>
                <div className="grid grid-cols-2">
                    <div></div>
                    <div>
                        <div className="flex">
                            <h1 className="text-[36px] font-semibold">Chinese Cabbage </h1> <span className="text-primary-hard bg-primary-soft p-2">In Stock</span>
                        </div>
                        <div className="flex">
                            <Rating /><span>4 Reviews</span>
                        </div>
                        <div>
                            <span>$48.00</span>
                            <span>$17.28</span>
                            <span>64% Off</span>
                        </div>

                        <div>
                            <div> Brand: Logo</div>
                            <div>
                                social icons
                            </div>
                        </div>
                        <div>
                            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. </p>
                        </div>

                        <div>btn</div>

                        <div>
                            <span>Category:</span>
                            <span>Vegetables</span>
                        </div>

                        <div>
                            <p>Tag:
                                Vegetables
                                Healthy
                                Chinese
                                Cabbage
                                Green Cabbage</p>
                        </div>
                    </div>

                </div>
            </section>



            <div className="">
                <Tabs defaultValue="descriptions" className="w-full">
                    <TabsList className="flex mx-auto border-b-2 rounded-none">
                        <TabsTrigger value="descriptions">Descriptions</TabsTrigger>
                        <TabsTrigger value="additionalinformation">Additional Information</TabsTrigger>
                        <TabsTrigger value="customerfeedback">Customer Feedback</TabsTrigger>
                    </TabsList>
                    <TabsContent value="descriptions" className="w-full">
                        <section className="container my-6">
                            <div>
                                <div className="grid grid-cols-2">
                                    <div className="w-[648px] text-gray-gray5 text-[14px]">
                                        <p>
                                            Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.
                                        </p>
                                        <p className="my-3"> Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra.</p>
                                        <ul>
                                            <li className="flex items-center"> <FaCircleChevronRight className="text-primary-primary mr-2" /> 100 g of fresh leaves provides.</li>
                                            <li className="flex items-center"> <FaCircleChevronRight className="text-primary-primary mr-2" />Aliquam ac est at augue volutpat elementum.</li>
                                            <li className="flex items-center"> <FaCircleChevronRight className="text-primary-primary mr-2" />Quisque nec enim eget sapien molestie.</li>
                                            <li className="flex items-center"> <FaCircleChevronRight className="text-primary-primary mr-2" />Proin convallis odio volutpat finibus posuere.</li>
                                        </ul>
                                        <p className="my-3">Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa. </p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <Image
                                            src={"/images/products/video.png"}
                                            width={536}
                                            height={300}
                                            alt=""
                                        />

                                        <div className="flex border border-gray-gray1 px-[20px] py-[24px] my-6 rounded-lg">
                                            <div className="flex items-center p-[12px]">
                                                <div>
                                                    <ImPriceTags className="text-primary-primary mr-2" size={30} />
                                                </div>
                                                <div>
                                                    <h3 className="text-[14px] font-medium text-gray-gray9">64% Discount</h3>
                                                    <p className="text-gray-gray5 text-[13px]">Save your 64% money with us</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center p-[12px]">
                                                <div>
                                                    <ImLeaf className="text-primary-primary mr-2" size={30} />
                                                </div>
                                                <div>
                                                    <h3 className="text-[14px] font-medium text-gray-gray9">100% Organic</h3>
                                                    <p className="text-gray-gray5 text-[13px]">100% Organic Vegetables</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </TabsContent>
                    <TabsContent value="additionalinformation">
                        <section className="container my-6">

                            <div className="grid grid-cols-2">
                                <div>
                                    <ul>
                                        <li><span>Weight:</span> <span>03</span></li>
                                        <li><span>Color:</span> <span>Green</span></li>
                                        <li><span>Type:</span> <span>Organic</span></li>
                                        <li><span>Category:</span> <span>Vegetables</span></li>
                                        <li><span>Stock Status:</span> <span>Available (5,413)</span></li>
                                        <li><span>Tags:</span> <span>Vegetables,
                                            Healthy,
                                            Chinese,
                                            Cabbage,
                                            Green Cabbage,</span></li>

                                    </ul>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Image
                                        src={"/images/products/video.png"}
                                        width={536}
                                        height={300}
                                        alt=""
                                    />

                                    <div className="flex border border-gray-gray1 px-[20px] py-[24px] my-6 rounded-lg">
                                        <div className="flex items-center p-[12px]">
                                            <div>
                                                <ImPriceTags className="text-primary-primary mr-2" size={30} />
                                            </div>
                                            <div>
                                                <h3 className="text-[14px] font-medium text-gray-gray9">64% Discount</h3>
                                                <p className="text-gray-gray5 text-[13px]">Save your 64% money with us</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center p-[12px]">
                                            <div>
                                                <ImLeaf className="text-primary-primary mr-2" size={30} />
                                            </div>
                                            <div>
                                                <h3 className="text-[14px] font-medium text-gray-gray9">100% Organic</h3>
                                                <p className="text-gray-gray5 text-[13px]">100% Organic Vegetables</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </section>
                    </TabsContent>
                    <TabsContent value="customerfeedback">

                        <section className="container my-6">

                            <div className="grid grid-cols-2">
                                <div>
                                    <ul>
                                        <li><span>Weight:</span> <span>03</span></li>
                                        <li><span>Color:</span> <span>Green</span></li>
                                        <li><span>Type:</span> <span>Organic</span></li>
                                        <li><span>Category:</span> <span>Vegetables</span></li>
                                        <li><span>Stock Status:</span> <span>Available (5,413)</span></li>
                                        <li><span>Tags:</span> <span>Vegetables,
                                            Healthy,
                                            Chinese,
                                            Cabbage,
                                            Green Cabbage,</span></li>

                                    </ul>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Image
                                        src={"/images/products/video.png"}
                                        width={536}
                                        height={300}
                                        alt=""
                                    />

                                    <div className="flex border border-gray-gray1 px-[20px] py-[24px] my-6 rounded-lg">
                                        <div className="flex items-center p-[12px]">
                                            <div>
                                                <ImPriceTags className="text-primary-primary mr-2" size={30} />
                                            </div>
                                            <div>
                                                <h3 className="text-[14px] font-medium text-gray-gray9">64% Discount</h3>
                                                <p className="text-gray-gray5 text-[13px]">Save your 64% money with us</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center p-[12px]">
                                            <div>
                                                <ImLeaf className="text-primary-primary mr-2" size={30} />
                                            </div>
                                            <div>
                                                <h3 className="text-[14px] font-medium text-gray-gray9">100% Organic</h3>
                                                <p className="text-gray-gray5 text-[13px]">100% Organic Vegetables</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </section>

                    </TabsContent>
                </Tabs>


            </div>
        </div>
    )
}

export default page