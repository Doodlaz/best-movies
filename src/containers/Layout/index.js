import React  from 'react';
import {Route} from 'react-router-dom'
import Header from '../../components/Navigation/Header/index'

const Index = () => {

  return (
    <div className="layout" >
      <Header />

      <main>
        <Route path={'/'} exact render={() => <h1>Home page</h1> }/>
        <Route path={'/somepage'} exact render={() => <h1>Somepage page</h1> }/>
        <Route path={'/about'} exact render={() => <h1>About page</h1> }/>
      </main>
    </div>
  )
};

export default Index;