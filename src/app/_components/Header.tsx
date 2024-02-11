"use client";
import Link from "next/link";
import { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { MdGroup } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { HiLogout } from "react-icons/hi";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
export const Header = () => {
  const [active, setActive] = useState(0);
  const [activePopover, setActivePopover] = useState(true);
  const links = ["Home", "Explore", "Bookmarks"];

  return (
    <header className="relative mx-10 flex h-[68px] items-center justify-between">
      <img src="/tweeter.svg" alt="" />
      <nav>
        <ul className="flex gap-20">
          {links.map((link, index) => (
            <li
              key={index}
              className="relative flex h-full flex-col items-center justify-between"
              onClick={() => setActive(index)}
            >
              <Link href={"/"}>{link}</Link>
              {active === index && (
                <div className="absolute -bottom-[1.4rem] left-1/2 h-0.5 w-20 -translate-x-1/2 transform  rounded-lg bg-[#2F80ED] " />
              )}
            </li>
          ))}
        </ul>
      </nav>
      <Popover>
        <PopoverTrigger>
          <div className="flex items-center gap-3">
            <img src="/pfp.jpg" alt="" className="h-10  rounded-full " />

            <p>Xanthe Neal</p>
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex flex-col gap-3">
            <span className="flex flex-col gap-2 border-b pb-4  ">
              <p className="flex items-center gap-3 rounded-md p-2 transition hover:bg-[#F2F2F2]">
                <FaCircleUser /> My Profile
              </p>
              <p className="flex items-center gap-3 rounded-md p-2 transition hover:bg-[#F2F2F2]">
                <MdGroup /> Group Chat
              </p>
              <p className="flex items-center gap-3 rounded-md p-2 transition hover:bg-[#F2F2F2]">
                <IoSettingsSharp /> Settings
              </p>
            </span>
            <p className="flex items-center gap-3 rounded-md p-2 text-[#EB5757] transition hover:bg-[#F2F2F2]">
              <HiLogout /> Logout
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </header>
  );
};
