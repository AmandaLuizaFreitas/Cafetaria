import Stars from '@/Ui/Stars/Stars';
import styles from './Product.module.scss';
import Image from 'next/image';

export const Product = ({product,title,roast,reviews,price,stars}) => {
  
  return (
    <div className={styles.product}>
      <Image src={`/assets/${product}.png`} alt={`produto ${product}`} width={200} height={300} />
      <h2>{title}</h2>
      <h3>{roast}</h3>
      < Stars stars={stars}reviews={reviews} />
      <h4>R${price}</h4>
    </div>
  )
}
