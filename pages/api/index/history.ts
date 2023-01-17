import type { NextApiRequest, NextApiResponse } from 'next'

type history = {
  when:string
  event:string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<history[]>
) {
  res.status(200).json([
    {when:"2002年",event:"誕生"},
    {when:"中学3年生の頃",event:"スマホの電源が落ちない不具合を直したくてC言語を勉強"},
    {when:"高校1年生後半",event:"CUIプログラムを紹介してもクラスで全く人気になれなかったのでGUIを勉強"},
    {when:"高校3年生",event:"担任の先生が席替えをあまりにも実施しないことに不満が募り、席替えアプリを作成"},
    {when:"大学1年生春",event:"コロナで学校が無く、暇だった。父からJavaはやったほうがいいと言われ、学習。"}
  ])
}