import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Router from 'next/router'

import withGA from 'next-ga';

const Home = () => (

  <div>
    <Head>
      <title>Home</title>
    </Head>
    <img src="/static/cart.png" alt="etst" width="200"/>
    <Link href="/user">
      <a>User</a>
    </Link>
  </div>
);

export default withGA("Page view", Router)(Home);