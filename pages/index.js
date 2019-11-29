import React from 'react'
import Head from 'next/head'
import Personal from '../components/Personal'


const Home = () => (
  <div>
    <Head>
      <title>hey there</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Alata&display=swap" rel="stylesheet" />
    </Head>
    <Personal />
  </div>
)

export default Home
