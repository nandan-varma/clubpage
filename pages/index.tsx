import { Inter } from '@next/font/google'
import Link from 'next/link';
import { Button } from 'reactstrap';
import Hero from '../components/Hero';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Hero />
      <Link href='/about'>Learn More</Link>
    </>
  )
}