import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import { AppBar, Footer, DragMove } from '../components/index'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Home Page</title>
      </Head>
      <AppBar />
      <h1>Jurandi Viadin</h1>
    </Container>
  )
}

export default Home
