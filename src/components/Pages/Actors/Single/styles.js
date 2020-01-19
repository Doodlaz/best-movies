import styled from 'styled-components'

export const Wrapper = styled.div`
  .photo {
    width: 100%;
    cursor: pointer;
  }
  
  .info {
    padding-left: 40px;
    height: 370px;
    position: relative;
  }
  
    
  .bottom {
    padding: 60px 0 0;
    
    &-r {
      padding-left: 40px;
    }
  }
  
  .biography {
    height: 240px;
    overflow: hidden;
    position: relative;
        
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      left: 0;
      right: 0;
      bottom: 0;
      height: 40px;
      background: linear-gradient(to bottom,  rgba(255,255,255,0) 1%,rgb(240, 242, 245) 100%);
    }
  }
  .more-biography {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
  }
`
