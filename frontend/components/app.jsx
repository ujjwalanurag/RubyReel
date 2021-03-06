import React from 'react';
import { Route, Link } from 'react-router-dom';
import SignupContainer from './auth/signup_container';
import LoginContainer from './auth/login_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import VideoIndexContainer from './videos/video_index_container';
import Modal from './modal/modal';
import VideoShowContainer from './videos/video_show_conatiner';
import VideoSearchIndexContainer from './videos/video_search_index_container';

const App = () => (
    <>
        <Modal />
        <AuthRoute path="/login" component={LoginContainer} />
        <AuthRoute path="/signup" component={SignupContainer} />
        <Route exact path="/search" component={VideoSearchIndexContainer} />
        <Route exact path="/" component={VideoIndexContainer} />
        <Route path="/api/videos/:videoId" component={VideoShowContainer} />
    </>
)

export default App;