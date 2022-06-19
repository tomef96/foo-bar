import { useQuery } from "react-query";
import { Post } from "./feed.types";

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    headers: { "content-type": "application/json" },
  });

  if (!response.ok) {
    throw new Error("Something went wrong when fetching posts.");
  }

  return response.json();
}

export function usePosts() {
  return useQuery<Post[]>("posts", getPosts, {
    select: (posts) => {
      const foo = posts.reduce<Post[]>((acc, post) => {
        if (acc.some((existingPost) => existingPost.userId === post.userId)) {
          return acc;
        }

        return [...acc, post];
      }, []);

      return foo;
    },
  });
}
