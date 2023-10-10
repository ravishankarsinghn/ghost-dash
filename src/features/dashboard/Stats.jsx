import Stat from "./Stat";

function Stats({ numPosts, numAuthors, numTags, numPages }) {
  return (
    <>
      <Stat title="Total Posts" value={numPosts} />
      <Stat title="Total Pages" value={numPages} />
      <Stat title="Total Authors" value={numAuthors} />
      <Stat title="Total Tags" value={numTags} />
    </>
  );
}

export default Stats;
