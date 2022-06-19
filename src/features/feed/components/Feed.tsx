import { Suspense, useState } from "react";
import { usePosts } from "../feed.queries";
import { Post } from "./Post";
import { ReactComponent as DownArrow } from "../assets/down-arrow.svg";
import "./Feed.css";

export function Feed() {
  const query = usePosts();

  const [postLimit, setPostLimit] = useState(3);

  return (
    <Suspense fallback="Loading feed...">
      <div className="feed">
        <h2 className="feed-title">
          <span style={{ color: "white" }}>Latest</span>{" "}
          <span style={{ color: "#444" }}>twyts</span>
        </h2>

        <div className="feed-posts">
          {query.data!.slice(0, postLimit).map((post) => (
            <Post key={`${post.userId}-${post.id}`} post={post} />
          ))}
        </div>

        {postLimit < query.data!.length && (
          <button
            className="feed-btn-more"
            onClick={() => setPostLimit((prev) => prev + 3)}
          >
            <DownArrow width={30} fill="#2C91B1" /> See more
          </button>
        )}
      </div>
    </Suspense>
  );
}
