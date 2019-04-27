import React, { Component } from 'react';
import styles from './Footer.module.css';
import Container from '../../Container/Container';
import Logo from '../Header/Logo/Logo';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem/MenuItem';

class Footer extends Component {
  render() {
    return (
      <div className={styles.footerWrapper}>
        <Container>
          <div className={styles.footer}>
            <Logo isWhiteColor={false} />
            <div className={styles.menuWrapper}>
              <Menu>
                <div className={styles.menuItemWrapper}>
                  <MenuItem title="About Us" isActive={false} />
                </div>
                <div className={styles.menuItemWrapper}>
                  <MenuItem title="Services" isActive />
                </div>
                <div className={styles.menuItemWrapper}>
                  <MenuItem title="FAQ" isActive={false} />
                </div>
                <div className={styles.menuItemWrapper}>
                  <MenuItem title="Blog" isActive={false} />
                </div>
                <div className={styles.menuItemWrapper}>
                  <MenuItem title="Contact us" isActive={false} />
                </div>
              </Menu>
            </div>
            <div className={styles.bottomInfo}>
              <span className={styles.bottomText}>Copyright © Sepra 2018 All Right Resereved</span>
              <span className={styles.bottomText}>Privacy Policy</span>
              <span className={styles.bottomText}>Terms Of Services</span>
              <span className={styles.bottomText}>Security</span>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Footer;
