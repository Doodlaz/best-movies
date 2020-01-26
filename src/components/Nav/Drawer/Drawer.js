import React from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop'
import { DrawerNav } from './styles';

const links =[
  'Home', 'Somepage', 'About'
];

const Drawer = props => {

  const { isOpen } = props;

  const renderLinks = () => {
    return links.map(( link, index ) => {
      return (
        <li key={ index }>
          <a href="#">{ link }</a>
        </li>
      )
    })
  };

  return (
    <>
      <DrawerNav className={ isOpen ? '' : 'close' } >
        <ul> { renderLinks() } </ul>
      </DrawerNav>
      { isOpen ? <Backdrop /> : null }
    </>

  )
}
export default Drawer;