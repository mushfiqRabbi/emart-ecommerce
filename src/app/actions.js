"use server";
import prisma from "../../lib/db";
import bcrypt from "bcrypt";

export async function registerUser(data) {
  let response;
  const user = await prisma.users.findFirst({
    where: {
      email: data.email,
    },
  });

  if (user) {
    response = {
      type: "error",
      message: "user with similar email already exits.",
    };
  } else {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    try {
      await prisma.users.create({
        data: {
          name: data.name,
          email: data.email,
          hashedPassword: hashedPassword,
        },
      });
      response = {
        type: "success",
        message: "user created successfully.",
      };
    } catch (err) {
      response = {
        type: "error",
        message: err.message,
      };
    }
  }

  return response;
}
