import Link from 'next/link'
import React from 'react'
import { Home } from '../icons'
import styles from './breadcrumbs.module.scss'


const Breadcrumbs = ( { current } ) => {
  return <>
    <div className={ styles.breadcrumbs } >
        <Link href='/' >
            <div className={ styles.item } >
                <Home />
                <span> Home </span>
            </div>
        </Link>
        <div className={`${styles.current} ${styles.item}`}>
          <span>{current}</span>
        </div>
    </div>
  </>
}

export default Breadcrumbs