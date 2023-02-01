import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Content from '../components/ErrorMessage';
import ErrorMessage from '../components/ErrorMessage';

const inter = Inter({ subsets: ['latin'] })

export default function Error() {
  return (
    <>
        <ErrorMessage>
            Something Went Wrong
        </ErrorMessage>
    </>
  )
}