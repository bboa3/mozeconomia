// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default (req: NextApiRequest, res: NextApiResponse<File>) => {
  if(req.method !== 'POST')
  return res.status(404).end()
  
  
}

