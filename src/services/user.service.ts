import { prisma } from "config/client";
const handleCreateUser = async (
  fullName: string,
  email: string,
  address: string
) => {
  const user = await prisma.user.create({
    data: {
      fullName: fullName,
      username: email,
      address: address,
      password: "",
      accountType: "",
    },
  });
  return user;
};
const getAllUser = async () => {
  const users = await prisma.user.findMany();
  return users;
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
};
