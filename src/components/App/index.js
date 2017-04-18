import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

import styles from './App.css';

function App({ children }) {
  return (
    <div className={styles.container}>
      <Nav />
      <main>
        <section className={styles.content}>

          {children}

        </section>
      </main>
      <Footer />
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default App;
