import Link from 'next/link';
import Image from 'next/image';

export const Logo = () => {
  return (
    <Link href='/'>
        <Image src='/assets/logo.svg' alt='logo' width={77} height={38}/>
        </Link>
  )
}
