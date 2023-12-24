import React from 'react'
import Container from './container'
import styles from './templates.module.scss'
import Breadcrumbs from '../atoms/breadcrumbs'


const PageHead = ({ current, children }) => {
    return <>
        <div className={styles.pageHead} >
            <Container>
                <Breadcrumbs current={current} />
                {children}
            </Container>
        </div>
    </>
}

export default PageHead