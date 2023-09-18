import Image from 'next/image';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
     <div className={styles.content}>
      <h1>Brisa do Café</h1>
      <div className={styles.line}/>
      <p className='dark-bg'>
      Ao entrar, você é imediatamente envolvido pelo aroma irresistível dos grãos recém-moídos. O balcão exibe uma impressionante seleção de grãos de café de todo o mundo, oferecendo uma ampla variedade de sabores e intensidades para todos os gostos. Desde o clássico espresso até as misturas artesanais exclusivas da casa, o Café do Sol tem algo para satisfazer até mesmo o paladar mais exigente.
      </p>
      <a  href='#products'  className='btn btn-primary'>Conheça</a>
     </div>
     <Image src='/assets/leaf1.png' 
     alt='folha'
     width={320}
     height={460}
     className={styles.leaf1}
     
     />
     <Image src='/assets/flower.png' 
     alt='flor'
     width={260}
     height={260}
     className={styles.flower}
     
     />
     <Image src='/assets/coffee.png' 
     alt='sementes de café'
     width={260}
     height={260}
     className={styles.coffee}
     
     />
     <Image src='/assets/leaf2.png' 
     alt='folha'
     width={400}
     height={520}
     className={styles.leaf2}
     
     />
    </header>
  )
}
