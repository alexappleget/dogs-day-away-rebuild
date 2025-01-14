import Link from "next/link";
import { Dropdown } from "../Dropdown/Dropdown";

export const NavBar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 text-[#DFCCA8]">
          <Link href="" className="hover:text-black">
            Home
          </Link>
          <Link href="" className="hover:text-black">
            About Us
          </Link>
          <Dropdown />
          <Link href="" className="hover:text-black">
            Hours
          </Link>
          <Link href="" className="hover:text-black">
            Review and Testimonials
          </Link>
          <Link href="" className="hover:text-black">
            Gallery
          </Link>
          <Link href="" className="hover:text-black">
            Location
          </Link>
          <Link href="" className="hover:text-black">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};
