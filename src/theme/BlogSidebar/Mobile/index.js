import React from 'react';
import Link from '@docusaurus/Link';
import { NavbarSecondaryMenuFiller } from '@docusaurus/theme-common';
function BlogSidebarMobileSecondaryMenu({ sidebar }) {
  return (
    <ul className="menu__list">
      {sidebar.items.map(item => (
        <li key={item.permalink} className="menu__list-item">
          <Link isNavLink to={item.permalink} className="menu__link" activeClassName="menu__link--active">
            {item.title}
            {/* {item.permalink.split('/').at(-1).replace(/_/g, '.')} */}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default function BlogSidebarMobile(props) {
  return <NavbarSecondaryMenuFiller component={BlogSidebarMobileSecondaryMenu} props={props} />;
}
