"use client";
import { useState } from "react";
import { CommentStructure } from "./CommentStructure";

// interface Reply {
//   id: number;
//   name: string;
//   postId: number;
//   parentId: number | null;
//   createdAt: Date;
//   updatedAt: Date;
// }

// interface Comment extends Reply {
//   replies?: Reply[];
//   userName: string;
// }

type Props = {
  comment: any[];
  parentPostId: number;
};
export const TweetComment = ({ comment, parentPostId }: Props) => {
  const [replyTo, setReplyTo] = useState<number | null>(null);
  const handleAdd = (id: number) => {
    setReplyTo(id);
  };

  const topLevelComments = comment.filter((com) => com.parentId === null);

  return (
    <>
      {topLevelComments.map((com: any) => (
        <CommentStructure
          key={com.id}
          com={com}
          parentPost={parentPostId}
          handleAdd={handleAdd}
          replyTo={replyTo}
        />
      ))}
    </>
  );
};
