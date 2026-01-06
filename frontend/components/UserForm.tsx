"use client";
import { useState } from "react";

export default function UserForm({ onSubmit }: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ name, email });
        setName("");
        setEmail("");
      }}
      className="flex gap-2 mb-4"
    >
      <input
        className="border px-2 py-1"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="border px-2 py-1"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button className="bg-blue-600 text-white px-3 rounded">
        Add
      </button>
    </form>
  );
}
