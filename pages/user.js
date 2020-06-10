import React from 'react';
import axios from 'axios';
import Head from 'next/head';

import Link from 'next/link';

const User = ({ users }) => (
  <>
    <Head>
      <title>Users</title>
    </Head>
    
    <div>
      <ul>
        { users.map(user => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
      <Link href="/">
          <a>Home</a>
      </Link>
    </div>
  </>
)

/* Serve para carregar as informações no lado do back-end */

User.getInitialProps = async () => {
  const response = await axios.get(
    'https://api.github.com/orgs/rocketseat/members'
  );

  return { users: response.data }
}

export default User;