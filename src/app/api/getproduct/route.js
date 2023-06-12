import { NextResponse } from "next/server";
import prisma from "../../../../lib/db";

export async function POST(request) {
  const reqBody = await request.json();
  // console.log(reqBody);
  const product = await prisma.products.findUnique({
    where: {
      id_: reqBody.productId,
    },
  });
  // console.log(product);
  return NextResponse.json(product);
}
