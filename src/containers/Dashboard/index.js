import React, { useCallback } from 'react';
import { Layout } from 'antd'
import { ContentWrapper, Container } from './styles'
import { Switch, Redirect } from 'react-router-dom'
import Header from '../../components/Navigation/Header/index'
import Routes from '../../../src/settings/Routes'
import PrivateRoute from '../../../src/hooks/PrivateRouter'

import NotFound from '../../../src/components/NotFound'

const DashboardLayout = () => {

  const renderRoutes = useCallback(() => Object.keys(Routes).map(elem => Routes[elem].map(item => <PrivateRoute exact { ...item } />)), [])

  return (
    <Layout>
      <Header />

      <ContentWrapper>
        <Container>
          <Switch>
            {renderRoutes()}
            <PrivateRoute exact path={ '/error' } component={ NotFound } />
            <Redirect to={ '/error' } />
          </Switch>
        </Container>
      </ContentWrapper>
    </Layout>
  )
};

export default DashboardLayout;