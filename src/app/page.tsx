import { TweetSomething } from "./_components/TweetSomething";
import { Tweet } from "./_components/Tweet";
import { redirect } from "next/navigation";

export default async function Home() {
  redirect("/home");
  return <></>;
}
