import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";
import { TweetSomething } from "./_components/TweetSomething";
import { Tweet } from "./_components/Tweet";

export default async function Home() {
  noStore();
  const hello = await api.post.hello.query({ text: "from tRPC" });

  return (
    <main className=" flex min-h-screen flex-col items-center bg-[#F2F2F2] text-white">
      <div className=" my-8 flex w-[754px] flex-col items-center gap-10 ">
        <TweetSomething />
        <Tweet />
      </div>
    </main>
  );
}
