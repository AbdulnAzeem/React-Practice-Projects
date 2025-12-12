import React from 'react'
import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={styles.Header}>
        <h3 className={styles.logo}>This is Azeem</h3>
        <button className={styles.btn}>Know More</button>
    </div>
  )
}

export default Header