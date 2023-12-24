import React from 'react'
import styles from './cards.module.scss'


const Card = ( { children , title } ) => {
  return <>
    <div className={ styles.card } >
        {title &&<h6 className={`${styles.title}`}>{title}</h6>}
        { children }
    </div>
  </>
}

export default Card