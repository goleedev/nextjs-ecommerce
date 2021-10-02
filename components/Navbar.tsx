import Link from 'next/link'
import Image from 'next/image'
import { useSelector } from 'react-redux'

import { ReducerType } from 'state/cart.slice'
import ProductType from 'types/product-type'
import logo from 'assets/icon/logo.svg'
import favoriteIcon from 'assets/icon/Heart.svg'
import cartIcon from 'assets/icon/Cart.svg'
import styles from 'styles/Navbar.module.css'

const Navbar = () => {
  const cart = useSelector<ReducerType, ProductType[]>((state: any) => state.cart)

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + (item.quantity ?? 0), 0)
  }

  return (
    <nav className={styles.navbar}>
      <h6 className={styles.logo}>
        <Link href="/">
          <Image src={logo} alt={'logo'} />
        </Link>
      </h6>
      <ul className={styles.links}>
        <li className={styles.navlink}>
          <Link href="/new-releases">New Releases</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/category/men">Men</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/category/women">Women</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/category/kids">Kids</Link>
        </li>
      </ul>
      <ul className={styles.icons}>
        <li className={styles.navlink}>
          <Image src={favoriteIcon} alt={'favorite'} width={24} height={24} />
        </li>
        <li className={styles.navlink}>
          <Link href="/cart">
            <span>
              <Image src={cartIcon} alt={'cart'} width={24} height={24}/>{' '}({getItemsCount()})
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
