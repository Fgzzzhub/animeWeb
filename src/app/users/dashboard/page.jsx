import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import UserActionButton from "@/components/Navbar/UserActionButton";

const Page = async () => {
  const user = await authUserSession();

  return (
    <div className="text-color-primary flex justify-center items-center flex-col">
      <h3 className="font-semibold text-center mt-20 text-xl">DASHBOARD</h3>
      <h5 className="text-center">Welcome, {user.name}</h5>
      <Image
        src={user.image}
        alt="..."
        width={250}
        height={250}
        className="w-56 my-3 rounded-full"
      />
      {user ? <UserActionButton /> : null}
    </div>
  );
};

export default Page;
