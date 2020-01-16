import React from 'react'
import { Link } from 'react-router-dom'

import { Wrapper } from './styles'
import { Card } from 'antd'
const { Meta } = Card;

const dataMove = {
  name: 'Brad Pitt',
  portfolio: 'Fight Club, Inglourious Basterds, Se7en',
  imgSrc: 'https://image.tmdb.org/t/p/w235_and_h235_face/kc3M04QQAuZ9woUvH3Ju5T7ZqG5.jpg',
}

const ActorCard = () => (
  <Wrapper>
    <Link to={ '/Actors/brad-pitt' }>
      <Card hoverable cover={<img alt="example" src={ dataMove.imgSrc } /> }>
        <Meta title={ dataMove.name } description={ dataMove.portfolio } />
      </Card>
    </Link>
  </Wrapper>
)

export default ActorCard
