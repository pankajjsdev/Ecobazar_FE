import Image from "next/image"
import SocialIcons from "../social/SocialIcons"
import { Button } from "@/components/ui/button"

function index() {
  return (
    <>
    <div className="py-10 bg-gray-gray.5">
    <div className="container">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 items-center text-left lg:text-left ">
        <div>
          <h1 className="text-2xl font-semibold">Subscribe Our Newsletter</h1>
          <p className="text-sm text-gray-gray4">Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
        </div>
        
     
         <div className="flex items-center justify-center w-full relative ">
            <input className="w-2/3 h-12 border border-r-0 px-2  border-gray-gray1 focus:border-gray-gray1 rounded-full rounded-r-none" placeholder="Your email address" />
            <Button className="bg-primary-primary rounded-full text-white text-[14px] py-6 font-semibold px-6 absolute left-[60%]">Subscribe</Button>
          </div>
      
       
        <div className="flex items-center justify-center lg:justify-end">
          <SocialIcons />
        </div>
      </div>
    </div>

    </div>
      <footer className="bg-gray-gray9 text-white py-20">
        <div className="container text-center">
          <div className="grid grid-cols-2  lg:grid-cols-5">
            <div>
              <h1 className="my-6">My Account</h1>
              <ul className="text-gray-gray4 space-y-3">
                <li>My Account</li>
                <li>Order History</li>
                <li>Shoping Cart</li>
                <li>Wishlist</li>
              </ul>
            </div>

            <div>
              <h1 className="my-6">My Helps</h1>
              <ul className="text-gray-gray4 space-y-3">
                <li>Contact</li>
                <li>Faq</li>
                <li>Terms & Condition</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div>
              <h1 className="my-6">Proxy</h1>
              <ul className="text-gray-gray4 space-y-3">
                <li>About</li>
                <li>Shop</li>
                <li>Product</li>
                <li>Track Order</li>
              </ul>
            </div>

            <div>
              <h1 className="my-6">Categories</h1>
              <ul className="text-gray-gray4 space-y-3">
                <li>Fruit & Vegetables</li>
                <li>Meat & Fish</li>
                <li>Bread & Bakery</li>
                <li>Beauty & Health</li>
              </ul>
            </div>
            <div className="col-span-2 flex flex-col py-6 items-center lg:col-span-1">
              <Image
                src={"/images/logo/logo_footer.svg"}
                alt="logo"
                width={300}
                height={200}
              />
              <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <SocialIcons />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default index