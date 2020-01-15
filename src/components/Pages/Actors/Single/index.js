import React from 'react'

import { Row, Typography } from 'antd'
const { Title } = Typography

const ActorsSingle = ({ match }) => (
  <Row className={ 'title-wrap' } type='flex' justify='space-between' align='middle'>
    <Title level={ 2 }>{match.params.id}</Title>
  </Row>
)

export default ActorsSingle