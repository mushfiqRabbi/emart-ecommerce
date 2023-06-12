import AllProducts from "../../components/AllProducts";
import AllProductsHeader from "../../components/AllProductsHeader";
import AllProductsPagination from "../../components/AllProductsPagination";
import AllProductsSidebar from "../../components/AllProductsSidebar";
import AllProductsBreadCrumb from "../../components/AllProductsBreadCrumb";
import prisma from "../../../lib/db";

export default async function Products({ searchParams }) {
  const productCategory = searchParams?.category || "all products";
  const pageNumber = Number(searchParams?.page) || 1;
  const productView = searchParams?.view || "grid";
  const categories = await prisma.products.groupBy({
    by: ["category"],
    orderBy: {
      category: "asc",
    },
  });
  const totalProductsNumber =
    productCategory === "all products"
      ? (await prisma.products.findMany()).length
      : (
          await prisma.products.findMany({
            where: { category: productCategory },
          })
        ).length;
  const totalPages = Math.ceil(totalProductsNumber / 10);

  const products =
    productCategory === "all products"
      ? await prisma.products.findMany({
          skip: (pageNumber - 1) * 10,
          take: 10,
        })
      : await prisma.products.findMany({
          where: {
            category: productCategory,
          },
          skip: (pageNumber - 1) * 10,
          take: 10,
        });
  return (
    <>
      {/* Heading */}
      <div className="bg-primary mb-4">
        <div className="container py-4">
          <h3 className="text-white mt-2">{productCategory.toUpperCase()}</h3>
          {/* Breadcrumb */}
          <AllProductsBreadCrumb productCategory={productCategory} />
          {/* Breadcrumb */}
        </div>
      </div>
      {/* Heading */}
      <>
        {/* sidebar + content */}
        <section className="">
          <div className="container">
            <div className="row">
              {/* sidebar */}
              <AllProductsSidebar
                categories={categories}
                productCategory={productCategory}
                productView={productView}
              />
              {/* sidebar */}
              {/* content */}
              <div className="col-lg-9">
                {/* AllProductsHeader */}
                <AllProductsHeader
                  totalProductsNumber={totalProductsNumber}
                  productCategory={productCategory}
                  pageNumber={pageNumber}
                  productView={productView}
                />
                {/* AllProductsHeader */}
                {/* products */}
                {productView === "grid" && (
                  <div className="row">
                    <AllProducts
                      products={products}
                      productView={productView}
                    />
                  </div>
                )}
                {productView !== "grid" && (
                  <AllProducts products={products} productView={productView} />
                )}
                {/* products */}
                <hr />
                {/* Pagination */}
                <AllProductsPagination
                  pageNumber={pageNumber}
                  productCategory={productCategory}
                  totalPages={totalPages}
                />
                {/* Pagination */}
              </div>
            </div>
          </div>
        </section>
        {/* sidebar + content */}
      </>
    </>
  );
}
