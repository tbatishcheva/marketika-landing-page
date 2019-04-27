import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Feature.module.css';

class Feature extends Component {
  static propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
  };

  static defaultProps ={
    icon: null,
    subtitle: '',
  };

  render() {
    return (
      <div className={styles.feature}>
        <div className={styles.image}><img src={this.props.icon}/></div>
        <div className={styles.title}>{this.props.title}</div>
        <div className={styles.subtitle}>{this.props.subtitle}</div>
      </div>
    );
  }
}

export default Feature;
