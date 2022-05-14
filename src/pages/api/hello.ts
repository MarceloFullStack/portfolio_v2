// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {wakatimeService} from "../../../utility/axiosServices/wakatimeService";

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const payload = await wakatimeService.getWakatime();
  res.status(200).end(JSON.stringify(payload))
}
