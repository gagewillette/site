import React from "react";
import { Post } from "../interface/post";

interface PostProps {
  post: Post;
}

export const PostComponent: React.FC<PostProps> = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>
        By {post.author} on {post.date.toDateString()}
      </p>
      <p>{post.content}</p>
    </div>
  );
};
