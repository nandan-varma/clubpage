import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <Head>
        <title>Club Webpage</title>
        <meta name="description" content="Webpage to handle club related stuff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>
            Data Science Club
          </h1>
          <div className={styles.navigation}>
            <Link className={styles.navchild} href="/about">
              About
            </Link>
            <Link className={styles.navchild} href="/about">
              About
            </Link>
          </div>
          <div>
            <a
              href="https://metarics.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/logo.svg"
                alt="Club Logo"
                className={styles.clubLogo}
                width={50}
                height={50}
                priority
              />
            </a>
          </div> 
        </div>
      </main>
    </header>
  )
}