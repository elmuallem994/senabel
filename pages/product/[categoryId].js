import Navbar from '../../components/Navbar';
import { foodProducts, sweetsProducts, cookProducts } from '../api/products';
import ProductDetails from '../../components/ProductDetails';

const products = [
  ...Object.values(foodProducts),
  ...Object.values(sweetsProducts),
  ...Object.values(cookProducts),
];

const ProductPage = ({ filteredProducts }) => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <div className="relative">
      <ProductDetails product={filteredProducts[0]} />
      <div className="gradient-15 z-0" />
    </div>
  </div>
);

export async function getStaticPaths() {
  const paths = products.map((product) => ({
    params: { categoryId: product.category },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { categoryId } = params;
  const result = products.filter((product) => product.category === categoryId);

  // If no products are found for the category, return a 404 page
  if (result.length === 0) {
    return { notFound: true };
  }

  return { props: { filteredProducts: result } };
}

export default ProductPage;
