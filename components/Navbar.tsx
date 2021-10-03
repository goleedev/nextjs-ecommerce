import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';

import { ReducerType } from 'state/cart.slice';
import ProductType from 'types/product-type';
import logo from 'assets/icon/logo.svg';
import favoriteIcon from 'assets/icon/Heart.svg';
import cartIcon from 'assets/icon/Cart.svg';
import styles from 'styles/Navbar.module.css';

const Navbar = () => {
  const cart = useSelector<ReducerType, ProductType[]>(
    (state: any) => state.cart
  );

  const getItemsCount = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + (item.quantity ?? 0),
      0
    );
  };

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a>
          <Image src={logo} alt={'logo'} className={styles.logo} />
        </a>
      </Link>
      <ul className={styles.links}>
        <li className={styles.navlink}>
          <Link href="/new-releases">New Releases</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/men">Men</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/women">Women</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/kids">Kids</Link>
        </li>
      </ul>
      <ul className={styles.icons}>
        <li className={styles.navlink}>
          <Image src={favoriteIcon} alt={'favorite'} width={24} height={24} />
        </li>
        <li className={styles.navlink}>
          <Link href="/cart">
            <span>
              <Image src={cartIcon} alt={'cart'} width={24} height={24} /> (
              {getItemsCount()})
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
