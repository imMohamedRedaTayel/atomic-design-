import StatisticsCard from '@/components/atoms/cards/statisticsCard'
import Head from '@/components/molecules/head/head'
import Container from '@/components/templates/container'
import PageHead from '@/components/templates/pageHead'
import dashboard from '@/controllers/dashboard'
import React, { useEffect, useState } from 'react'
import { FaBorderStyle, FaBuilding, FaHandsHelping, FaUsers, FaHeadset, FaCoins, FaUser } from 'react-icons/fa'


const HomePage = () => {

    const [counts, setCounts] = useState({})

    const getStatistics = async () => {
        const response = await dashboard.getDashboardList()
        if (response && !response.error) {
            setCounts(response.data)
        }
    }

    useEffect(() => {
        getStatistics()
    }, [])


    return <>
    
        <PageHead current='Dashboard' >
            <Head title="Dashboard" />
        </PageHead>
        <Container>
            <div className="row mb-4">
                <div className="col-md-4">
                    <StatisticsCard
                        link="/users"
                        color="#F88F2D"
                        icon={<FaUser />}
                        title="The total daily number of users"
                        count={counts?.dailyUsersCount || 0}
                    />
                </div>
                <div className="col-md-4">
                    <StatisticsCard
                        link="/users"
                        color="#1B3250"
                        icon={<FaUsers />}
                        title="The total number of users"
                        count={counts && counts.usersCount || 0}
                    />
                </div>
                <div className="col-md-4">
                    <StatisticsCard
                        link="/projects"
                        color="#FFCA31"
                        icon={<FaBuilding />}
                        title="Total number of projects"
                        count={ counts && counts.projectsCount || 0}
                    />
                </div>
                <div className="col-md-4">
                    <StatisticsCard
                        color="#10B981"
                        icon={<FaBorderStyle />}
                        title="The total number of units"
                        count={ counts && counts.unitsCount || 0}
                    />
                </div>
                <div className="col-md-4">
                    <StatisticsCard
                        link="/contacts/sales"
                        color="#E92727"
                        icon={<FaHandsHelping />}
                        title="The total number of sales Messages"
                        count={ counts && counts.salesMessagesCount || 0}
                    />
                </div>
                <div className="col-md-4">
                    <StatisticsCard
                        link="/contacts/customers"
                        color="#3498db"
                        icon={<FaHeadset />}
                        title="The total number of support Messages"
                        count={ counts && counts.supportMessagesCount || 0}
                    />
                </div>
                <div className="col-md-4">
                    <StatisticsCard
                        color="#9b59b6"
                        icon={<FaCoins />}
                        title="The total number of SMS Credit"
                        count={ counts && counts.smsCredit || 0}
                    />
                </div>
            </div>
        </Container>

    </>
}

export default HomePage