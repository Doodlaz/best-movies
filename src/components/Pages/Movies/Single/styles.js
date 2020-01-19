import styled from 'styled-components'

export const Wrapper = styled.div`
  .poster {
    width: 100%;
    cursor: pointer;
  }
  
  .section {
    padding: 40px 0;
  }
  
  .info,
  .trailer {
    padding-left: 40px;
  }
  
  .actors {
    padding: 60px 0 0;
    margin: 0 -10px;
    
    &-col {
      flex: 0 0 20%;
      max-width: 20%;
      padding: 20px 10px;
    }
    
    .ant-card {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      
      &-body {
        padding: 10px;
        font-size: 13px;
      }
      &-meta-title {
        font-size: 14px;
        margin-bottom: 0;
      }
    }
  }
  .tags-wrap {
    margin-bottom: 28px;
  }
`
