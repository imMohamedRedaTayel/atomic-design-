import React from 'react'
import styles from './buttons.module.scss'


const Button = ( {children , onClick , primary , fullWidth , secondary , active , disabled , danger , cancel } ) => {
  return <>
    <button onClick={onClick} 
      disabled={disabled}
      className={ ` 
      ${styles.button}
      ${primary && styles.buttonPrimary}
      ${fullWidth && styles.fullWidth}
      ${secondary && styles.buttonSecondary}
      ${active && styles.active}
      ${cancel && styles.cancel}
      ${danger && styles.danger}
      ` }
    > 
    {children} </button>
  </>
}

export default Button