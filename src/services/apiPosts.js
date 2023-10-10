import GhostContentAPI from "@tryghost/content-api";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

// Ghost content API
const api = new GhostContentAPI({
  url: API_URL,
  key: API_KEY,
  version: "v5.0",
});

export const getPosts = async function (limits) {
  let fetch;
  if (limits)
    fetch = api.posts.browse({ order: "published_at DESC", limit: limits });
  else fetch = api.posts.browse({ limit: "all" });

  try {
    const posts = await fetch;
    return posts;
  } catch (error) {
    console.error(error);
  }
};

export const getPost = async function (id) {
  try {
    const post = await api.posts.read({ id });

    return post;
  } catch (error) {
    console.log("Author", error);
  }
};

export const getAuthors = async function () {
  try {
    const authors = await api.authors.browse();

    return authors;
  } catch (error) {
    console.log("Author", error);
  }
};

export const getPages = async function () {
  try {
    const pages = await api.pages.browse();

    return pages;
  } catch (error) {
    console.log(error);
  }
};

export const getTags = async function () {
  try {
    const tags = await api.tags.browse();

    return tags;
  } catch (error) {
    console.log(error);
  }
};
