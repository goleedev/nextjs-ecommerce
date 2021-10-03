import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';

import { removeFromCart } from 'state/cart.slice';
import { ReducerType } from 'state/cart.slice';
import ProductType from 'types/product-type';
import trashIcon from '../assets/icon/Trash.svg';
import styles from 'styles/CartPage.module.css';

const CartPage = () => {
  const cart = useSelector<ReducerType, ProductType[]>(
    (state: any) => state.cart
  );
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + (item.quantity ?? 0) * item.price,
      0
    );
  };

  return (
    <div className={styles.container}>
      {cart.length === 0 ? (
        <h1>😢 장바구니가 비었습니다</h1>
      ) : (
        <>
          <div className={styles.header}>
            <h1>홍길동님의 장바구니</h1>
          </div>
          <div className={styles.body}>
            <div className={styles.cartItems}>
              {cart.map((item: ProductType, index: number) => (
                <div key={index} className={styles.item}>
                  <div className={styles.image}>
                    <Image
                      src={item.image ?? ''}
                      alt={'product-image'}
                      width={'100%'}
                      height={'100%'}
                    />
                  </div>
                  <div className={styles.detail}>
                    <p>{item.product}</p>
                    <p>
                      <b>{item.freeShipping ? '무료배송' : '유료배송'}</b>{' '}
                      (업제직배송)
                    </p>
                    <p>
                      가격 <b>{item.price.toLocaleString('ko-KR')}</b>원 (할인
                      50% 적용)
                    </p>
                    <p>
                      총 <b>{item.quantity}</b> 개
                    </p>
                  </div>
                  <div className={styles.buttons}>
                    <button onClick={() => dispatch(removeFromCart(item))}>
                      <Image
                        src={trashIcon}
                        alt={'delete'}
                        width={24}
                        height={24}
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.total}>
              <div className={styles.totalContent}>
                <p>
                  <span>총 상품금액</span>{' '}
                  <span>{getTotalPrice().toLocaleString('ko-KR')}원</span>
                </p>
                <p>
                  <span>총 배송비</span> <span>0원</span>
                </p>
                <p>
                  <span>총 할인금액</span>{' '}
                  <span>{getTotalPrice().toLocaleString('ko-KR')}원</span>
                </p>
                <p>
                  <span>결제금액</span>{' '}
                  <span>{getTotalPrice().toLocaleString('ko-KR')}원</span>
                </p>
              </div>
              <button>{cart.length}개 상품 구매하기</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
