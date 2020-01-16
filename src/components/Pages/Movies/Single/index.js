import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import actions from '../../../../../src/redux/movies/actions'

import { Wrapper } from './styles'
import { Row, Col, Spin, Typography, Tag, Modal } from 'antd'
const { Title, Paragraph } = Typography

const MovieSingle = ({ match }) => {

  const dispatch = useDispatch()

  const id = match.params.id.split(/[-]/g)[0]

  const [loading, setLoading] = useState(true)
  const [popupImg, setPopupImg] = useState(false)

  const { movie } = useSelector(({ movies }) => movies)

  useEffect(() => {
    dispatch(actions.getMovieReq(id))

    return () => {
      dispatch(actions.clearMovie())
    }
  }, [id])

  useEffect(() => {
    if (movie) {
      setLoading(false)
      console.log(movie);
    }
  }, [movie])

  return (
    <Wrapper>
      { !loading &&
        <Row className={ 'title-wrap' } type='flex' justify='space-between'>
          <Col span={6}>
            <img className={ 'poster' } alt="preview" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`} onClick={() => {setPopupImg(!popupImg)}} />

            <Modal footer={false} wrapClassName={ 'img-modal' } visible={ popupImg } onCancel={() => {setPopupImg(!popupImg)}} >
              <img alt="preview" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`}/>
            </Modal>
          </Col>
          <Col span={18} className={ 'info' }>
            <Title level={ 2 }>{ movie.title }</Title>

            <Title level={ 4 }>Overview</Title>
            <Paragraph>{ movie.overview }</Paragraph>

            <Title level={ 4 }>Genres</Title>
            {movie.genres.map(item => (<Tag key={ item.id } ><Link to={'#'}>{item.name}</Link></Tag>))}

            <Title level={ 4 }>Budget</Title>
            <Paragraph>{ movie.budget }</Paragraph>

            <Title level={ 4 }>Revenue</Title>
            <Paragraph>{ movie.revenue }</Paragraph>
          </Col>
        </Row>
      }
      { loading &&
        <div className="example">
          <Spin size={'large'} />
        </div>
      }
    </Wrapper>
  )
}

export default MovieSingle