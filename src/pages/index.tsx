import React from 'react';
import Head from 'next/head';

import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
  const name = `my-name ${Date.now()}`;

  if (name === '1212312') {
    console.warn('test');
  }

  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <h1>{name} - ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure made by Rocketseat.</p>
    </Container>
  );
};

export default Home;
