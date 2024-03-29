import type { NextApiRequest, NextApiResponse } from 'next'
import { strong } from '../../../type';



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<strong[]>
) {
  res.status(200).json([
    {
      strong:"技術の吸収が早い。",
      exps:["Dockerは3日使って0からEC2デプロイできるまでにした。",
      "Go,Echoを知らない状態から2日でポートフォリオバックエンドを作成した。",
      "Android Javaはライフサイクルも知らない状態から1週間でアプリを作った。"
    ]
    },
    {
      strong:"不満足な部分を意識的に探している。",
      exps:[
        "就活で自己アピールが時間内に終わらないから予めサイトを用意した。",
        "作ったものを公開できないから公開できる場所を作っている。",
        "何を買えばいいか分からないから勝手に良い品を選んでくれるサイトを作っている。"
      ]
    },
    {
      strong:"手段の切り替えが苦にならない。",
      exps:[
        "ノートアプリを作るときにp5.jsで途中まで作ったが、拡張性からKonvaに切り替え",
        "アルバイト先の業務課題をwebサイトで解決しようとして作成していたが、チャットボットに切り替え",
      ]
    }
  ]);
}