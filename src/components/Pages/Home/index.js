import React   from 'react'

import { Row, Typography } from 'antd'
const { Title } = Typography

const Home = () => {
  return (
    <Row className={ 'title-wrap' } type='flex' justify='space-between' align='middle'>
      <Title level={ 2 }>Home</Title>
    </Row>
  )
}

export default Home
