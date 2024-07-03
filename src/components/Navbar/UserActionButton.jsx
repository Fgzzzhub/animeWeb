import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";

const UserActionButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionUrl = user
    ? `${process.env.BASE_URL}api/auth/signout`
    : `${process.env.BASE_URL}api/auth/signin`;

  return (
    <div>
      <Link
        href={actionUrl}
        className="hover:text-color-primary transition-all mr-2"
      >
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionButton;
