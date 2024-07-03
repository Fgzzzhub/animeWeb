"use client";

import { UserCircle } from "@phosphor-icons/react";
import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";

const UserDashboard = async () => {
  const user = await authUserSession();

  return (
    <div>
      {user ? (
        <Link href="users/dashboard">
          <UserCircle
            size={32}
            className="hover:text-color-primary transition-all"
          />
        </Link>
      ) : null}
    </div>
  );
};

export default UserDashboard;
