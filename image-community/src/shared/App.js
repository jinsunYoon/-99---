import './App.css';
import React from "react";
import styled from 'styled-components';

import {Route} from "react-router-dom";
import {ConnectedRouter} from "connected-react-router";
import { history } from '../redux/configStore';

import PostList from '../pages/PostList';
import Login from "../pages/Login";
import Signup from '../pages/Signup';
import Header from '../commonents/Header';
import { Grid, Button } from '../elements';
import PostWrite from '../pages/PostWrite';
import PostDetail from '../pages/PostDetail';
import Notification from '../pages/Notification';

import { useDispatch } from 'react-redux';
import {actionCreators as userActions} from "../redux/modules/user";

import {apiKey} from "./firebase";

import Permit from './Permit';
import Search from "./Search";

function App() {
  const dispatch = useDispatch();

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key)? true : false;

  React.useEffect(() => {
    if(is_session){
      dispatch(userActions.loginCheckFB());
    }
  }, []);
  
  return (
    <React.Fragment>
      <HeaderContainer><Header></Header></HeaderContainer>
        <Container>
          <Grid>
              <ConnectedRouter history={history}>
                <Route path="/" exact component={PostList}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/signup" exact component={Signup}/>
                <Route path="/write" exact component={PostWrite}/>
                <Route path="/post/write" exact component={PostWrite}/>
                <Route path="/write/:id" exact component={PostWrite}/>
                <Route path="/post/:id" exact component={PostDetail}/>
                <Route path="/search" exact component={Search}/>
                <Route path="/noti" exact component={Notification}/>
              </ConnectedRouter>
          </Grid>
        <Permit>
          <Button up _onClick={() => {
            window.scrollTo({top:0, left:0, behavior:"smooth"});
          }}></Button>
        </Permit>
      </Container>
    </React.Fragment>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  background-color: #f5f4f4;
  min-height: 100vh;
`;

const HeaderContainer = styled.div`
  border-bottom: 1px solid lightgray;
  position: sticky;
  top: 0px;
  z-index: 1;
  background-color: #fff;
`;

export default App;
