import React, { Component } from 'react';
import styles from './GetStarted.module.css';
import Container from '../../Container/Container';
import Link from '../../Link/Link';

class GetStarted extends Component {
  render() {
    return (
      <div className={styles.getStartedWrapper}>
        <Container>
          <div className={styles.getStarted}>
            <div className={styles.title}>It’s free, Get started today</div>
            <div className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
            <div className={styles.linkWrapper}>
              <Link text="Get Started" isColored={false} hasBorder={false} />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default GetStarted;
