import PostInfoLayout from "../features/posts/PostsInfoLayout";
import { getAuthors, getPages, getPosts, getTags } from "../services/apiPosts";
import Heading from "../ui/Heading";

import { useEffect } from "react";

function Posts() {
  useEffect(function () {
    getPosts();
    getPosts(5);
    getAuthors();
    getPages();
    getTags();
  }, []);

  return (
    <>
      <Heading as="h1">Post Details</Heading>
      <PostInfoLayout />
    </>
  );
}

export default Posts;
