import React from 'react';
import Head from 'next/head';
import EFApp from '../components/eternal-friends/EFApp';

const Home = () => (
  <div>
    <Head>
      <title>eternal friends</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Courier+Prime:400,400i&display=swap" rel="stylesheet"></link>
    </Head>
    <EFApp />
  </div>
)

export default Home
