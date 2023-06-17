"use client";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function WishList() {
  const router = useRouter();
  toast("Feature coming soon!", {
    icon: "🧩",
    position: "top-center",
  });
  router.replace("/");

  return <div>WishList</div>;
}
