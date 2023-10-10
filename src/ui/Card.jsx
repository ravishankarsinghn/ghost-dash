import Heading from "./Heading";

function Card({ children, cardTitle, extraStyle }) {
  return (
    <div
      className={`border border-slate-300 rounded bg-white 
    py-8 px-4 flex flex-col gap-4 ${extraStyle ? extraStyle : ""}`}
    >
      {cardTitle && <Heading as="h3">{cardTitle}</Heading>}
      <div>{children}</div>
    </div>
  );
}

export default Card;
