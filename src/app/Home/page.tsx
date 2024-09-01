'use client';
import React from 'react';
import axios from 'axios';
import useSWR from 'swr';

// https://digi-api.com/api/v1/digimon/101

const Home = () => {
  const fetcher = (url: string) =>
    axios.get(url).then((res) => res.data);
  const { data, isLoading, error } = useSWR(
    'https://digi-api.com/api/v1/digimon/101',
    fetcher
  );
  console.log(data);

  return <div>dummy</div>;
};

export default Home;
