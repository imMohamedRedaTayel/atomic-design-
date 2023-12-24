import React from 'react'
import styles from './sidelink.module.scss'


const SideLink = ( { children , title } ) => {
  return <>
    <div className={ styles.sideLink } >
        { children }
        <span> { title } </span>
    </div>
  </>
}

export default SideLink