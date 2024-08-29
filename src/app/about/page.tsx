'use client';

import { Title, Text } from '@mantine/core';
import { Header } from '@/components/layout/Header';

// set theme
localStorage.setItem('theme', "dark");
document.documentElement.setAttribute('data-theme', "dark");

const About = () => {
    return (
        <>
            <Header />
            <main className='flex flex-col items-center justify-center min-h-screen'>
                <Title className='text-4xl'>About Me</Title>
                <Text className='mt-4 text-xl'>This is the about page of the website.</Text>
            </main>
        </>
    );
};

export default About;