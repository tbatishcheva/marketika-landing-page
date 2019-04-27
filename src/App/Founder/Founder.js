import React, { Component } from 'react';
import styles from './Founder.module.css';
import Container from '../../Container/Container';
import founder from './founder.png';

class Founder extends Component {
  render() {
    return (
      <div className={styles.founderWrapper}>
        <Container>
          <div className={styles.founder}>
            <div className={styles.imageWrapper}>
              <img className={styles.image} src={founder} alt="Founder" />
            </div>
            <div className={styles.textWrapper}>
              <div className={styles.mainText}>
                Content should be a journey.
                It should hit users at all the stages: awareness, consideration, and decision.
                If your content doesn’t continue to inform and be relevant, users will get turned off.
                A pipeline is only as good as the quality and readiness of leads.
              </div>
              <div className={styles.name}>Andrew Bichel</div>
              <div className={styles.position}>Founder, Marketing</div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Founder;
