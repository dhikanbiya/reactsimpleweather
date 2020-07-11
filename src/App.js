import React,{Component} from 'react';
import  'bootstrap/dist/css/bootstrap.css';

import {Header,NavigationBar, Layout} from './components/';
import {Route, Switch, BrowserRouter as Router,} from 'react-router-dom';
import {City,About} from './pages';

class App extends Component {
  render(){
    return (
      <Router>
      <NavigationBar />
      <Header />
      <Layout>
        <Switch>
          <Route exact path="/city" component={City} />          
          <Route path="/about" component={About} />          
        </Switch>
      </Layout>
    </Router>
    );
  }  
}

export default App;
