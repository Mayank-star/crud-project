import * as userService from "../services/user.service.js";

export const fetchUsers = async (req, res) => {
  try {
    
    const users = await userService.getUsers();
    return res.status(200).json({
      status: "success",
      message: "Users fetched successfully",
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message || "Failed to fetch users",
    });
  }
};

export const addUser = async (req, res) => {
  try {
    if (!req.body.name || !req.body.email) {
      return res.status(400).json({
        status: "error",
        message: "Name and email required",
      });
    }
    const id = await userService.createUser(req.body);
    return res.status(201).json({
      status: "success",
      message: "User created successfully",
      data: { id },
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message || "Failed to create user",
    });
  }
};

export const editUser = async (req, res) => {
  try {
    if (!req.body.name || !req.body.email) {
      return res.status(400).json({
        status: "error",
        message: "Name and email required",
      });
    }
    await userService.updateUser(req.params.id, req.body);
    return res.status(200).json({
      status: "success",
      message: "User updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message || "Failed to update user",
    });
  }
};

export const removeUser = async (req, res) => {
  try {
    await userService.deleteUser(req.params.id);
    return res.status(200).json({
      status: "success",
      message: "User deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message || "Failed to delete user",
    });
  }
};
