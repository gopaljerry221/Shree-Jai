import Image from "next/image";
import Facebook from "../../public/images/logos/fb";
import Insta from "../../public/images/logos/insta";
import Youtube from "../../public/images/logos/youtube";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#f9cf00] px-[20px] md:px-[70px] py-[40px] text-black">
        <div className="flex flex-col md:flex-row md:justify-between gap-[30px] md:gap-0">
          {/* About Us */}
          <div className="about-us-section md:w-[40%] w-full text-left">
            <h5 className="text-[20px] font-bold pb-[20px]">About Us</h5>
            <p className="font-semibold">
              sjfpl.com is a one stop store bringing to you the best of fragrance
              products from the unsurpassed leaders in the industry. Discover an
              array of handpicked products and accessories associated with prayer
              requirements, personal care, air care and lifestyle products.
            </p>
            <li className="flex justify-start gap-4 pt-[30px]">
              <Link href="https://www.facebook.com/ShreeJalaramfragrance#" target="_blank">
                <Facebook />
              </Link>
              <Link
                href="https://www.instagram.com/shreejalaramfragrance/"
                target="_blank"
              >
                <Insta />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCltQdibmxeNpslkCo22eJVg"
                target="_blank"
              >
                <Youtube />
              </Link>
            </li>
          </div>

          {/* Our Products */}
          <div className="our-product-section md:w-[15%] w-full text-left">
            <h5 className="text-[20px] font-bold pb-[20px]">Our Products</h5>
            <li className="list-none pb-[8px] hover:text-[#ed1112] font-semibold">
              <Link href="/">Up Coming Product</Link>
            </li>
            <li className="list-none pb-[8px] hover:text-[#ed1112] font-semibold">
              <Link href="/">Agarbati</Link>
            </li>
            <li className="list-none pb-[8px] hover:text-[#ed1112] font-semibold">
              <Link href="/">Dhoop</Link>
            </li>
            <li className="list-none pb-[8px] hover:text-[#ed1112] font-semibold">
              <Link href="/">Camphor</Link>
            </li>
          </div>

          {/* Contact Us */}
          <div className="contact-us-section md:w-[15%] w-full text-left">
            <h5 className="text-[20px] font-bold pb-[20px]">Contact us</h5>
            <li className="list-none pb-[8px] hover:text-[#ed1112] font-semibold">
              <Link href="/">+91 9890941669</Link>
            </li>
            <li className="list-none pb-[8px] hover:text-[#ed1112] font-semibold">
              <Link href="/">Info@sjfpl.com</Link>
            </li>
          </div>

          {/* Address */}
          <div className="contact-us-section md:w-[15%] w-full text-left">
            <h5 className="text-[20px] font-bold pb-[20px]">Address</h5>
            <li className="list-none pb-[8px]">
              <Link href="/">
                Akli Seem-Hingna Rd, Lokmanya Nagar, Nagpur, Nildoh ct,
                Maharashtra 441110
              </Link>
            </li>
          </div>
        </div>
      </footer>
      <p className="py-[10px] text-center">
        Copyright © 2014 Shree Jalaram Fragrance Pvt.Ltd. 2014 - All right
        reserved
      </p>
    </>
  );
}
