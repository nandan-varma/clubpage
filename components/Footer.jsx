import React from 'react';
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

const Footer = () => (
  <footer className="bg-light p-3 text-center" data->
    <Image
                src="/logo.svg"
                alt="Club Logo"
                className={styles.clubLogo}
                width={50}
                height={50}
                priority
              />
    <p data->
      Suggestions?<a href="emailto:nandanvarma@icloud.com">Contact Me</a>
    </p>
  </footer>
);

export default Footer;