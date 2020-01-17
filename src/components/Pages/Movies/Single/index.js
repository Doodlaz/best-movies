import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import actions from '../../../../../src/redux/movies/actions'

import { Wrapper } from './styles'
import { Row, Col, Spin, Typography, Tag, Modal, Card, Button, Icon } from 'antd'
const { Title, Paragraph } = Typography
const { Meta } = Card

const MovieSingle = ({ match }) => {

  const dispatch = useDispatch()

  const id = match.params.id.split(/[-]/g)[0]

  const [loading, setLoading] = useState(true)
  const [popupImg, setPopupImg] = useState(false)
  const [actorsShow, setActorsShow] = useState(5)

  const { movie } = useSelector(({ movies }) => movies)
  const { actors } = useSelector(({ movies }) => movies)

  useEffect(() => {
    dispatch(actions.getMovieReq(id))
    dispatch(actions.getMovieActorsReq(id))

    return () => {
      dispatch(actions.clearMovie())
    }
  }, [id])

  useEffect(() => {
    if (movie && actors) {
      setLoading(false)
      // console.log(movie, ' movie');
      // console.log(actors, ' actors');
    }
  }, [movie, actors])

  return (
    <Wrapper>
      { !loading &&
        <>
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
              <div className={ 'tags-wrap' }>
                {movie.genres.map(item => (<Tag key={ item.id } ><Link to={'#'}>{item.name}</Link></Tag>))}
              </div>


              <Title level={ 4 }>Budget</Title>
              <Paragraph>{ `$${(movie.budget+'').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,')}.00` }</Paragraph>

              <Title level={ 4 }>Revenue</Title>
              <Paragraph>{ `$${(movie.revenue+'').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,')}.00` }</Paragraph>
            </Col>


          </Row>

          <Row className={ 'actors' } type='flex'>
            {actors.cast.map( (item, index) => {if(index < actorsShow) {return (
              <div key={item.id} className={ 'actors-col' }>
                <Link to={ `/actors/${item.id}`} >
                  <Card hoverable cover={

                    item.profile_path ?
                      <img alt="preview" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${item.profile_path}`} /> :
                      <Icon type="file-image" style={{ fontSize: '60px', color: '#999', marginTop: '50%' }}/>
                    }>
                    <Meta title={ item.name } description={ item.character } />
                  </Card>
                </Link>
              </div>
            )}})}
          </Row>
          {actors.cast.length > actorsShow && <Button type="link" onClick={() => {setActorsShow(actors.cast.length)}}>Show More</Button>}
          {actors.cast.length === actorsShow && <Button type="link" onClick={() => {setActorsShow(5)}}>Hide</Button>}
      </>
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