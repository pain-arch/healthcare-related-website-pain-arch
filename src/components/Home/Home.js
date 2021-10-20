import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Shortsection from '../Shortsection/Shortsection';
import TopArticles from '../TopArticles/TopArticles';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>        
            <Services></Services>
            <Shortsection></Shortsection>
            <TopArticles></TopArticles>
        </div>
    );
};

export default Home;