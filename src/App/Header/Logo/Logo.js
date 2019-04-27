import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Logo.module.css';

class Logo extends Component {
  static propTypes = {
    isWhiteColor: PropTypes.bool,
  };

  static defaultProps = {
    isWhiteColor: false,
  };

  render() {
    return (
      <div className={`${styles.logo} ${this.props.isWhiteColor ? styles.logoWhiteColor : styles.logoBlackColor}`}>Marketika</div>
    );
  }
}

export default Logo;
