import CartItem from "../components/CartItem";
import prisma from "../../lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../app/api/auth/[...nextauth]/route";

export default async function CartItems() {
  const session = await getServerSession(authOptions);
  // console.log(session.user);
  const cart = await prisma.carts.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (cart?.items?.length) {
    return cart.items.map((product) => {
      return (
        <CartItem
          key={product.productId}
          productId={product.productId}
          quantity={product.quantity}
        />
      );
    });
  } else {
    return <h1>no items</h1>;
  }
}
