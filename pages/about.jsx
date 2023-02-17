import { Inter } from '@next/font/google'
import About from '../components/About';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <About />
    </>
  )
}
