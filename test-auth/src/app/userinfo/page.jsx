import React from "react";
import { signOut } from "next-auth/react";
import UserInfo from "../(components)/UserInfo";
const page = () => {
  return <UserInfo />;
};

export default page;
