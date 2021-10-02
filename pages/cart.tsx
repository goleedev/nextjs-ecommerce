import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'

import { removeFromCart } from 'state/cart.slice'
import { ReducerType } from 'state/cart.slice'
import ProductType from 'types/product-type'
import styles from 'styles/CartPage.module.css'

const CartPage = () => {
  const cart = useSelector<ReducerType, ProductType[]>((state: any) => state.cart)
  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return cart.reduce((accumulator, item) => accumulator + (item.quantity ?? 0) * item.price, 0)
  }

  return (
    <div className={styles.container}>
      {cart.length === 0 ? (
        <h1>😢 장바구니가 비었습니다</h1>
      ) : (
        <>
          <div className={styles.header}>
            <h1>홍길동님의 장바구니</h1>
          </div>
          {cart.map((item: ProductType, index: number) => (
            <div key={index} className={styles.body}>
              <div className={styles.image}>
                <Image src={item.image} height="90" width="65" />
              </div>
              <p>{item.product}</p>
              <p>$ {item.price}</p>
              <p>{item.quantity}</p>
              <div className={styles.buttons}>
                <button onClick={() => dispatch(removeFromCart(item.id))}>x</button>
              </div>
              <p>$ {(item.quantity ?? 0) * item.price}</p>
            </div>
          ))}
          <h2>Grand Total: $ {getTotalPrice()}</h2>
        </>
      )}
    </div>
  )
}

export default CartPage
