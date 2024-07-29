"use client";
import Image from "next/image";
import Logo from "@/assets/images/IndiGologo.png";
import Link from "next/link";
import { BellIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";

export function NavBar() {
  const pathName = usePathname();

  return (
    <div className="sticky top-0 flex w-full items-center justify-between rounded-md bg-white px-6 py-2 lg:mt-4 lg:w-4/5">
      <Image src={Logo} width={100} height={30} alt={"logo"} />
      <nav className="hidden flex-grow justify-center space-x-2 lg:flex">
        <ul className="flex items-center md:space-x-4">
          <li>
            <Link
              className={`font-sans text-sm text-primaryText/80 hover:opacity-75 ${pathName === "/dashboard" ? "border-b border-primaryText font-medium text-primaryText hover:opacity-100" : ""}`}
              href={"/dashboard"}
            >
              Live Status
            </Link>
          </li>
          <li>
            <Link
              className={`font-sans text-sm text-primaryText/80 hover:opacity-75 ${pathName === "/dashboard/my-trip" ? "border-b border-primaryText font-medium text-primaryText hover:opacity-100" : ""}`}
              href={"/dashboard/my-trip"}
            >
              My trip
            </Link>
          </li>
        </ul>
      </nav>
      <div className="hidden flex-row items-center space-x-6 lg:flex">
        <BellIcon className="h-4 w-4 hover:cursor-pointer hover:opacity-85" />
        <Image
          src="/avatar.png"
          className="rounded-full hover:cursor-pointer"
          width={30}
          height={30}
          alt={"Profile Avatar"}
        />
      </div>
      <HamburgerMenuIcon className="block h-4 w-4 text-primaryText hover:cursor-pointer hover:opacity-75 lg:hidden" />
    </div>
  );
}
