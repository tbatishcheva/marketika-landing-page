import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Link.module.css';

class Link extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    isColored: PropTypes.bool,
    hasBorder: PropTypes.bool,
  };

  static defaultProps = {
    isColored: false,
    hasBorder: false,
  };

  render() {
    return (
      <div className={`${styles.link} ${this.props.isColored ? styles.linkWithBG : styles.linkWithoutBG} ${this.props.hasBorder ? styles.linkWithBorder : styles.linkWithoutBorder}`}>
        <a className={`${styles.alink} ${this.props.isColored ? styles.aLinkWithoutBG : styles.aLinkWithBG}`} href="google.com">{this.props.text}</a>
      </div>
    );
  }
}

export default Link;
