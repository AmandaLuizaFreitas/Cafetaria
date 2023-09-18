import styles from './SocialLinks.module.scss';

import {RiFacebookCircleFill,RiTwitterFill,RiInstagramLine} from 'react-icons/ri';

const socialLinks =[
  {url:'#',component:<RiFacebookCircleFill/>},
  {url:'#',component:<RiTwitterFill/>},
  {url:'#',component:<RiInstagramLine/>}
];

export const SocialLinks = () => {
  const renderLinks = socialLinks.map((link,i)=>(
    <li key={i}><a href={link.url}>{link.component}</a></li>
  ));
  return (
    
      <ul className={styles.media}>
       {renderLinks}
      </ul>
    
  )
}
