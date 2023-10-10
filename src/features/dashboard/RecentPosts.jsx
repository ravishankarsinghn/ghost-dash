import Heading from "../../ui/Heading";
import LinkListItem from "../../ui/LinkListItem";

function RecentPosts({ posts }) {
  return (
    <div className=" col-start-1 col-span-2 border border-slate-300 rounded bg-white p-8 flex flex-col gap-6">
      <Heading as="h2">Lates Posts</Heading>
      <div className="overflow-x-none">
        {posts.map((post) => (
          <LinkListItem linkTitle={post.title} key={post.id} url={post.url} />
        ))}
      </div>
    </div>
  );
}

export default RecentPosts;
