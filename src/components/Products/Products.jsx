import { Product } from './Product/Product';
import styles from './Products.module.scss';

export const Products = () => {

  return (
    <section id='products' className={styles.products}>
     <Product product= 'product1' title='Café blend'roast= 'Torra Escura'stars='5' reviews='16' price= '29,90'/>
     <Product product= 'product2' title='Café Branca'roast= 'Torra Clara'stars='5' reviews='12' price= '28,73' />
     <Product product= 'product3' title='Café Premium'roast= 'Torra Média'stars='5' reviews='9' price= '32,50' />
     <Product product= 'product4' title='Café Latte'roast= 'Torra clara'stars='5' reviews='6' price= '25,45' />
     
    </section>
  )
}
