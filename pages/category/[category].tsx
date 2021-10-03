import { useRouter } from 'next/router';
import { NextPageContext } from 'next';

import { getProductsByCategory } from 'pages/api/products/[category]';
import ProductCard from 'components/ProductCard';
import ProductType from 'types/product-type';
import styles from 'styles/NewReleasesPage.module.css';

interface ICategoryPage {
  products: ProductType[];
}

const CategoryPage = ({ products }: ICategoryPage) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Results for {router.query.category}</h1>
      <div className={styles.cards}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

export async function getServerSideProps(ctx: NextPageContext) {
  const category = ctx.query.category;
  const products = await getProductsByCategory(category);
  return { props: { products } };
}
