// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};


const REST_API_KEY = process.env.REST_API_KEY;

const baseURL = `https://dapi.kakao.com/`;

const headers = {
  'Content-Type': 'application/json',
};

const baseApiInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `KakaoAK 46ddd2a3fad8c2c88bdfef2b79483423`,
  },
});

export default async function CallMap( req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const response = await baseApiInstance.get(
      `v2/maps/sdk.js?appkey=46ddd2a3fad8c2c88bdfef2b79483423&libraries=services,clusterer`
    );
    return response.data;
  } catch (error) {
    console.log('ERROR: ', error);
  }
};