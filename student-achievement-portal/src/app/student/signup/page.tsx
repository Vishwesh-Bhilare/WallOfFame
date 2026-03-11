"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function StudentSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Signup successful!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-6 rounded shadow w-96 space-y-4">
        <h2 className="text-2xl font-bold">Student Signup</h2>

        <input
          className="border w-full p-2"
          placeholder="College Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="border w-full p-2"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={signup}
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}