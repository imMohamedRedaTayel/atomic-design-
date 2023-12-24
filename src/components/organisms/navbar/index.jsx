import React, { useEffect, useState } from 'react'
import styles from './navbar.module.scss'
import Container from '@/components/templates/container'
import SearchInput from '@/components/atoms/inputs/searchInput'
import User from '@/components/molecules/user'
import { Site } from '@/const'
import { BiLogOut } from 'react-icons/bi'
import { useRouter } from 'next/router'
import { FaRegBuilding, FaRegClone, FaRegCreditCard, FaRegMoneyBillAlt, FaRegNewspaper, FaRegUser } from 'react-icons/fa'



const Navbar = () => {

    const router = useRouter()
    const [user, setUser] = useState(null)
    const [menu, setMenu] = useState(false)
    useEffect(() => {
        const user = JSON.parse(sessionStorage?.getItem('user'))
        setUser(user)
    }, [])

    const handleLogout = () => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("isAuthed");
        sessionStorage.removeItem("user");
        router.push('/login')
    }


    const [dashPages, setDashPages] = useState([
        { title: "users", href: "/users", icon: <FaRegUser /> },

        { title: "services", href: "/projects/services", icon: <FaRegClone /> },
        { title: "projects", href: "/projects", icon: <FaRegBuilding /> },
        { title: "new project", href: "/projects/new", icon: <FaRegBuilding /> },

        { title: "Installment manage", href: "/installments/paymentsRequests", icon: <FaRegCreditCard /> },
        { title: "Payments Requests", href: "/installments", icon: <FaRegMoneyBillAlt /> },

        { title: "Breaking News", href: "/news", icon: <FaRegNewspaper /> },

    ])

    const [search, setSearch] = useState('')
    const handleSearchChange = (event) => {
        setSearch(event);
    };

    const filteredData = dashPages.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    return <>
        <div className={styles.navbar} >
            <Container>
                <nav className={styles.navbarContent} >
                    <div className={styles.searchSection} >
                        <SearchInput valueChange={handleSearchChange} value={search} />

                        {search.length ?

                            <div className={styles.searchMenu}>
                                {filteredData.map((item, i) => (
                                    <div className={styles.searchItem} key={i}>
                                        <a href={item.href}></a>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </div>
                                ))}
                            </div>
                            : null
                        }


                    </div>
                    <div className={styles.useSide} >
                        {user && <div onClick={() => setMenu(!menu)}><User role={user.role} img={'/images/user/2.avif'} name={user.fullname} /> </div>}
                        {menu &&
                            <div className="userMenu">
                                <button onClick={handleLogout}><BiLogOut /> Logout</button>
                            </div>
                        }
                    </div>
                </nav>
            </Container>
        </div>
    </>
}

export default Navbar