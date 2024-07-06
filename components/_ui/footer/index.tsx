import Image from "next/image"

function index() {
  return (
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default index