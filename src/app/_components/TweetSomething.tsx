import React from "react";

export const TweetSomething = () => {
  return (
    <div className="mt-1 flex w-[754px] flex-col gap-3 rounded-lg bg-white p-4 text-black">
      <h4 className=" border-b  font-semibold">Tweet something</h4>
      <div className="flex gap-1">
        <img src="/pfp.jpg" className="h-10 rounded-lg" alt="" />
        <textarea
          name="tweet"
          id="tweet"
          placeholder="What's happening?"
          className="w-full p-2 "
        ></textarea>
      </div>
      <div className="flex w-full justify-between pl-[55px]">
        <ul className="flex gap-3">
          <li>img</li>
          <li className="text-[#2F80ED]">wor, Everyone can reply</li>
        </ul>

        <button className="h-[32px] w-[81px] rounded-[4px] bg-[#2F80ED] text-sm text-white">
          Tweet
        </button>
      </div>
    </div>
  );
};
