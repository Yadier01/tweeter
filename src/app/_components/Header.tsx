"use client";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [active, setActive] = useState(0);
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
      <div className="flex items-center gap-3">
        <img src="/pfp.jpg" alt="" className="h-10  rounded-full " />
        <p>Xanthe Neal</p>
      </div>
    </header>
  );
};
