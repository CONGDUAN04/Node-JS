import { Request, Response } from "express";
import {
  getAllUser,
  handleCreateUser,
  handleDeleteUser,
  handleUpdateUser,
  handleViewUser,
} from "services/user.service";
const getHomePage = async (req: Request, res: Response) => {
  //get user
  const users = await getAllUser();
  return res.render("home", { users: users });
};
const getCreateUserPage = (req: Request, res: Response) => {
  return res.render("create-user");
};
const postCreateUser = async (req: Request, res: Response) => {
  const { fullName, email, address } = req.body;
  //handle create user
  const user = await handleCreateUser(fullName, email, address);
  return res.redirect("/");
};
const postDeleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  await handleDeleteUser(id);
  return res.redirect("/");
};
const getViewUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await handleViewUser(id);
  return res.render("view-user.ejs", { id: id, user: user });
};
const postUpdateUser = async (req: Request, res: Response) => {
  const { id, fullName, email, address } = req.body;
  //update user by id
  const a = await handleUpdateUser(id, fullName, email, address);
  return res.redirect("/");
};
export {
  getHomePage,
  getCreateUserPage,
  postCreateUser,
  postDeleteUser,
  getViewUser,
  postUpdateUser,
};
