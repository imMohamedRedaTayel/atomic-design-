import Card from '@/components/atoms/cards'
import Head from '@/components/molecules/head/head'
import Container from '@/components/templates/container'
import PageHead from '@/components/templates/pageHead'
import React from 'react'
import StepOne from './steps/stepOne'

const NewProjectPage = () => {
  return <>
    <div className='newProject' >
      <PageHead current="Manage Projects" >
        <Head title="Add New Project" />
      </PageHead>
      <Container>
        <Card>
          <StepOne />
        </Card>
      </Container>
    </div>
  </>
}

export default NewProjectPage