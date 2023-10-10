import { useEffect, useState } from "react";
import Card from "../../ui/Card";
import LinkListItem from "../../ui/LinkListItem";
import { getPosts } from "../../services/apiPosts";

const getTextContent = (html) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  const text = div.textContent || "";
  return text;
};

function PostInfoLayout() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const data = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };
    data();
  }, []);

  console.log(posts);

  const withoutMeta = posts.filter((post) => post.meta_description === null);

  const logMetaDescriptionPost = posts.filter((post) => {
    return post.meta_description?.length > 160;
  });

  const withoutFeatureImage = posts.filter(
    (post) => post.feature_image === null
  );

  const shortPosts = posts.filter((post) => {
    const text = getTextContent(post.html);
    return text.split(" ").length < 250;
  });

  const tooLongPosts = posts.filter((post) => {
    const text = getTextContent(post.html);
    return text.split(" ").length > 1500;
  });

  const tooLongURL = posts.filter((post) => post.url.length > 100);

  return (
    <div
      className="
    grid grid-cols-3 grid-rows-[auto_auto] gap-6"
    >
      <Card cardTitle="Without meta description">
        {withoutMeta.map((post) => (
          <LinkListItem linkTitle={post.title} url={post.url} key={post.id} />
        ))}
      </Card>

      <Card cardTitle="Without featured image">
        {withoutFeatureImage.length > 0 ? (
          withoutFeatureImage.map((post) => (
            <LinkListItem linkTitle={post.title} url={post.url} key={post.id} />
          ))
        ) : (
          <p>No posts found without featured image</p>
        )}
      </Card>

      <Card cardTitle="Too short posts, below 250 word">
        {shortPosts.length > 0 ? (
          shortPosts.map((post) => (
            <LinkListItem linkTitle={post.title} url={post.url} key={post.id} />
          ))
        ) : (
          <p>No posts found below 250 words</p>
        )}
      </Card>

      <Card cardTitle="Too long meta description">
        {logMetaDescriptionPost.length > 0 ? (
          logMetaDescriptionPost.map((post) => (
            <LinkListItem linkTitle={post.title} url={post.url} key={post.id} />
          ))
        ) : (
          <p>No posts found with more than 160 chars meta description</p>
        )}
      </Card>

      <Card cardTitle="Too long URL, more than 100 chars">
        {tooLongURL.length > 0 ? (
          tooLongURL.map((post) => (
            <LinkListItem linkTitle={post.title} url={post.url} key={post.id} />
          ))
        ) : (
          <p>No post's URL found with more than 100 chars long.</p>
        )}
      </Card>

      <Card cardTitle="Too long posts, more than 1500 words">
        {tooLongPosts.length > 0 ? (
          tooLongPosts.map((post) => (
            <LinkListItem linkTitle={post.title} url={post.url} key={post.id} />
          ))
        ) : (
          <p>No post found with more than 1500 words.</p>
        )}
      </Card>
    </div>
  );
}

export default PostInfoLayout;
