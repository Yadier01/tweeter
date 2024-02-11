"use client";
import { BiWorld } from "react-icons/bi";
import { CreatePost } from "./create-post";
import { api } from "~/trpc/react";
import cookie from "js-cookie";
import { userStore } from "../Store/userStore";
import { use, useEffect, useState } from "react";
export const TweetSomething = ({
  username,
}: {
  username?: string | undefined;
}) => {
  let getUserName: any;
  const setUserName = userStore((state) => state.setUserName);
  const token = cookie.get("token")!;

  if (token !== undefined) {
    getUserName = api.user.getUser.useQuery({ token }).data;
    setUserName(getUserName?.name);
  }
  return (
    <div className="mt-1 flex w-full flex-col gap-3 rounded-lg bg-white p-4 text-black">
      <h4 className=" border-b  font-semibold">Tweet something</h4>
      <div className="flex gap-1">
        <img src="/pfp.jpg" className="h-10 rounded-lg" alt="" />
        <CreatePost />
      </div>
    </div>
  );
};
