import React, { Component } from 'react';
import styles from './Prices.module.css';
import Container from '../../Container/Container';
import Price from './Price/Price';

class Prices extends Component {
  render() {
    return (
      <div className={styles.pricesWrapper}>
        <Container>
          <div className={styles.prices}>
            <div className={styles.title}>Choose your suitable plans</div>
            <div className={styles.subtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </div>

            <div className={styles.priceWrapper}>

              <Price
                title="FREE"
                price={0}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                isActive
              />
              <Price
                title="PREMIUM"
                price={39}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                isActive={false}
              />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Prices;
