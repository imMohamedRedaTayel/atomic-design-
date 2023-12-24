import PageTitle from '@/components/atoms/labels/pageTitle'
import React from 'react'
import styles from './head.module.scss'
import Button from '@/components/atoms/buttons/button'


const Head = ({ title , children , onClick }) => {
    return <>
        <div className={ styles.head } >
            <PageTitle > {title} </PageTitle>
            { children && <Button onClick={onClick} primary > { children } </Button> }
        </div>
    </>
}

export default Head