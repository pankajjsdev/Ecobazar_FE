'use client'

import { Badge } from "@/components/ui/badge"
import ProductCard from "@/components/_ui/product/ProductCard";

const product = [
  {
    "product_id": "78901",
    "name": "Organic Carrots",
    "description": "Fresh organic carrots grown without pesticides. Perfect for salads and cooking.",
    "category": "Vegetables",
    "brand": "Healthy Harvest",
    "regularPrice": 3.12,
    "salePrice": 2.99,
    "currency": "USD",
    "stock_quantity": 200,
    "saleOff": "50",
    "images": [
      {
        "url": "https://example.com/images/product_78901_1.jpg",
        "alt_text": "Organic Carrots - Bunch"
      },
      {
        "url": "https://example.com/images/product_78901_2.jpg",
        "alt_text": "Organic Carrots - Close Up"
      }
    ],
    "specifications": {
      "weight": "1 kg",
      "origin": "USA",
      "certification": "USDA Organic"
    },
    "variants": [
      {
        "variant_id": "78901-01",
        "weight": "500 grams",
        "stock_quantity": 100
      },
      {
        "variant_id": "78901-02",
        "weight": "1 kg",
        "stock_quantity": 100
      }
    ],
    "reviews": [
      {
        "review_id": "98765",
        "user": "alice_green",
        "rating": 5,
        "comment": "These carrots are so fresh and sweet!",
        "date": "2024-06-20"
      },
      {
        "review_id": "54321",
        "user": "bob_farmer",
        "rating": 4,
        "comment": "Good quality but a bit pricey.",
        "date": "2024-06-22"
      }
    ],
    "seller": {
      "seller_id": "seller789",
      "name": "Fresh Veggie Mart",
      "rating": 4.7
    },
    "shipping": {
      "weight": "1.2 kg",
      "dimensions": {
        "length": "30 cm",
        "width": "20 cm",
        "height": "10 cm"
      },
      "cost": 3.99,
      "currency": "USD",
      "estimated_delivery": "2-4 business days"
    },
    "tags": ["organic", "carrots", "vegetables", "fresh", "healthy"]
  }


]

export default function Home() {
  return (
    <main className="p-[80px]">
  
    </main>
  );
}
