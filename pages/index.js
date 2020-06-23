import React from 'react'
import Head from 'next/head'
import Personal from '../components/Personal'


const Home = () => (
  <div>
    <Head>
      <title>hey there</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Alata&display=swap" rel="stylesheet" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="ray sosseh's page"></meta>
      <meta name="description" content="my name's ray sosseh and i like making stuff for the internet" />
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
    </Head>
    <Personal />
  </div>
)

export default Home
