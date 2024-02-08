"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "~/trpc/react";

export function CreateReply({
  postId,
  parentId,
}: {
  postId: any;
  parentId: any;
}) {
  const router = useRouter();
  const [name, setName] = useState("");

  const createPost = api.post.createReply.useMutation({
    onSuccess: () => {
      router.refresh();
      setName("");
    },
  });
  console.log(postId, parentId);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createPost.mutate({ name, postId, parentId });
      }}
      className="flex w-full flex-col gap-2"
    >
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        name="tweet"
        id="tweet"
        placeholder="Tweet your reply"
        className=" w-full rounded-md bg-[#F2F2F2] p-2  "
      />

      <button
        type="submit"
        hidden
        className="h-[32px] w-[81px] rounded-[4px] bg-[#2F80ED] text-sm text-white"
      >
        Tweet
      </button>
    </form>
  );
}
