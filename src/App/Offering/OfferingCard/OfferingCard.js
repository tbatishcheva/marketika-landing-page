import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './OfferingCard.module.css';

class OfferingCard extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
  };

  static defaultProps ={
    subtitle: '',
  };

  render() {
    return (
      <div className={styles.offeringCard}>
        <div className={styles.title}>{this.props.title}</div>
        <div className={styles.subtitle}>{this.props.subtitle}</div>
      </div>
    );
  }
}

export default OfferingCard;
