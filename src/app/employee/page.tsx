import Link from "next/link";
import TableData from "../components/tabledata";
import Search from "../components/search";

const Home = async () => {
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <div className=" flex items-center justify-between gap-1 mb-5">
        <h1 className="text-4xl font-bold">
          Next.js 14 Search with Prisma PostgresSQL | Tailwindcss DaysieUI
        </h1>
      </div>
      <div className="overflow-x-auto">
        <div className="mb-2 w-full text-right">
          <Link href="/employee/create" className="btn btn-primary">
            Create
          </Link>
              </div>
              <Search/>
        <TableData />
      </div>
    </div>
  );
};

export default Home;
