import React, { Fragment, } from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import MyFriends from './components/MyFriends';
import Posts from './components/Posts';
import PostForm from './components/PostForm';

const App = () => (
<div>
  <Navbar />
  <FetchUser>
    <Container>
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path='/my_friends' component={MyFriends} />
        <ProtectedRoute exact path="/posts" component={Posts} />
        {/* <ProtectedRoute exact path='/posts/new' component={PostForm} /> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </FetchUser>
</div>
)

export default App;
