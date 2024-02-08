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
      <div className="ax-w-2xl flex w-[754px] flex-col items-center ">
        <TweetSomething />
        <Tweet />
        {/* <CrudShowcase /> */}
      </div>
    </main>
  );
}

async function CrudShowcase() {
  const latestPost = await api.post.getLatest.query();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
