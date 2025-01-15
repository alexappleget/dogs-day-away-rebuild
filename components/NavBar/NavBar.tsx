import Link from "next/link";
import { Dropdown } from "../Dropdown/Dropdown";
import Image from "next/image";

export const NavBar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-full mx-auto px-8">
        <div className="flex justify-between h-16 text-[#e0bf85]">
          <Image
            alt="Dogs Day Away logo"
            src="/logo.png"
            width={100}
            height={10}
          />
          <div className="flex space-x-8 mx-auto items-center">
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
      </div>
    </nav>
  );
};
