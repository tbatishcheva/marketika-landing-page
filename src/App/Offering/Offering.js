import React, { Component } from 'react';
import styles from './Offering.module.css';
import Container from '../../Container/Container';
import OfferingCard from './OfferingCard/OfferingCard';
import video from './video.png';
import PlayButton from './PlayButton/PlayButton';

class Offering extends Component {
  render() {
    return (
      <div className={styles.offeringWrapper}>
        <Container>
          <div className={styles.offering}>
            <div className={styles.textContent}>
              <div className={styles.title}>
              Grow up your business with maketica maketing landing page
              </div>
              <div className={styles.offeringCardWrapper}>
                <OfferingCard title="Increase your visitors" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />
                <div className={styles.offeringCardWrapperLastItem}>
                  <OfferingCard title="Start social media campaign" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />
                </div>
              </div>
            </div>
            <div className={styles.mediaContent}>
              <img className={styles.video} src={video} alt="Video" />
              <div className={styles.playWrapper}>
                <PlayButton />
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Offering;
