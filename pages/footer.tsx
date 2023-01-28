import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
      <footer className={styles.footer}>
        <div className={styles.footchild}>
            <Link href="/about">About</Link>
        </div>
      </footer>
    )
}