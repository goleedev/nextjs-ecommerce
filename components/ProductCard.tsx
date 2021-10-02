import Image from 'next/image'
import { useDispatch } from 'react-redux'

import { addToCart } from 'state/cart.slice'
import ProductType from 'types/product-type'
import styles from 'styles/ProductCard.module.css'

interface IProductCard {
  product: ProductType
}

const ProductCard = ({ product }: IProductCard) => {
  const dispatch = useDispatch()

  return (
    <div>
      <Image src={product.image} height={300} width={220} />
      <h4 className={styles.title}>{product.product}</h4>
      <h5 className={styles.category}>{product.category}</h5>
      <p>$ {product.price}</p>
      <button onClick={() => dispatch(addToCart(product))} className={styles.button}>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
