import React    from 'react'
import MoveCard from './_shared/Card/index'

import { Row, Typography } from 'antd'
const { Title } = Typography

const Movies = () => {
  return (
    <>
      <Row className={ 'title-wrap' } type='flex' justify='space-between' align='middle'>
        <Title level={ 2 }>Movies</Title>
      </Row>
      <Row type='flex' justify='space-between' align='middle'>
        <MoveCard />
        <MoveCard />
        <MoveCard />
        <MoveCard />
        <MoveCard />
        <MoveCard />
      </Row>
    </>
  )
}

export default Movies