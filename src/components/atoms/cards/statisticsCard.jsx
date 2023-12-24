import React from 'react'
import styles from './cards.module.scss'
import Link from 'next/link'
import CountUp from 'react-countup';
    

const StatisticsCard = ( { icon,title,count,color,link } ) => {
  return <>
    <div className={`${styles.card} ${styles.statisticsCard} ${link ? styles.withLink : ''}`} >
        { link && <Link href={ link || '/' } ></Link> }
        <div className={styles.icon} style={{color:color,backgroundColor:`${color}30`}} >
            {icon}
        </div>
        <h5 className='text-center' > <CountUp end={count} /> </h5>
        <h6 className='text-center' >{title}</h6>
    </div>
  </>
}   

export default StatisticsCard