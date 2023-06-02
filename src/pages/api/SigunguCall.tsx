import { Address } from '@/types/Address';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function callAddress(
  req: NextApiRequest,
  res: NextApiResponse<Address[]>
) {
  const address = (await import('../../../Address.json')).default as Address[];
  res.status(200).json(address);
  return address;
}
