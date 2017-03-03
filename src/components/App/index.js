import React from 'react';
import Header from './Header';
import Footer from './Footer';

import styles from './App.css';

function App({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <section className={styles.content}>

          {children}

        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
