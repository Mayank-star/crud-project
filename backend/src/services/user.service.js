import db from "../config/db.js";

export const getUsers = async () => {
  const [rows] = await db.query("SELECT * FROM users");
  return rows;
};

export const createUser = async (data) => {
  const { name, email } = data;
  const [result] = await db.query(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [name, email]
  );
  return result.insertId;
};

export const updateUser = async (id, data) => {
  const { name, email } = data;
  await db.query(
    "UPDATE users SET name=?, email=? WHERE id=?",
    [name, email, id]
  );
};

export const deleteUser = async (id) => {
  await db.query("DELETE FROM users WHERE id=?", [id]);
};
