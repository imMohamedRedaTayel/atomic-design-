import React, { useEffect, useState } from 'react'
import styles from './sideBar.module.scss'
import Link from 'next/link'
import Logo from '@/components/atoms/logo'
import ActiveLink from '@/components/templates/activeLink'
import SideLink from '@/components/molecules/sideLink'
import { Category } from '@/components/atoms/icons'
import { FaRegIdCard, FaRegBell, FaRegListAlt, FaRegHandshake, FaRegUserCircle, FaRegSave, FaRegStar, FaHeadphonesAlt, FaRegNewspaper, FaRegBuilding, FaRegUser, FaRegClone, FaRegSun, FaRegCreditCard, FaRegMoneyBillAlt } from 'react-icons/fa'
import { BsChevronDown } from 'react-icons/bs'
import { Collapse } from 'react-bootstrap'
import { useRouter } from 'next/router'


const SideBar = () => {
  
  const router = useRouter()
  const [projects, setProjects] = useState(false);

  useEffect(() => {
    if (router.pathname === '/projects' || router.pathname === '/projects/services') {
      setProjects(true)
    }
  }, [])
  


  return <>
    <aside className={styles.sideBar} >
      <div className={styles.logoView} >
        <Link href='/' >
          <Logo />
        </Link>
      </div>
      <div className='' >
        <ActiveLink href='/' >
          <SideLink title="Dashboard" > <Category /> </SideLink>
        </ActiveLink>
        <ActiveLink href="/users">
          <SideLink title="Manage Users"><FaRegUser /></SideLink>
        </ActiveLink>

        <div className={` ${styles.collapse} ${projects && styles.open} `}
          onClick={() => setProjects(!projects)}
          aria-controls="example-collapse-text"
          aria-expanded={projects} 
          >

          <SideLink title="Projects"><FaRegBuilding /></SideLink>
          <div className={styles.icon}>
            <BsChevronDown />
          </div>

        </div>

        <Collapse in={projects}>
          <div className={styles.collapseLinks}>
            <ActiveLink href="/projects">
              <SideLink title="Manage Projects"><FaRegBuilding /></SideLink>
            </ActiveLink>
            <ActiveLink href="/projects/services">
              <SideLink title="Manage Services"><FaRegClone /></SideLink>
            </ActiveLink>
          </div>
        </Collapse>


      </div>
    </aside>
  </>
}

export default SideBar