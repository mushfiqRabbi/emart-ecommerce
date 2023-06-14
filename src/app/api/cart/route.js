import { NextResponse } from "next/server";
import prisma from "../../../../lib/db";

export async function POST(request) {
  const user = await request.json();
  const cart = await prisma.carts.findUnique({
    where: {
      email: user.email,
    },
  });
  let cartItems;
  if (cart) {
    cartItems = cart.items;
  } else {
    cartItems = [];
  }

  return NextResponse.json(cartItems);
}
