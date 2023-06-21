import { NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route.ts";
import prisma from "../../../../lib/db.js";

export async function POST(request) {
  const { email } = (await getServerSession(authOptions)).user;
  // console.log(email);
  const cartItems = (
    await prisma.carts.findUnique({
      where: {
        email: email,
      },
    })
  ).items;
  const products = await prisma.products.findMany();
  // console.log(products);
  const cartItemsWithProductDetails = cartItems.map((item) => {
    return {
      ...item,
      product: products.find((product) => product.id_ === item.productId),
    };
  });
  // console.log(cartItemsWithProductDetails);
  const lineItems = cartItemsWithProductDetails.map((p) => {
    return {
      price_data: {
        currency: "usd",
        unit_amount: Math.round(
          (p.product.price -
            (p.product.price * p.product.discountPercentage) / 100) *
            100
        ),
        product_data: {
          name: p.product.title,
          images: [p.product.thumbnail],
          description: p.product.description,
        },
      },
      quantity: p.quantity,
    };
  });
  // console.log(lineItems[0]);
  try {
    // console.log(lineItems);
    const stripeSession = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: process.env.BASE_URL,
      cancel_url: `${process.env.BASE_URL}/cart`,
    });

    return NextResponse.json({ url: stripeSession.url });
  } catch (e) {
    return NextResponse.json({ message: e.message });
  }
}
