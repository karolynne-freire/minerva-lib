import { UserModel } from "../models/userModel.js";

export const UserController = {
  async list(req, res) {
    const users = await UserModel.getAll();
    res.json(users);
  },

  async create(req, res) {
    const id = await UserModel.create(req.body);
    res.json({ id });
  }
};