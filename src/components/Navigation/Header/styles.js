import styled from 'styled-components'
import { Layout } from 'antd'
const { Header } = Layout

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`

export const Wrapper = styled(Header)`
  height: auto;
  padding: 0;
  line-height: 1;
  
  .logo {
    color: #fff;
    margin: 0;
    
    
    &:hover {
      color: #1890ff;
    }
    
    span {
      color: #1890ff;
    }
  }
  
  .ant-menu {
    background: none;
    font-size: 16px;
    
    &-item {
      &:not(.ant-menu-item-selected) {
        border-bottom: 2px solid #001529;
        & > a {
          color: #fff;
        }
      }
      
      &:hover {
        & > a {
          color: #1890ff;
        }
      }
    }
  }
`