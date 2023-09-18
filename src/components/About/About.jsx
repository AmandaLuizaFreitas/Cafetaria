import Image from 'next/image';
import style from './About.module.scss';



export const About = () => {
  return (
   <section  id='about' className={style.about}>
    <Image src='/assets/about.png' alt='Sobre nós' width={500} height={400}/>
    <div className={style.content}>
      <h2 className='title light-bg'>Conheça mais sobre o Brisa do Café</h2>
      <p>Refúgio para os apreciadores de café que desejam se perder em um mundo de aromas e sabores. Nossa jornada começa com a busca incansável por grãos de café excepcionais, vindos de regiões remotas e pitorescas ao redor do mundo. Cada xícara que servimos conta uma história, e convidamos você a se juntar a nós nessa jornada sensorial.</p>
      <p>No Brisa do Café, acreditamos que o café não é apenas uma bebida, mas sim uma paixão compartilhada. Por isso, organizamos eventos regulares, como degustações de café, workshops de torrefação e encontros de entusiastas do café, para criar uma comunidade de amantes do café que valorizam a qualidade, a autenticidade e a conexão.</p>
    </div>
   </section>
  )
}
