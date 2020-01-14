import React from 'react';
import { NavLink } from 'react-router-dom'
import { Menu } from 'antd'

import { Wrapper, Container, Logo } from './styles'

const links =[
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Movies',
    href: '/movies',
  }
];

const Header = () => {

  const renderLinks = () => {
    return links.map(( item ) => {
      return (
        <Menu.Item key={ item.name }>
          <NavLink to={ item.href } exact >{ item.name }</NavLink>
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