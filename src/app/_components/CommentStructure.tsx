import { CiHeart } from "react-icons/ci";
import { CreateReply } from "./CreateReply";

export const CommentStructure = ({
  com,
  handleAdd,
  replyTo,
  parentPost,
}: any) => {
  return (
    <div key={com.id} className="flex flex-col">
      <div className="mt-7 flex gap-3">
        <img src="/pfp.jpg" className="h-10 rounded-lg" alt="" />
        <div>
          <div className="bg-[#FAFAFA] p-4 text-[#4F4F4F]">
            <div className=" flex items-center gap-4">
              <h3 className="font-semibold">User Name</h3>
              <p className=" text-xs text-[#BDBDBD]">24 agust at 20:43</p>
            </div>
            <p>{com.name}</p>
          </div>

          <span className=" flex gap-4">
            <p className="flex items-center gap-2">
              <CiHeart /> Like
            </p>
            <p className="text-[#BDBDBD]">12k Likes</p>
            <p onClick={() => handleAdd(com.id)}>reply</p>
          </span>

          {com.replies?.map((r: any) => (
            <div key={r.id} className="ml-5">
              <CommentStructure
                com={r}
                handleAdd={handleAdd}
                replyTo={replyTo}
                parentPost={parentPost}
              />
            </div>
          ))}
        </div>
      </div>
      {replyTo === com.id && (
        <CreateReply postId={parentPost} parentId={com.id} />
      )}
    </div>
  );
};
