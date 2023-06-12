import Link from "next/link";

export default function AllProductsBreadCrumb({ productCategory }) {
  return (
    <nav className="d-flex mb-2">
      <h6 className="mb-0">
        <Link href="/" className="text-white-50">
          Home
        </Link>
        <span className="text-white-50 mx-2"> &gt; </span>
        <Link href="/category" className="text-white-50">
          Categories
        </Link>
        <span className="text-white-50 mx-2"> &gt; </span>
        <Link href="/products?category=all products" className="text-white">
          {productCategory[0].toUpperCase() + productCategory.slice(1)}
        </Link>
      </h6>
    </nav>
  );
}
