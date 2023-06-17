import { NextResponse } from "next/server";
import prisma from "../../../../lib/db";

export async function POST(request) {
  const reqBody = await request.json();
  let cart = await prisma.carts.findUnique({
    where: {
      email: reqBody.user.email,
    },
  });
  if (!cart) {
    cart = await prisma.carts.create({
      data: {
        email: reqBody.user.email,
        items: [
          {
            productId: reqBody.productId,
            quantity: reqBody.quantity,
          },
        ],
      },
    });
  } else if (cart) {
    cart = await prisma.carts.findFirst({
      where: {
        AND: [
          {
            email: {
              equals: reqBody.user.email,
            },
          },
          {
            items: {
              some: {
                productId: reqBody.productId,
              },
            },
          },
        ],
      },
    });
    if (!cart) {
      cart = await prisma.carts.update({
        where: { email: reqBody.user.email },
        data: {
          items: {
            push: [
              {
                productId: reqBody.productId,
                quantity: reqBody.quantity,
              },
            ],
          },
        },
      });
    } else if (cart) {
      const cartItems = cart.items.map((product) => {
        if (product.productId === reqBody.productId) {
          return {
            ...product,
            quantity: product.quantity + reqBody.quantity,
          };
        } else return product;
      });
      cart = await prisma.carts.update({
        where: { email: reqBody.user.email },
        data: {
          items: {
            set: cartItems,
          },
        },
      });
    }
  }
  return NextResponse.json(cart.items);
}
