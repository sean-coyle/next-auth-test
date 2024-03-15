"use client"; //need to use if using states
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SignupForm = () => {
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/userinfo");
      }
    } catch (ex) {
      console.log(ex);
    }
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
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
