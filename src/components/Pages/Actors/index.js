import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../../../src/redux/actors/actions'

import { Row, Spin, Typography } from 'antd'
import ActorCard from './_shared/Card/index'

import { Wrapper } from './styles'

const { Title } = Typography

const Actors = () => {

  const dispatch = useDispatch();
  const { actors } = useSelector(({actors}) => actors)

  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    dispatch(actions.getActorsReq(page))
  }, [page])

  useEffect(() => {
    actors && setLoading(false)
  },[actors])

  return (
    <Wrapper>
      <Row className={ 'title-wrap' } type='flex' justify='space-between' align='middle'>
        <Title level={ 2 }>Actors</Title>
      </Row>
      { !loading &&
        <Row type='flex' justify='space-between' align='middle'>
          {actors.results.map(actor =>
            <ActorCard key={actor.id} id={actor.id} name={actor.name} imgSrc={actor.profile_path} knownFor={ actor.known_for[0].title }/>
          )}

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

export default Actors
