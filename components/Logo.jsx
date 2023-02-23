import React from 'react';
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

const Logo = () => (
  <figure className="" title="Club Logo">
    <Image
                src="/logo.png"
                alt="Club Logo"
                className={styles.clubLogo}
                width={250}
                height={250}
                priority
              />
  </figure>
);

export default Logo;
