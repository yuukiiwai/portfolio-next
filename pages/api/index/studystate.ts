import type { NextApiRequest, NextApiResponse } from 'next'
import { studystate } from '../../../type'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<studystate>
) {
  res.status(200).json(
    {
        "will": [
            {
                "imgurl": "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
                "tech": "Flutter"
            }
        ],
        "ing": [
            {
                "imgurl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-plain.svg",
                "tech": "Rust"
            }
        ],
        "can": [
            {
                "imgurl": "https://dxlib.xsrv.jp/Image/DxLogo.jpg",
                "tech": "DXライブラリ"
            }
        ]
    }
  )
}