import { Inter } from '@next/font/google'
import ErrorMessage from '../components/ErrorMessage';

const inter = Inter({ subsets: ['latin'] })

export default function Error() {
  return (
    <>
        <ErrorMessage>
            Something Went Wrong
            Try Contacting Us
        </ErrorMessage>
    </>
  )
}