import Link from 'next/link'
import Image from 'next/image'

import styles from 'styles/CategoryCard.module.css'

interface ICategoryCard {
  image: string
  name: string
  description: string
}

const CategoryCard = ({ image, name, description }: ICategoryCard) => {
  return (
    <div className={styles.card}>
      <Image className={styles.image} src={image} height={'100%'} width={'100%'} />
      <Link href={name.toLowerCase() !== 'new-releases' ? `/category/${name.toLowerCase()}` : `/${name.toLowerCase()}`}>
        <div className={styles.info}>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  )
}

export default CategoryCard
