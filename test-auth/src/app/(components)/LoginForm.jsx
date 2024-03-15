"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const rest = await signIn("credentials", {
        name,
        password,
        redirect: false,
      });

      router.replace("userinfo");
    } catch (ex) {}
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label htmlFor="passwordInput">Password:</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
