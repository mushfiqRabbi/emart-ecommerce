import { useRouter } from "next/navigation";
import { useProducts } from "../contexts/ProductsContext";

export default function Category({ category }) {
  const router = useRouter();
  const { setCategory } = useProducts();

  let icon = "";
  switch (category) {
    case "automotive":
      icon = "car";
      break;
    case "fragrances":
      icon = "spray-can";
      break;
    case "furniture":
      icon = "chair";
      break;
    case "groceries":
      icon = "cart-shopping";
      break;
    case "home-decoration":
      icon = "snowman";
      break;
    case "laptops":
      icon = "laptop";
      break;
    case "lighting":
      icon = "lightbulb";
      break;
    case "mens-shirts":
      icon = "shirt";
      break;
    case "mens-shoes":
      icon = "shoe-prints";
      break;
    case "mens-watches":
      icon = "clock";
      break;
    case "motorcycle":
      icon = "motorcycle";
      break;
    case "skincare":
      icon = "hand-dots";
      break;
    case "smartphones":
      icon = "mobile";
      break;
    case "sunglasses":
      icon = "glasses";
      break;
    case "tops":
      icon = "person-dress";
      break;
    case "womens-bags":
      icon = "bag-shopping";
      break;
    case "womens-dresses":
      icon = "person-dress";
      break;
    case "womens-jewellery":
      icon = "gem";
      break;
    case "womens-shoes":
      icon = "shoe-prints";
      break;
    case "womens-watches":
      icon = "clock";
      break;

    default:
      icon = "couch";
      break;
  }

  const handleClick = () => {
    router.push("/products");
    setCategory(category);
  };
  return (
    <div className="col-3 col-md-2">
      <a
        className="text-center d-flex flex-column justify-content-center"
        onClick={handleClick}
      >
        <button
          type="button"
          className="btn btn-outline-secondary mx-auto p-3 mb-2"
          data-mdb-ripple-color="dark"
        >
          <i className={`fas fa-${icon} fa-xl fa-fw`} />
        </button>
        <div className="text-dark">
          {category[0].toUpperCase() + category.slice(1)}
        </div>
      </a>
    </div>
  );
}
