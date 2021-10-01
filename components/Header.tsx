import styles from 'styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.list}>
        <li>고객센터</li>
        <li>사이트맵</li>
        <li>로그인</li>
      </ul>
    </header>
  )
}

export default Header
