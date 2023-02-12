import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import About from '../components/About';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <About />
      <hr />
    </>
  )
}
