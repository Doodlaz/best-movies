import React from 'react'
import { Link } from 'react-router-dom'
import { Wraper } from './styles'
import { Card } from 'antd'
const { Meta } = Card;

const dataMove = {
  title: 'Ad Astra',
  description: 'The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission…',
  imgSrc: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg',
}

const MoveCard = () => (
  <Wraper>
    <Link to={ '/movies/ad-astra' }>
      <Card hoverable cover={<img alt="example" src={ dataMove.imgSrc } /> }>
        <Meta title={ dataMove.title } description={ dataMove.description } />
      </Card>
    </Link>
  </Wraper>
)

export default MoveCard
