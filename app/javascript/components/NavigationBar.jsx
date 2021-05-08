import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../../assets/stylesheets/navigation-bar.module.css';

function NavigationBar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.content}>
        <div>
          <Link to="/">
            <h1 className="hello">Star Wars</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
