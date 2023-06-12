import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route.ts";
import prisma from "../../../../lib/db.js";

export async function POST(request) {
  const user = (await getServerSession(authOptions)).user;
  const reqBody = await request.json();
  let cart;
  cart = await prisma.carts.findUnique({
    where: {
      email: user.email,
    },
  });
  // console.log(cart);
  const updatedItems = cart.items.map((product) => {
    if (product.productId === reqBody.productId) {
      return {
        ...product,
        quantity: Number(reqBody.quantity),
      };
    } else {
      return product;
    }
  });
  cart = await prisma.carts.update({
    where: {
      email: user.email,
    },
    data: {
      items: updatedItems,
    },
  });
  // console.log(cart);
  return NextResponse.json(cart);
}
