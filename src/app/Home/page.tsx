'use client';
import React from 'react';
import { useCustomSWR } from '../hooks/useCustomSWR';

// https://digi-api.com/api/v1/digimon/101
const testEndpoint = 'https://dummyjson.com/todos';

type Todo = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

type Data = {
  todos: Todo[];
};

const Home = () => {
  const { data, error, isLoading } = useCustomSWR<Data>(
    '/todos',
    {
      baseURL: 'https://dummyjson.com',
    }
  );
  console.log(data);
  return <div>dummy</div>;
};

export default Home;
