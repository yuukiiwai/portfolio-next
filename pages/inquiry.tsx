import { NextPage } from "next";
import Head from "next/head";
import Sns from "../component/index/sns";
import Nav from "../component/nav";

const Inquiry : NextPage = () => {
    return(
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
        <Sns openCodeS="コード" contactS="SNS"/>
      </div>
    )
}
export default Inquiry;