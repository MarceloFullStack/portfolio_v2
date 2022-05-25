// injection req authorization middlware nextjs
import { NextApiRequest, NextApiResponse } from 'next';

export const middleware = (req: NextApiRequest, res: NextApiResponse, next: any) => {
  console.log('middleware');
  // if (req.headers.authorization) {
  //   next();
  // } else {
  //   req.headers.authorization = 'Basic ZTRiNGViOTItZDUxYi00NGY0LTljYWMtY2M1MGZkM2M0ZDk3'
  //   next();
  // }
  //   return res.status(401).json({ message: 'Unauthorized' });
};