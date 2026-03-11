"use client";

import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

export default function AchievementForm() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("publication");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      title,
      type,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
      <Input
        placeholder="Achievement Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        className="border p-2 w-full rounded"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="publication">Publication</option>
        <option value="hackathon">Hackathon</option>
        <option value="patent">Patent</option>
        <option value="copyright">Copyright</option>
      </select>

      <textarea
        placeholder="Description"
        className="border p-2 w-full rounded"
      />

      <Button type="submit">Submit Achievement</Button>
    </form>
  );
}
