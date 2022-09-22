import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'
import { preNews } from '../../type/news'
import Mydata from '../component/mydata'
import Nav from '../component/nav'
import Sns from '../component/sns'
import Title from '../component/title'

const Home: NextPage = () => {
  const [news,setNews] = useState<preNews[]>([]);
  useEffect(()=>{
    setNews([
      {
        title:"I participated in a direct sourcing event held by LeverTech Rookie.",
        id:0
      }
    ]);
  },[]);
  return (
    <div>
      <Head>
        <title>Yuuki Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav
      lang='en'
      root=''
      />
      <main className={styles.main}>
        <Title
        name='Yuuki Iwai'
        />
        <Mydata
        dataS='DATA'
        name={{
          S:"Name",
          data:"Yuuki Iwai"
        }}
        univ={{
          S:"Univer City",
          data:"Shibaura Institute of Technology / College of Systems Engineering and Science / Department of Electronic Information Systems"
        }}
        club={{
          S:"Club",
          data:"Degi Cre ... (Degital Create)"
        }}
        />
        <Sns
        openCodeS='My Open Source'
        contactS='Contacts'
        />
      </main>
    </div>
  )
}

export default Home
