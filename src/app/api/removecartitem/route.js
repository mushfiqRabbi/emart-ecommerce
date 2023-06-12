import { NextResponse } from "next/server";
import prisma from "../../../../lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route.ts";

export async function POST(request) {
  // console.log("hit");
  let cart;
  const user = (await getServerSession(authOptions)).user;
  // console.log(user);
  const reqBody = await request.json();
  cart = await prisma.carts.findUnique({
    where: {
      email: user.email,
    },
  });
  const newCartItems = cart.items.filter(
    (product) => product.productId !== reqBody.productId
  );
  // console.log(newCartItems);
  cart = await prisma.carts.update({
    where: {
      email: user.email,
    },
    data: {
      items: newCartItems,
    },
  });

  // console.log(cart);
  return NextResponse.json(cart.items);
}
