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
  const brands = await prisma.products.groupBy({
    by: ["brand"],
    orderBy: {
      brand: "asc",
    },
    _count: true,
  });
  // console.log(brands.length);
  const categoriesCount = categories.length;
  const brandsCount = brands.length;
  // console.log(categoriesCount);
  return NextResponse.json({
    products,
    productsCount,
    categories,
    categoriesCount,
    brands,
    brandsCount,
  });
}
