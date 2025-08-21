import { prisma } from "config/client";
import { ACCOUNT_TYPE } from "config/constant";
import bcrypt from "bcrypt";
const saltRounds = 10;
const hashPassword = async (plainText: string) => {
  return await bcrypt.hash(plainText, saltRounds);
};
const handleCreateUser = async (
  fullName: string,
  email: string,
  address: string,
  phone: string,
  avatar: string
) => {
  const defaultPassword = await hashPassword("123456");
  const user = await prisma.user.create({
    data: {
      fullName: fullName,
      username: email,
      address: address,
      password: defaultPassword,
      accountType: ACCOUNT_TYPE.SYSTEM,
      phone: phone,
      avatar: avatar,
    },
  });
  return user;
};
const getAllUser = async () => {
  const users = await prisma.user.findMany();
  return users;
};
const getAllRole = async () => {
  const roles = await prisma.role.findMany();
  return roles;
};
const handleDeleteUser = async (id: string) => {
  const user = await prisma.user.delete({
    where: { id: +id },
  });
  return user;
};
const handleViewUser = async (id: string) => {
  const user = await prisma.user.findUnique({ where: { id: +id } });
  return user;
};
const handleUpdateUser = async (
  id: string,
  fullName: string,
  email: string,
  address: string
) => {
  const updatedUser = await prisma.user.update({
    where: { id: +id },
    data: {
      fullName: fullName,
      username: email,
      address: address,
      password: "",
      accountType: "",
    },
  });
  return updatedUser;
};
export {
  handleCreateUser,
  getAllUser,
  handleDeleteUser,
  handleViewUser,
  handleUpdateUser,
  getAllRole,
  hashPassword,
};
