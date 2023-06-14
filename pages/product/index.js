// pages/product/index.js

// pages/product/index.js

import { useEffect } from "react";
import { useRouter } from "next/router";
import { foodProducts } from "../api/products";

const defaultCategory = Object.values(foodProducts)[0].category;

const ProductIndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(`/product/${defaultCategory}`);
  }, [router]);

  return null;
};

export default ProductIndexPage;
