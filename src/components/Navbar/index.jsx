import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";
import UserDashboard from "./UserDashboard";
import { authUserSession } from "@/libs/auth-libs";

const Navbar = async () => {
  const user = await authUserSession();

  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row flex-col gap-2 justify-between p-4 items-center">
        <Link
          href={"/"}
          className="font-bold text-white hover:text-color-primary text-2xl hover:border-b-2 transition-all"
        >
          Afganime
        </Link>
        <div className="flex justify-center items-center gap-2">
          {user ? null : <UserActionButton />}
          <InputSearch />
          <UserDashboard />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
