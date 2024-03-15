"use client";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
const UserInfo = () => {
  const { data: session } = useSession();
  return (
    <div>
      <p>{session?.user?.name}</p>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};

export default UserInfo;
