import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './MenuItem.module.css';

class MenuItem extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
  };

  static defaultProps = {
    isActive: false,
  };

  render() {
    return (
      <div className={styles.menuItem}>
        <div className={`${styles.title} ${this.props.isActive ? styles.titleIsColored : ''}`}>{this.props.title}</div>
      </div>
    );
  }
}

export default MenuItem;
