'use client';
import { customApiClient } from '../(api)/apiClient';
import useSWR, { BareFetcher, Fetcher } from 'swr';

type AxiosOption = {
  baseURL?: string;
};

// export const useCustomSWR = <Data>(
//   key: string,
//   bareFetcher:
//     | BareFetcher<Data>
//     | undefined
//     | null = undefined,
//   config: any,
//   axiosOption: AxiosOption = {}
// ) => {
//   const fetcher = getFetcher(bareFetcher, axiosOption);
//   return useSWR<Data, Error>(key, fetcher, config);
// };
export const useCustomSWR = <Data>(
  key: string,
  axiosOption: AxiosOption = {}
) => {
  const fetcher = getFetcher(axiosOption);
  return useSWR<Data, Error>(key, fetcher);
};

const getFetcher = <Data>(
  // fetcher: BareFetcher<Data> | null | undefined,
  axiosOptions: AxiosOption = {}
) => {
  // if (fetcher === undefined) {
  const apiClient = customApiClient(axiosOptions);
  return (url: string) =>
    apiClient.get(url).then((res) => res.data);
  // }
  // return fetcher;
};
