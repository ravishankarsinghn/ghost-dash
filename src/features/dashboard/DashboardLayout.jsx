import { useEffect, useState } from "react";
import PostsChart from "./PostsChart";
import RecentPosts from "./RecentPosts";
import Stats from "./Stats";
import {
  getAuthors,
  getPages,
  getPosts,
  getTags,
} from "../../services/apiPosts";

function DashboardLayout() {
  const [posts, setPosts] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [totalTags, setTotalTags] = useState(0);
  const [totalAuthors, setTotalAuthors] = useState(0);

  useEffect(() => {
    const data = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };
    data();
  }, []);

  useEffect(() => {
    const data = async () => {
      const posts = await getPosts(5);

      setRecentPosts(posts);
    };
    data();
  }, []);

  useEffect(() => {
    const data = async () => {
      const pages = await getPages();
      setTotalPages(pages.length);
    };
    data();
  }, []);

  useEffect(() => {
    const data = async () => {
      const authors = await getAuthors();
      setTotalAuthors(authors.length);
    };
    data();
  }, []);

  useEffect(() => {
    const data = async () => {
      const tags = await getTags();
      setTotalTags(tags.length);
    };
    data();
  }, []);

  return (
    <div
      className="
    grid grid-cols-4 grid-rows-[auto_auto] gap-6"
    >
      <Stats
        numPosts={posts.length}
        numTags={totalTags}
        numAuthors={totalAuthors}
        numPages={totalPages}
      />
      <RecentPosts posts={recentPosts} />
      <PostsChart data={posts} />
    </div>
  );
}

export default DashboardLayout;
