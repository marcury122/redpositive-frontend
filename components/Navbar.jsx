import Link from "next/link";

export const Navbar = () => {

  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        CRUD
      </Link>
      <Link className="bg-white p-2 rounded-3xl" href={"/addData"}>
        ADD New Data
      </Link>
    </nav>
  );
};
