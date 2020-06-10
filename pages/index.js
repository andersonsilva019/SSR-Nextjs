import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Home = () => (

  <div>
    <Head>
      <title>Home</title>
    </Head>

    <Link href="/user">
      <a>User</a>
    </Link>
  </div>
);

export default Home;