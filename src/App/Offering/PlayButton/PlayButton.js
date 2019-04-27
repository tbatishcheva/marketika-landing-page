import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PlayButton.module.css';
import play from './play.svg';

class PlayButton extends Component {
  static propTypes = {};

  render() {
    return (
      <div className={styles.playButton}>
        <img className={styles.play} src={play} alt="PlayButton" />
      </div>
    );
  }
}

export default PlayButton;
