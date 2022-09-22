import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { preNews } from '../type/news'
import Mydata from './component/mydata'
import Nav from './component/nav'
import Sns from './component/sns'
import Title from './component/title'

const Home: NextPage = () => {
  useEffect(()=>{
  },[])
  return (
    <div>
      <Head>
        <title>Yuuki Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav
      root=''
      />
      <main className={styles.main}>
        <Title
        name='岩井 優希'
        />
        <Mydata
        dataS='データ'
        name={{
          S:"名前",
          data:"岩井優希"
        }}
        univ={{
          S:"大学",
          data:"芝浦工業大学・システム理工学部・電子情報システム学科"
        }}
        club={{
          S:"サークル",
          data:"デジクリ"
        }}
        />
        <Sns
        openCodeS='公開コード'
        contactS='連絡先'
        />
      </main>
    </div>
  )
}

export default Home
