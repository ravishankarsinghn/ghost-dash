import { useEffect, useState } from "react";
import Card from "../../ui/Card";
import LinkListItem from "../../ui/LinkListItem";
import { getPosts } from "../../services/apiPosts";

const TableRow = function ({ label, value }) {
  return (
    <tr className="border-b border-slate-300">
      <th className="text-left border-r border-slate-300 px-2">{label}</th>
      <td className="text-center px-2 ">{value}</td>
    </tr>
  );
};

function LinksInfoLayout() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const data = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };
    data();
  }, []);

  return (
    <div
      className="
    grid grid-cols-[250px_1fr_1fr] grid-rows-1 gap-6 "
    >
      <Card cardTitle="" extraStyle="place-self-start justify-self-stretch">
        <table className="w-full border-collapse border border-slate-300">
          <tbody>
            <TableRow label="Total links" value="8" />
            <TableRow label="Broken internal links" value="8" />
            <TableRow label="Broken external links" value="8" />
          </tbody>
        </table>
      </Card>

      <Card cardTitle="Broken internal links">
        <LinkListItem linkTitle="this is not a real link" />
        <LinkListItem linkTitle="this is not a real link" />
        <LinkListItem linkTitle="this is not a real link" />
        <LinkListItem linkTitle="this is not a real link" />
      </Card>
      <Card cardTitle="Broken external links">
        <LinkListItem linkTitle="this is not a real link" />
        <LinkListItem linkTitle="this is not a real link" />
        <LinkListItem linkTitle="this is not a real link" />
        <LinkListItem linkTitle="this is not a real link" />
      </Card>
    </div>
  );
}

export default LinksInfoLayout;
