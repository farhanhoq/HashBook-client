import React from 'react';
import CreatePost from './CreatePost';
import NewsFeed from './NewsFeed';

const Home = () => {
    return (
        <div>
            <CreatePost></CreatePost>
            <NewsFeed></NewsFeed>
        </div>
    );
};

export default Home;