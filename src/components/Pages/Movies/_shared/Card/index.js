import React from 'react'
import { Link } from 'react-router-dom'
import { Wraper } from './styles'
import { Card } from 'antd'
const { Meta } = Card;


const MoveCard = props => {

  const { id, title, description, imgSrc } = props
  const href = id + '-' + title.toLowerCase().replace(/[ ]/g,'-');

  return (
    <Wraper>
      <Link to={ `/movies/${href}`} >
        <Card hoverable cover={<img alt="example" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${imgSrc}`} /> }>
          <Meta title={ title } description={ description } />
        </Card>
      </Link>
    </Wraper>
  )
}

export default MoveCard
