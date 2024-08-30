'use client';

import { Title, Text } from '@mantine/core';
import { Header } from '@/components/layout/Header';

const About = () => {
  return (
    <>
      <Header />
      <main className='flex min-h-screen flex-col items-center justify-center'>
        <Title className='text-4xl'>About Me</Title>
        <Text className='mt-4 text-xl'>This is the about page of the website.</Text>
      </main>
    </>
  );
};

export default About;
