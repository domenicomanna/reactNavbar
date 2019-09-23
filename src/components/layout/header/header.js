import React from 'react';
import Container from '../../container/container';
import styles from './header.module.css'

const Header = (props) => {
  let classesForMainNavigationLinks = [styles.mainNavigationLinks];
  if (props.hamburgerLinksShouldShow) classesForMainNavigationLinks.push(styles.showHamburgerLinks)

  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <h1 className={styles.brand}>Brand Name</h1>
          <ul className={classesForMainNavigationLinks.join(" ")}>
            <li className={styles.listLink}>
              <a className={styles.link} href="#"> Home </a>
            </li>
            <li className={styles.listLink}>
              <a className={styles.link} href="#"> About </a>
            </li>
            <li className={styles.listLink}>
              <a className={styles.link} href="#"> Contact </a>
            </li>
          </ul>
          <span onClick={props.toggleHamburgerLinks}
            className={styles.hamburger}>
            &#9776;
          </span>
        </nav>
      </Container>
    </header>
  );
}

export default Header;