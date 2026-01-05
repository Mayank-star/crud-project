import * as userService from "../services/user.service.js";

export const fetchUsers = async (req, res) => {
  const users = await userService.getUsers();
  res.json(users);
};

export const addUser = async (req, res) => {
  const id = await userService.createUser(req.body);
  res.status(201).json({ id });
};

export const editUser = async (req, res) => {
  await userService.updateUser(req.params.id, req.body);
  res.json({ message: "User updated" });
};

export const removeUser = async (req, res) => {
  await userService.deleteUser(req.params.id);
  res.json({ message: "User deleted" });
};
