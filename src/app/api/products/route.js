import { NextResponse } from "next/server";
import prisma from "../../../../lib/db";

export async function GET(request) {
  const products = await prisma.products.findMany();
  const productsCount = await prisma.products.count();
  const categories = await prisma.products.groupBy({
    by: ["category"],
    orderBy: {
      category: "asc",
    },
  });
  const categoriesCount = categories.length;
  // console.log(categoriesCount);
  return NextResponse.json({
    products,
    productsCount,
    categories,
    categoriesCount,
  });
}
