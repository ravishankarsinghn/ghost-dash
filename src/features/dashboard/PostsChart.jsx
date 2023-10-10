import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Heading from "../../ui/Heading";

const fakeData = [
  {
    name: "Jan",
    amt: 2400,
  },
  {
    name: "Feb",
    amt: 2210,
  },
  {
    name: "Mar",
    amt: 2290,
  },
  {
    name: "Apr",
    amt: 2000,
  },
  {
    name: "May",
    amt: 2181,
  },
  {
    name: "Jun",
    amt: 2500,
  },
  {
    name: "Jul",
    amt: 2100,
  },
  {
    name: "Aug",
    amt: 2100,
  },
  {
    name: "Sep",
    amt: 2100,
  },
  {
    name: "Oct",
    amt: 2100,
  },
  {
    name: "Nov",
    amt: 2100,
  },
  {
    name: "Dec",
    amt: 2100,
  },
];

function PostsChart({ data }) {
  return (
    <div className="col-start-3 col-span-2 border border-slate-300 rounded bg-white py-8 px-2 flex flex-col gap-6">
      <div className="px-6">
        <Heading as="h2">Posts per month</Heading>
      </div>

      <ResponsiveContainer height="100%" width="100%">
        <BarChart width="100%" height={300} data={fakeData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="amt" fill="#125c45" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PostsChart;
