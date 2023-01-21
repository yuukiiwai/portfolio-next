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
    {when:"小学1年生",event:"ケータイ捜査官7にドはまりする。自我のある機械に興味を持つ。"},
    {when:"小学5～6年生",event:"ファイ・ブレインにハマり、パズルを自作するようになる。"},
    {when:"中学生",event:"科学部に入部。風力発電の研究をしていた。測定を何度もやる、条件を細かく変化させるなどの実験・研究の根性が身についた。"},
    {when:"中学3年生",event:"スマホの電源が落ちない不具合を直したくてC言語を勉強"},
    {when:"高校1年生後半",event:"CUIプログラムを紹介してもクラスで全く人気になれなかったのでGUIを勉強"},
    {when:"高校3年生",event:"担任の先生が席替えをあまりにも実施しないことに不満が募り、席替えアプリを作成。発表後2日で席替え実施。"},
    {when:"大学1年生春",event:"コロナで学校が無く、暇だった。父からJavaはやったほうがいいと言われ、学習。"},
    {when:"大学1年生夏",event:"U22プログラミングコンテストに参加。Android Javaで少し書けるようになった。"},
    {when:"大学1年生冬",event:"Java Servletで日報を記録するアプリを作った。フロントエンドが欲しくなり、.net C#を勉強し作成した。"}
  ])
}