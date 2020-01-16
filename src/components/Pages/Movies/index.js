import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../../../src/redux/movies/actions'

import MoveCard from './_shared/Card/index'

import { Wraper } from './styles'

import { Row, Typography, Pagination, Spin } from 'antd'
const { Title } = Typography

const Movies = () => {

  const dispatch = useDispatch()
  const { movies } = useSelector(({ movies }) => movies )


  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    dispatch(actions.getMoviesReq(page))
  }, [page])

  useEffect(() => {
    if (movies) {
      setLoading(false)
      console.log(movies);
    }
  }, [movies])

  if (!loading) {
    // console.log(movies);
  }

  const switchPage = page => {
    setPage(page)
  }

  return (
    <Wraper>
      <Row className={ 'title-wrap' } type='flex' justify='space-between' align='middle'>
        <Title level={ 2 }>Movies</Title>
      </Row>
      { !loading &&
        <Row type='flex' justify='space-between' align='middle'>
          {movies.results.map( movie => {
            return <MoveCard key={movie.id} id={ movie.id } title={ movie.title } imgSrc={ movie.poster_path} description={ movie.overview } />
          })}
          <Pagination defaultCurrent={1} total={ movies.total_results/2 } onChange={switchPage} />
        </Row>
      }
      { loading &&
      <div className="example">
        <Spin size={'large'} />
      </div>
      }


    </Wraper>
  )
}

export default Movies