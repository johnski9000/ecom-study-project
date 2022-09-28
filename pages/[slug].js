import { useRouter } from "next/router";
import { useContext } from "react";
import Layout from "../components/Layout";
import data from "../utils/data";
import { Store } from "../utils/store";

const Product = () => {
  const { state, dispatch } = useContext(Store);
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);

    const quantity = existItem ? (existItem.quantity + 1) : 1;
    if (product.countInStock < quantity) {
      alert("Product out of stock");
      return;
    } else {
            dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    }
  };

  if (!product) {
    return <Layout>loading...</Layout>;
  }

  return (
    <Layout>
      <main className="main-element">
        <img src={product.image} />
        <button onClick={addToCartHandler}>Add to cart</button>
      </main>
    </Layout>
  );
};

export default Product;
