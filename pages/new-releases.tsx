import ProductCard from 'components/ProductCard';
import { getProducts } from 'pages/api/products';
import ProductType from 'types/product-type';
import styles from 'styles/NewReleasesPage.module.css';

interface INewReleasesPage {
  products: ProductType[];
}

const NewReleasesPage = ({ products }: INewReleasesPage) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All Results</h1>
      <div className={styles.cards}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default NewReleasesPage;

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}
