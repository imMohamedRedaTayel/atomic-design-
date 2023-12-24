import Card from '@/components/atoms/cards'
import { Project } from '@/components/atoms/icons'
import SearchInput from '@/components/atoms/inputs/searchInput'
import Filter from '@/components/molecules/filter/filter'
import Head from '@/components/molecules/head/head'
import Container from '@/components/templates/container'
import PageHead from '@/components/templates/pageHead'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Table from './projectsTable'

const ProjectsPage = () => {

    const router = useRouter()

    const handleNewProject = () => {
        router.push('/projects/new')
    }

    const [active, setActive] = useState(2);
    const [limit, setLimit] = useState(6)
    const [projectsList, setProjectsist] = useState([])

    const [filterCount, setFilterCount] = useState(0)
    const [totalCount, setTotalCount] = useState(0)
    const [activeCount, setActiveCount] = useState(0)
    const [hiddenCount, setHiddenCount] = useState(0)

    function handleFilterButtonClick(buttonValue) {
        setActive(buttonValue);
    }

    const [search, setSearch] = useState()
    const handleSearchChange = (event) => {
      setSearch(event);
    };

    const columns = [
        { title: "Project Name" },
        { title: "Overview" },
        { title: "Starting Price" },
        { title: "Status" },
        { title: "Added in" },
      ]

    return <>
        <div>
            <PageHead current="Manage Projects">
                <Head title="Manage Projects" onClick={handleNewProject}>
                    <Project />Add New Project
                </Head>
                <Filter
                    allText="All Projects"
                    secondText="Apparent"
                    thirdText="Hidden"
                    secondValue={1}
                    thirdValue={0}
                    totalCount={totalCount}
                    bannedCount={hiddenCount}
                    activeCount={activeCount}
                    onButtonClick={handleFilterButtonClick}
                />
            </PageHead>
            <Container>
                <Card>
                    <div className="mb-4">
                        <SearchInput valueChange={handleSearchChange} value={search} placeHolder="Search by name or mobile number or email" defaultInput={true} />
                    </div>
                    <Table columns={columns} data={projectsList} />
                </Card>
            </Container>
        </div>
    </>
}

export default ProjectsPage