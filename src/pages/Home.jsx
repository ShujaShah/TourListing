import React from 'react';
import { Link } from 'react-router-dom';
import PageNav from '../components/PageNav';
import AppNav from '../components/AppNav';

const Home = () => {
  return (
    <div>
      <PageNav />
      <h1>TourListing</h1>
      <AppNav />
    </div>
  );
};

export default Home;
