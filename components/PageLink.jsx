import React from 'react';
import Link from 'next/link';

import NavBarItem from './NavBarItem';

const PageLink = ({ children, href, className, icon, tabIndex }) => {
  return (
    <Link legacyBehavior href={href}>
      <a>
        <NavBarItem href={href} className={className} icon={icon} tabIndex={tabIndex}>
          {children}
        </NavBarItem>
      </a>
    </Link>
  );
};

export default PageLink;
