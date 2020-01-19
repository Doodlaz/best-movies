import React from 'react'
import { Link } from 'react-router-dom'

import { Wrapper } from './styles'
import { Card } from 'antd'
const { Meta } = Card;

const ActorCard = props => {
  const { id, name, imgSrc, knownFor } = props

  const href = id + '-' + name.toLowerCase().replace(/[ ]/g,'-');

  return (
    <Wrapper>
      <Link to={ `/actors/${href}` }>
        <Card hoverable cover={
          <img alt="example" src={ `https://image.tmdb.org/t/p/w235_and_h235_face${imgSrc}` } />  }>
          <Meta title={ name } description={ knownFor }/>
        </Card>
      </Link>
    </Wrapper>
  )
}

export default ActorCard
