import Image from 'next/image';
import styles from './Details.module.scss';

export const Details = () => {
  return (
    <section className={styles.details}>
      <div className={styles.roast}>
        <h2>Experimente os diferentes tipos de torra</h2>
        <div className={styles.types}>
          <span className={styles.light} />
          <span className={styles.medium} />
          <span className={styles.dark} />
        </div>
      </div>
      <Image src='/assets/coffee2.png' alt='café' width={340} height={225} />
      <div className={styles['card-wrapper']}>
        <div className={styles.card}>
          <h2>Brisa do Café</h2>
          <div className={styles.info}>
            <h3>Endereço</h3>
            <h4>Rua fantasia, nº 90 / Cidade - DF</h4>
          </div>
          <div className={styles.info}>
            <h3>Funcionamento</h3>
            <h4>
              <span>Segunda a sexta: 09:00 às 18:00</span>
              <span>Sábados: 09:00 às 14:00</span>
            </h4>
          </div>
        </div>
      </div>
    </section>
  )
}
