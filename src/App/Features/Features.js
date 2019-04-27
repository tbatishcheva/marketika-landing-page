import React, { Component } from 'react';
import styles from './Features.module.css';
import Feature from './Feature/Feature';
import icon from './feature.svg';
import Container from '../../Container/Container';

class Features extends Component {
  render() {
    return (
      <div className={styles.featuresWrapper}>
        <Container>
          <div className={styles.features}>
            <div className={styles.featureWrapper}>
              <Feature
                icon={icon}
                title="Start your marketing"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              />
            </div>
            <div className={styles.featureWrapper}>
              <Feature
                icon={icon}
                title="Find your favourite niche"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              />
            </div>
            <div className={styles.featureWrapper}>
              <Feature
                icon={icon}
                title="Optimize your article"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              />
            </div>
          </div>
        </Container>
      </div>

    );
  }
}

export default Features;
