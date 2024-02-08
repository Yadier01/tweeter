import { FaRetweet, FaRegCommentAlt } from "react-icons/fa";
import { CiHeart, CiBookmark } from "react-icons/ci";
import { TweetComment } from "./TweetComment";
import { api } from "~/trpc/server";
import { CreateComment } from "./CreateComment";

export const Tweet = async () => {
  const latestPost = await api.post.getTweet.query();
  const tweetActions = [
    { icon: FaRegCommentAlt, text: "Comment" },
    { icon: FaRetweet, text: "Retweet" },
    { icon: CiHeart, text: "Like" },
    { icon: CiBookmark, text: "Save" },
  ];

  return (
    <>
      {latestPost.map((post) => (
        <div
          key={post.id}
          className="w-full rounded-md bg-white p-4 text-black"
        >
          <div className="mb-4 flex">
            <img src="pfp.jpg" className="h-10 rounded-md" alt="" />
            <div className="ml-4">
              <h4 className=" font-semibold">User Name</h4>
              <p className="text-xs">24 agust at 20:43</p>
            </div>
          </div>
          <p>{post.name}</p>
          <img
            src="/testimg.png"
            alt=""
            className="h-[375px] w-full rounded-md object-cover object-center"
          />
          <ul className="mx-5 mt-5 flex justify-between border-y border-[#F2F2F2] py-2">
            {tweetActions.map((action, index) => (
              <li key={index} className="flex items-center gap-1">
                <action.icon />
                {action.text}
              </li>
            ))}
          </ul>

          {/* user tweet */}
          <div className="mt-5 flex gap-5">
            <img src="pfp.jpg" className="h-10 rounded-md" alt="" />
            <CreateComment postId={post.id} />
          </div>
          {post.comments != null && (
            <TweetComment comment={post.comments} parentPostId={post.id} />
          )}
        </div>
      ))}
    </>
  );
};
