"use client";
import { useEffect, useState, useCallback } from "react";
import api from "@/lib/api";
import UserForm from "@/components/UserForm";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);

  const loadUsers = useCallback(async () => {
    const res = await api.get("/users");
    setUsers(res?.data?.data);
  }, []);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const addUser = async (data: Omit<User, "id">) => {
    await api.post("/users", data);
    loadUsers();
  };

  const deleteUser = async (id: number) => {
    await api.delete(`/users/${id}`);
    loadUsers();
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Users CRUD</h1>

      <UserForm onSubmit={addUser} />

      <ul className="space-y-2">
        {users?.map((u) => (
          <li
            key={u.id}
            className="flex justify-between items-center border p-2 rounded"
          >
            <span>
              {u.name} — {u.email}
            </span>
            <button
              onClick={() => deleteUser(u.id)}
              className="text-red-600 text-sm"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
