import axios from 'axios';

const pattern = '/^서울/';

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

export const CallAddress = async (page: number) => {
  try {
    const response = await baseApiInstance.get(
      `v2/local/search/address.json?query=`
    );
    return response.data;
  } catch (error) {
    console.log('ERROR: ', error);
  }
};
