import React from 'react'
import styles from "./card.module.scss"

const Cards = () => {
  return (
    <React.Fragment>
      <div className={styles.main_cards}>
        <h1>See Your Destinations</h1>
        <div>
            <button>Buses</button>
            <button>Trains</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Cards