import styled from 'styled-components'

export const Wrapper = styled.div`
  flex: 0 0 31%;
  max-width: 31%;
  margin-bottom: 40px;
  
  .ant-card-meta-description {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 100%;
  }
  
  .ant-card-body {
    height: 93px;
  }
`
