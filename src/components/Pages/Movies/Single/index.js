import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../../../../src/redux/movies/actions'

import { Row, Typography } from 'antd'
const { Title } = Typography

const MovieSingle = ({ match }) => {

  const dispatch = useDispatch()

  const id = match.params.id.split(/[-]/g)[0]

  const [loading, setLoading] = useState(true)

  const { movie } = useSelector(({ movies }) => movies)

  useEffect(() => {
    dispatch(actions.getMovieReq(id))
  }, [id])

  useEffect(() => {
    if (movie) {
      setLoading(false)
    }
  }, [movie])

  return (
    <Row className={ 'title-wrap' } type='flex' justify='space-between' align='middle'>
      { !loading && <Title level={ 2 }>{ movie.title }</Title> }
    </Row>
  )
}

export default MovieSingle