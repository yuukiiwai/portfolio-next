import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Nav from '../component/nav'
import Page1 from '../component/index/page1'
import Page2 from '../component/index/page2'
import Page3 from '../component/index/page3'
import Page4 from '../component/index/page4'

const Home: NextPage = () => {
  useEffect(()=>{
  },[])
  return (
    <div>
      <Head>
        <title>岩井優希 | ポートフォリオサイト</title>
        <meta name="description" content="岩井優希　ポートフォリオサイト　成果物、直近のテックブログ(note)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav
      lang='ja'
      root=''
      />
      <main className={styles.main}>
        <Page1/>
        <Page2/>
        <Page3/>
        <Page4 />
      </main>
    </div>
  )
}

export default Home
