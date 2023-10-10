function LinkListItem({ linkTitle, url }) {
  return (
    <a
      href={url}
      target="_blank"
      className=" flex gap-2 items-center font-poppins font-normal border-b last:border-0 border-slate-300 py-2 color-slate-200 hover:bg-slate-100"
    >
      <span>&#128279;</span> {linkTitle}
    </a>
  );
}

export default LinkListItem;
