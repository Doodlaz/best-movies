import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../../../src/redux/movies/actions'

import MoveCard from './_shared/Card/index'

import { Row, Typography } from 'antd'
const { Title } = Typography

const Movies = () => {

  const dispatch = useDispatch()
  const { movies } = useSelector(({ movies }) => movies)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    dispatch(actions.getMoviesReq({ movies }))
  }, [])

  useEffect(() => {
    if (movies) {
      setLoading(false)
    }
  }, [movies])

  if (!loading) {
    console.log(movies);
  }


  return (
    <>
      <Row className={ 'title-wrap' } type='flex' justify='space-between' align='middle'>
        <Title level={ 2 }>Movies</Title>
      </Row>
      <Row type='flex' justify='space-between' align='middle'>
        { !loading &&
          movies.map( movie => {
            return <MoveCard key={movie.id} id={ movie.id } title={ movie.title } imgSrc={ movie.poster_path} description={ movie.overview } />
          })
        }
      </Row>
    </>
  )
}

export default Movies