import Heading from "../../ui/Heading";

function Stat({ title, value }) {
  return (
    <div className="flex flex-col justify-center items-center gap-1 border border-slate-300 rounded bg-white p-4">
      <Heading as="h3">{title}</Heading>

      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
}

export default Stat;
