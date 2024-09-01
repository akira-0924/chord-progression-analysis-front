'use client';
import axios from 'axios';

export const fetcher = async (url: string) => {
  await axios
    .get(url)
    .then((res) => {
      console.log(res);
      console.log('成功');
      return res;
    })
    .catch((error) => {
      console.log(error);
      return 'fetcherエラー';
    });
};
