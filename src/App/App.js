import React, { Component } from 'react';
import styles from './App.module.css';
import Header from './Header/Header';
import Offering from './Offering/Offering';
import Features from './Features/Features';
import Prices from './Prices/Prices';
import GetStarted from './GetStarted/GetStarted';
import Footer from './Footer/Footer';
import Founder from './Founder/Founder';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Header />
        <Offering />
        <Features />
        <Founder />
        <Prices />
        <GetStarted />
        <Footer />
      </div>
    );
  }
}

export default App;
