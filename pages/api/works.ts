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
    backgroundimg:"https://xyz",
    usageimg:"https://xyz",
    sentence:"<h3>kokodayo</h3><p>kondaku</p>"
  }])
}
