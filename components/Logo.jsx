import React from 'react';
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

const Logo = () => (
  <figure className="" title="Club Logo">
    <Image
                src="/logo.svg"
                alt="Club Logo"
                className={styles.clubLogo}
                width={50}
                height={50}
                priority
              />
  </figure>
);

export default Logo;
