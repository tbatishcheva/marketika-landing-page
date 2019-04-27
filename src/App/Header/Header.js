import React, { Component } from 'react';
import styles from './Header.module.css';
import Container from '../../Container/Container';
import Logo from './Logo/Logo';
import FormInput from './FormInput/FormInput';
import Link from '../../Link/Link';

class Header extends Component {
  render() {
    return (
      <div className={styles.headerWrapper}>
        <Container>
          <div className={styles.logoWrapper}>
            <Logo isWhiteColor />
          </div>
          <div className={styles.titleWrapper}>
            <div className={styles.title}>We are here to help you out</div>
            <div className={styles.subtitle}>
Very professional and highly customizable sketch template with lots
            of custom pages and useful features
            </div>
            <div className={styles.form}>
              <div className={styles.formInput}>
                <FormInput text="Your Name" />
              </div>
              <div className={styles.formInput}>
                <FormInput text="Your Email" />
              </div>
              <Link text="Get Started" isColored hasBorder={false} />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Header;
