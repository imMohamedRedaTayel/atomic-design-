import Image from 'next/image'
import React from 'react'
import styles from './logo.module.scss'


const Logo = () => {
  return <>
    <div className={styles.logo} >
        <Image priority src="/logo.png" width={140} height={80} alt="logo" />
    </div>
  </>
}

export default Logo