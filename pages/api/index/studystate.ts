import type { NextApiRequest, NextApiResponse } from 'next'
import { studystate } from '../../../type'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<studystate>
) {
  res.status(200).json(
    {
      will: [
          {
              "imgurl": "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg"
          },
          {
              "imgurl": "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg"
          },
          {
              "imgurl": "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg"
          },
          {
              "imgurl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg"
          }
      ],
      ing: [
          {
              "imgurl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-plain.svg"
          }
      ],
      can: [
          {
              "imgurl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
          },
          {
              "imgurl": "https://dxlib.xsrv.jp/Image/DxLogo.jpg"
          },
          {
              "imgurl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
          },
          {
              "imgurl": "https://cdn.worldvectorlogo.com/logos/django.svg"
          },
          {
              "imgurl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
          },
          {
              "imgurl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg"
          },
          {
              "imgurl": "https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg"
          },
          {
              "imgurl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
          },
          {
              "imgurl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg"
          },
          {
              "imgurl": "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/selenium-logo.svg"
          },
          {
              "imgurl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
          },
          {
              "imgurl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
          },
          {
              "imgurl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
          },
          {
              "imgurl": "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
          },
          {
              "imgurl": "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
          },
          {
              "imgurl": "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg"
          },
          {
              "imgurl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
          },
          {
              "imgurl": "https://cdn.worldvectorlogo.com/logos/aws-ec2.svg"
          },
          {
              "imgurl": "https://www.vectorlogo.zone/logos/nginx/nginx-ar21.svg"
          },
          {
              "imgurl": "https://cdn.worldvectorlogo.com/logos/github-icon.svg"
          },
          {
              "imgurl": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_Apps_Script.svg"
          }
      ]
  }
  )
}