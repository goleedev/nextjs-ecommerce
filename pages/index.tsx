import CategoryCard from 'components/CategoryCard'
import styles from 'styles/Home.module.css'

const HomePage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.spanningCol}>
        <CategoryCard image="https://imgur.com/uKQqsuA.png" name="New Releases" description='2021년 신상품'/>
      </div>
      <div className={styles.box2}>
        <CategoryCard image="https://imgur.com/uKQqsuA.png" name="Men" description='2021년 신상품' />
      </div>
      <div className={styles.box3}>
        <CategoryCard image="https://imgur.com/uKQqsuA.png" name="Women" description='2021년 신상품' />
      </div>
      <div className={styles.box4}>
        <CategoryCard image="https://imgur.com/uKQqsuA.png" name="Kids" description='2021년 신상품' />
      </div>
      <div className={styles.box5}>
        <CategoryCard image="https://imgur.com/uKQqsuA.png" name="Sale" description='2021년 신상품' />
      </div>
      <div className={styles.spanningRow}>
        <CategoryCard image="https://imgur.com/uKQqsuA.png" name="Upcoming" description='준비 중' />
      </div>
    </main>
  )
}

export default HomePage
