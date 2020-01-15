import React from 'react';
import { NavLink } from 'react-router-dom'
import { Menu } from 'antd'
import { nav } from '../../../../src/settings/Configs/dataConfig'

import { Wrapper, Container } from './styles'

const links =[
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Movies',
    href: '/movies',
  },
  {
    name: 'Actors',
    href: '/actors',
  }
];

const Header = () => {

  const renderLinks = () => {
    return nav.map(( item ) => {
      return (
        <Menu.Item key={ item.title }>
          <NavLink to={ item.href } exact >{ item.title }</NavLink>
        </Menu.Item>
      )
    })
  };

  return (
    <>
      <Wrapper>
        <Container>
          <NavLink className={ 'logo' } to={ '/' } exact >
            <span>B</span>est <span>M</span>ovies
          </NavLink>

          <Menu mode="horizontal">
            { renderLinks() }
          </Menu>
        </Container>
      </Wrapper>
    </>

  )
}
export default Header;