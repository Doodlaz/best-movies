import React from 'react';
import { NavLink } from 'react-router-dom'
import { Wrapper } from './styles';

const links =[
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Somepage',
    href: '/somepage',
  },
  {
    name: 'About',
    href: '/about',
  },
];

const Index = () => {

  const renderLinks = () => {
    return links.map(( item, index ) => {
      return (
        <li key={ index }>
          <NavLink to={ item.href } exact >{ item.name }</NavLink>
        </li>
      )
    })
  };

  return (
    <>
      <Wrapper>
        <ul> { renderLinks() } </ul>
      </Wrapper>
    </>

  )
}
export default Index;