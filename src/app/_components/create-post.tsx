"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { BiWorld } from "react-icons/bi";
import { api } from "~/trpc/react";
import { userStore } from "../Store/userStore";
export function CreatePost() {
  const router = useRouter();
  const [postContent, setPostContent] = useState("");
  const [maxTextLength, setMaxTextLength] = useState<number>(200);
  const username = userStore((state) => state.username);
  const createPostMutation = api.post.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setPostContent("");
    },
  });

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createPostMutation.mutate({ content: postContent, name: username });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const maxTextLength = 200;
    const inputLength = e.target.value.length;

    if (inputLength <= maxTextLength) {
      setMaxTextLength(maxTextLength - inputLength);
      setPostContent(e.target.value);
    }
  };
  return (
    <form onSubmit={handleFormSubmit} className="flex w-full flex-col gap-2">
      <div className="flex w-full flex-col justify-between p-2">
        <textarea
          name="tweet"
          onChange={handleInputChange}
          value={postContent}
          id="tweet"
          placeholder="What's happening?"
          className="w-full"
        />
        <div className="flex justify-between">
          <ul className="flex items-center gap-3">
            <li>img</li>
            <li className="flex items-center text-[#2F80ED]">
              <BiWorld /> Everyone can reply
            </li>
          </ul>
          <p>{maxTextLength}</p>
          <button
            className="h-[32px] w-[81px] rounded-[4px] bg-[#2F80ED] text-sm text-white"
            disabled={createPostMutation.isLoading}
          >
            Tweet
          </button>
        </div>
      </div>
    </form>
  );
}
