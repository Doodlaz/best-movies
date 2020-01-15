import React from 'react'

import { Row, Typography } from 'antd'
import ActorCard from './_shared/Card/index'
const { Title } = Typography

const Actors = () => {
  return (
    <>
      <Row className={ 'title-wrap' } type='flex' justify='space-between' align='middle'>
        <Title level={ 2 }>Actors</Title>
      </Row>

      <Row type='flex' justify='space-between' align='middle'>
        <ActorCard />
        <ActorCard />
        <ActorCard />
        <ActorCard />
        <ActorCard />
        <ActorCard />
      </Row>
    </>

  )
}

export default Actors
