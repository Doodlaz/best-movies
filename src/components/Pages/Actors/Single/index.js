import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import actions from '../../../../../src/redux/actors/actions'

import { Row, Col, Spin, Typography, Tag, Modal, Card, Button, Icon } from 'antd'
import { Wrapper }                                                    from './styles'
import { Link }                                                       from "react-router-dom";
const { Title, Paragraph } = Typography


const ActorsSingle = ({ match }) => {
  const dispatch = useDispatch()
  const id = match.params.id.split(/[-]/g)[0]

  const [loading, setLoading] = useState(true)
  const [popupImg, setPopupImg] = useState(false)
  const [popupBiography, setPopupBiography] = useState(false)

  const { actor } = useSelector(({ actors }) => actors)

  useEffect(() => {
    dispatch(actions.getActorReq(id))

    return () => {
      dispatch(actions.clearActor())
    }
  }, [id])

  useEffect(() => {
    if (actor) {
      setLoading(false)
      console.log(actor, ' actor');
    }
  }, [actor])

  return (
    <Wrapper>
      { !loading &&
        <>
          <Row type='flex' justify='space-between'>
            <Col span={6}>
              <img className={ 'photo' } alt="preview" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${actor.profile_path}`} onClick={() => {setPopupImg(!popupImg)}} />

              <Modal footer={false} wrapClassName={ 'img-modal' } visible={ popupImg } onCancel={() => {setPopupImg(!popupImg)}} >
                <img alt="preview" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${actor.profile_path}`}/>
              </Modal>
            </Col>

            <Col span={18} className={ 'info' }>
              <Title level={ 2 }>{ actor.name }</Title>

              <Title level={ 4 }>Биография</Title>
              <Paragraph>
                <div className={'biography'}>
                  { actor.biography }
                </div>
                <Button className={'more-biography'} type="primary" shape="circle" icon="down" onClick={() => {setPopupBiography(!popupBiography)}} />
              </Paragraph>
              <Modal footer={false} visible={ popupBiography } onCancel={() => {setPopupBiography(!popupBiography)}} >
                { actor.biography }
              </Modal>

            </Col>
          </Row>

          <Row className={ 'bottom' } type='flex' justify='space-between'>
            <Col span={6} className={ 'bottom-l' }>
              <Title level={ 4 }>Персональная информация</Title>
              <Paragraph>
                <strong>Пол</strong>
                <p>{ actor.gender == 2 ? 'Мужчина' : 'Жинщина' }</p>
              </Paragraph>

              <Paragraph>
                <strong>Дата рождения</strong>
                <p>{ actor.birthday }</p>
              </Paragraph>

              <Paragraph>
                <strong>Место Рождения</strong>
                <p>{ actor.place_of_birth }</p>
              </Paragraph>
            </Col>
            <Col span={18} className={ 'bottom-r' } >
              Известность за:
            </Col>
          </Row>
        </>
      }
    </Wrapper>
  )
}

export default ActorsSingle