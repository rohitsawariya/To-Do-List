import React from 'react'
import styles from './Container.module.css'

function Container({children}) {
  return (
    <div className={`${styles.container} p-5`}>
    <div className={styles.content}>
      {children}
    </div>
  </div>
  )
}

export default Container