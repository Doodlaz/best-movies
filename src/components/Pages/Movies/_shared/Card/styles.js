import styled from 'styled-components'

export const Wraper = styled.div`
  flex: 0 0 48%;
  max-width: 48%;
  margin-bottom: 40px;
  
  .ant-card {
    display: flex;
  
    &-body {
      flex: 0 0 60%;
      max-width: 60%;
    }
    &-cover {
      flex: 0 0 40%;
      max-width: 40%;
    }
  }
`
