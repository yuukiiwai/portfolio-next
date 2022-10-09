// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type workType = {
  title:string,
  url:string,
  backgroundimg:string,
  usageimg:string,
  sentence:string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<workType[]>
) {
  res.status(200).json([{ 
    title: "nanika",
    url:"https://xyz",
    backgroundimg:"https://deliver.cdn.nicomanga.jp/thumb/3521965p",
    usageimg:"https://images-yukiserv-com.s3.ap-northeast-1.amazonaws.com/saitekishoukai.gif",
    sentence:"<h3>kokodayo</h3><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p><p>kondaku</p>"
  }])
}
