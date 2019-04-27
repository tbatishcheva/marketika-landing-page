import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FormInput.module.css';

class FormInput extends Component {
  static propTypes = {
    text: PropTypes.string,
  };

  static defaultProps = {
    text: '',
  };

  render() {
    return (
      <div className={styles.formInput}>
        <input type="text" placeholder={this.props.text} />
      </div>
    );
  }
}

export default FormInput;
