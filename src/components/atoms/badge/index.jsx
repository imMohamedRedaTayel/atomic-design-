import React from 'react'
import styles from './badge.module.scss'

const Badge = ({type,children}) => {
  return (
    <span className={`${styles.badge} ${type === 'success' && styles.suceess} ${type === 'alert' && styles.alert}  ${type === 'primary' && styles.primary} ${type === 'danger' && styles.danger}`}>{children}</span>
  )
}

export default Badge