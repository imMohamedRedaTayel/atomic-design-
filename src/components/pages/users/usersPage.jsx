import Card from '@/components/atoms/cards'
import SearchInput from '@/components/atoms/inputs/searchInput'
import PageLoader from '@/components/atoms/loaders/pageLoader'
import UsersFilter from '@/components/molecules/filter/usersFilter'
import Head from '@/components/molecules/head/head'
import Container from '@/components/templates/container'
import PageHead from '@/components/templates/pageHead'
import React, { useEffect, useState } from 'react'
import Table from './usersTable'
import users from '@/controllers/users'

const UsersPage = () => {

    const [loading, setLoading] = useState(true)
    const [filterCount, setFilterCount] = useState(0)
    const [totalCount, setTotalCount] = useState(0)
    const [activeCount, setActiveCount] = useState(0)
    const [bannedCount, setBannedCount] = useState(0)
    const [usersList, setUsersList] = useState([])

    const [limit, setLimit] = useState(6);
    const [banned, setBanned] = useState(2);

    function handleFilterButtonClick(buttonValue) {
        setBanned(buttonValue);
    }

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('')
    const handleSearchChange = (event) => {
        setSearch(event);
        setPage(1)
    };


    const columns = [
        { title: "Full Name" },
        { title: "Email Address" },
        { title: "Mobile Number" },
        { title: "Status" },
        { title: "Joined at" },
      ]

      const getUsersData = async () => {
        const allUsers = await users.getUsersList(search, banned, limit, page)
        if (allUsers && !allUsers.error) {
          setUsersList(allUsers.list)
          setTotalCount(allUsers.total)
          setActiveCount(allUsers.activeCount)
          setBannedCount(allUsers.bannedCount)
          setFilterCount(allUsers.filterCount)
          setLoading(false)
        }
      }
      useEffect(() => {
        getUsersData()
      }, [search, banned, limit, page])

    const total = filterCount


    return <>
        {/* {loading && <PageLoader />} */}
        {/* {!loading && */}
        <div>
            <PageHead current="Manage Users" >
                <Head title="Manage Users" />
                <UsersFilter
                    totalCount={totalCount}
                    bannedCount={bannedCount}
                    activeCount={activeCount}
                    onButtonClick={handleFilterButtonClick}
                />
            </PageHead>
            <Container>
                <Card>
                    <div className="mb-4">
                        <SearchInput valueChange={handleSearchChange} value={search} placeHolder="Search by name or mobile number or email" defaultInput={true} />
                    </div>
                    <Table columns={columns} data={usersList} />
                </Card>
            </Container>
        </div>
        {/* // } */}
    </>
}

export default UsersPage