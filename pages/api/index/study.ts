import type { NextApiRequest, NextApiResponse } from 'next'

type studystate = {
  will:string[]
  ing:string[]
  can:string[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<studystate>
) {
  res.status(200).json({
    will:[
      "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
      "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
      "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
      "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg"
    ],
    ing:[
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-plain.svg"
    ],
    can:[
      "https://dxlib.xsrv.jp/Image/DxLogo.jpg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
      "https://cdn.worldvectorlogo.com/logos/django.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg",
      "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg",
      "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/selenium-logo.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      "https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg",
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
    ]
  })
}