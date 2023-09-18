'use client'

import Image from 'next/image';
import styles from './Reviews.module.scss';
import Stars from '@/Ui/Stars/Stars';
import { useEffect, useState } from 'react';



const reviews =[
  {avatar:'/assets/avatar1.png',
  name:'Ana Maria',
  role:' chef de cozinha',
  stars: 4,
  comment:'Adorei o café! É sem dúvida o melhor da cidade. Recomendo a todos que queiram uma experiência única e inesquecível.'
},
  {avatar:'/assets/avatar2.png',
  name:'Carlos Eduardo',
  role:'empresario',
  stars: 5,
  comment:'Eu simplesmente adorei o café daqui! O ambiente é acolhedor e os funcionários são super atenciosos.'
},
  {avatar:'/assets/avatar3.png',
  name:'Jessica Pereira',
  role:'Programadora',
  stars: 5,
  comment:'O café é bom, mas acho que poderia ter mais opções de acompanhamentos, como bolos e pães.'
},

]
export const Reviews = () => {
  const[currentReview,setCurrentReview]= useState(0);


  const nextReviw = () =>{setCurrentReview(currentReview === reviews.length -1 ? 0:currentReview +1)  };

  const previousReviw = ()=> { setCurrentReview(currentReview === 0 ? reviews.length -1:currentReview -1) } 
 const {avatar,name,role,stars, comment}= reviews[currentReview];

 useEffect(()=>{
  const interval = setInterval(nextReviw,5000);
  return () => clearInterval(interval)
 },[currentReview]);

  return (
    <section id='reviews' className={styles.reviews}>
      <Image className={styles.image} src='/assets/graos.png' alt='grão de café' width={425} height={250}/>
      <h2 className='title light-bg'>O que falam da gente </h2>
      <div className={styles.review}>
        <button className={styles.previous} onClick={previousReviw }>
          &larr;
        </button>
       <Image className={styles.avatar} 
       src= {avatar}alt='avatar' width={120} height={120}/>
       <h3>{name}</h3>
       <h4>`{role}</h4>
      <Stars stars={stars}/>
      <p>{ comment}</p>

      <button className={styles.next} onClick={nextReviw }>
          &rarr;
        </button>
      </div>
    </section>
  )
}
