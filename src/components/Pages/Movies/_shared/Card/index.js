import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from './styles'
import { Card } from 'antd'
const { Meta } = Card;


const MoveCard = props => {
  const { id, title, description, imgSrc } = props

  const href = id + '-' + title.toLowerCase().replace(/[ ]/g,'-');
  const desc = description.slice(0,215).length < description.length ? description.slice(0,215)+'...' : description.slice(0,215)

  return (
    <Wrapper>
      <Link to={ `/movies/${href}`} >
        <Card hoverable cover={
          <img alt="preview" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${imgSrc}`} /> }>
          <Meta title={ title } description={ desc } />
        </Card>
      </Link>
    </Wrapper>
  )
}

export default MoveCard
