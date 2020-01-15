import React from 'react'

import { Row, Typography } from 'antd'
const { Title } = Typography

const MovieSingle = ({ match }) => (
  <Row className={ 'title-wrap' } type='flex' justify='space-between' align='middle'>
    <Title level={ 2 }>{match.params.id}</Title>
  </Row>
)

export default MovieSingle