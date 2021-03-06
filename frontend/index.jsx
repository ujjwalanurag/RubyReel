import React from 'react'
import configureStore from './store/store';
import Root from './components/root';
import ReactDOM from 'react-dom';

// TESTING STARTS HERE
import { signup, login, logout } from './actions/user_actions';
import { uploadVideo, fetchVideo, fetchVideos } from './actions/video_actions';
import { fetchComments, createComment, deleteComment } from './actions/comment_actions';
// TESTING ENDS HERE

document.addEventListener("DOMContentLoaded", () => {

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { currentUserId: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    const root = document.getElementById("root");

    // TESTING STARTS HERE
    window.getState = store.getState()
    window.dispatch = store.dispatch
    window.signup = signup
    window.login = login
    window.logout = logout
    window.fetchVideo = fetchVideo
    window.fetchVideos = fetchVideos
    window.uploadVideo = uploadVideo

    window.fetchComments = fetchComments
    window.createComment = createComment
    window.deleteComment = deleteComment
    // TESTING ENDS HERE

    ReactDOM.render(<Root store={store} />, root);
})