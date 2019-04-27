import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Price.module.css';
import Link from '../../../Link/Link';

class Price extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
    isActive: PropTypes.bool,
  };

  static defaultProps = {
    description: '',
    isActive: false,
  };

  render() {
    return (
      <div className={`${styles.priceCard} ${this.props.isActive ? styles.priceCardWithBG : ''}`}>
        <div className={styles.title}>{this.props.title}</div>
        <div className={styles.price}>
          <span className={styles.coloredPrice}>
$
            {this.props.price}
          </span>
/mo
        </div>
        <div className={styles.description}>{this.props.description}</div>
        <div className={styles.linkWrapper}>
          <Link text="Get Started" isColored={this.props.isActive} hasBorder={!this.props.isActive} />
        </div>
      </div>
    );
  }
}

export default Price;
