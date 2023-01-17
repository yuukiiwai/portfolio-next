// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type workType = {
  title:string,
  url:string,
  backgroundimg:string,
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
    sentence:`<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRbOvzj75n1gM1--q6sIlMd8fRhlHsyMvVM2TY9upUTtdJBVk9Y4f0BHGOi6C_ar79TstuqK9ea3BdY/embed?start=false&loop=false&delayms=3000" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>`
  }])
}
