import styled from 'styled-components'

export const DrawerNav = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 80vw; 
  max-width: 300px;
  height: 100vh;
  padding: 20px 10px;
  background: #fff;
  transform: translateX(0px);
  transition: .22s ease-in;
  z-index: 90;
  
  &.close {
    transform: translateX(-300px);
  }
  
  li {
    margin-bottom: 15px;
  }
  
  a {
    color: #363d54;
    font-size: 30px;
    text-decoration: none;
    background-color: #fff;
    position: relative;
    padding: 0 20px 10px 20px;
    transition: .3s; 
    
    &:hover,
    &:active {
      opacity: .7;
    }
  }
`