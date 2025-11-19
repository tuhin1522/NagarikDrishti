import React from 'react';
import EmergencyIssues from '../../Components/EmergencyIssues/EmergencyIssues';
import NewsFeed from '../../Components/NewsFeed/NewsFeed';

const Home = () => {
    return (
        <div>
            <EmergencyIssues/>
            <NewsFeed/>
        </div>
    );
};

export default Home;