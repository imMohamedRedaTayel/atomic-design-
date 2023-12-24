import { useRouter } from 'next/router'
import React from 'react'
import styles from '../molecules/sideLink/sidelink.module.scss'

const ActiveLink = ( { children , href } ) => {

    const router = useRouter()

    const handleClick = ( e ) => {
        e.preventDefault()
        router.push( href )
    }

  return <>
    <a href={ href } onClick={handleClick} className={ router.asPath === href ? styles.active : '' } >
        { children }
    </a>
  </>
}

export default ActiveLink