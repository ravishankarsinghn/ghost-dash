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
    post: 24,
  },
  {
    name: "Feb",
    post: 20,
  },
  {
    name: "Mar",
    post: 0,
  },
  {
    name: "Apr",
    post: 12,
  },
  {
    name: "May",
    post: 9,
  },
  {
    name: "Jun",
    post: 0,
  },
  {
    name: "Jul",
    post: 21,
  },
  {
    name: "Aug",
    post: 5,
  },
  {
    name: "Sep",
    post: 8,
  },
  {
    name: "Oct",
    post: 6,
  },
  {
    name: "Nov",
    post: 14,
  },
  {
    name: "Dec",
    post: 3,
  },
];

const monthName = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function PostsChart({ data }) {
  const chartData = monthName.map((name) => {
    return { name: name, post: 0 };
  });

  /*
  SORRY, I tried to calculate the value for chart, I am unable to solve this.
  */

  return (
    <div className="col-start-3 col-span-2 border border-slate-300 rounded bg-white py-8 px-2 flex flex-col gap-6 h-min-[350px]">
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
          <Bar dataKey="post" fill="#125c45" />
        </BarChart>
      </ResponsiveContainer>
      <p>
        This is a fake data. I am unable to create dynamic data for this chart
        from post data.
      </p>
    </div>
  );
}

export default PostsChart;
