import { TweetSomething } from "../_components/TweetSomething";
import { Tweet } from "../_components/Tweet";
import { api } from "~/trpc/server";
import { cookies } from "next/headers";
import { userStore } from "../Store/userStore";
import { useEffect } from "react";
export default async function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center bg-[#F2F2F2] text-white">
      <div className=" my-8 flex w-[754px] flex-col items-center gap-10 ">
        <TweetSomething />
        <Tweet />
      </div>
    </main>
  );
}
