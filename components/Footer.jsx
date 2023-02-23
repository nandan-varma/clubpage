import React from 'react';
import Image from 'next/image'

const Footer = () => (
  <div className="footer bg-light text-center" data->
    {/* <Image
                src="/logo.svg"
                alt="Club Logo"
                className={styles.clubLogo}
                width={50}
                height={50}
                priority
              /> */}
    <p data->
      <br/>
      Follow Us
      <br/>
      <a className="p-2" href="mailto:metarics2022@gmail.com">Mail</a>
      <a className="p-2" href="https://instagram.com/metarics_bvrit">Instagram</a>
      <a className="p-2" href="https://chat.whatsapp.com/CXPQrjTqdJFLKAlcyONjTO">Whatsapp</a>
    </p>
  </div>
);

export default Footer;
