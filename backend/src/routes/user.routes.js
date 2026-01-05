import express from "express";
import {
  fetchUsers,
  addUser,
  editUser,
  removeUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", fetchUsers);
router.post("/", addUser);
router.put("/:id", editUser);
router.delete("/:id", removeUser);

export default router;
