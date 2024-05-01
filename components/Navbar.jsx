import Link from "next/link";

export const Navbar = () => {

  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3 round-">
      <Link className="text-white font-bold" href={"/"}>
        CRUD
      </Link>
      {/* <Link className="bg-white p-2 rounded-3xl" href={"/addData"}>
        ADD New Data
      </Link> */}
      <Link href={"/addData"} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">ADD NEW DATA</Link>

    </nav>
  );
};
