import { Post as PostType } from "../feed.types";
import { ReactComponent as HeartBlack } from "../assets/heart-black.svg";
import { ReactComponent as HeartRed } from "../assets/heart-red.svg";

import "./Post.css";
import { useState } from "react";

type PostProps = {
  post: PostType;
};

export function Post({ post }: PostProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="post">
      <div className="post-thumbnail">
        <img
          src={`https://picsum.photos/id/${post.userId}/200/300`}
          alt="thumbnail"
        />
      </div>

      <div>
        <b>{post.title}</b>
        <p>{post.body}</p>
      </div>

      <button className="post-like" onClick={() => setIsLiked((prev) => !prev)}>
        {isLiked ? <HeartRed /> : <HeartBlack />}
        <span>{isLiked ? "Liked" : "Like"}</span>
      </button>
    </div>
  );
}
