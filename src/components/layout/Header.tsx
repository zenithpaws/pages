'use client';

import { Button, Header as MantineHeader, Menu, Modal, Text, TextInput } from '@mantine/core';
import { HiCommandLine, HiOutlineHome, HiOutlineInformationCircle, HiOutlinePaperAirplane, HiOutlineRectangleGroup, HiPaperAirplane, HiRectangleGroup } from 'react-icons/hi2';
import { useEffect, useState } from 'react';

import { CgFormatSlash } from 'react-icons/cg';
import Link from 'next/link';
import styles from './Header.module.css';

type Command = {
  click: () => void;
  icon: JSX.Element;
  name: string;
  right: JSX.Element;
  tag: string;
  link: string;
};

const commands: Command[] = [
  {
    click: () => {
      return;
    },
    icon: <HiOutlineHome className='ml-4 text-lg text-primary' />,
    link: '/',
    name: 'Home',
    right: <></>,
    tag: 'goto navigate go to home /'
  },
  {
    click: () => {
      return;
    },
    icon: <HiOutlineInformationCircle className='ml-4 text-lg text-primary' />,
    link: '/about',
    name: 'About me (/about)',
    right: <></>,
    tag: 'goto navigate go to about /about',
  },
  {
    click: () => {
      return;
    },
    icon: <HiOutlinePaperAirplane className='ml-4 -rotate-45 text-lg text-primary' />,
    link: '/contact',
    name: 'Where you can find me (/contact)',
    right: <></>,
    tag: 'goto navigate go to contact /contact',
  },
  {
    click: () => {
      return;
    },
    icon: <HiOutlineRectangleGroup className='ml-4 text-lg text-primary' />,
    link: '/projects',
    name: 'My projects (/projects)',
    right: <></>,
    tag: 'goto navigate go to project projects /project /projects',
  },
];

export const Header: React.FC<object> = (): JSX.Element => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        const header = document.querySelector('header.mantine-Header-root');
        if (header) {
          header.classList.remove('border-none');
          header.classList.add('border-b');
          header.classList.add('border-primary');

          header.classList.add('bg-[rgba(--var(background-secondary),0.5)]');
          header.classList.add('backdrop-blur-xl');

          header.classList.remove('sm:h-20');
          header.classList.remove('h-14');
          header.classList.add('sm:h-[60px]');
          header.classList.add('h-10');
        }
      } else {
        const header = document.querySelector('header.mantine-Header-root');
        if (header) {
          header.classList.remove('border-b');
          header.classList.remove('border-primary');
          header.classList.add('border-none');

          header.classList.remove('bg-[rgba(--var(background-secondary),0.5)]');
          header.classList.remove('backdrop-blur-xl');

          header.classList.remove('sm:h-[60px]');
          header.classList.remove('h-10');
          header.classList.add('sm:h-20');
          header.classList.add('h-14');
        }
      }
    });

    window.addEventListener('keydown', (event) => {
      if ((document.activeElement as HTMLElement)?.isContentEditable) return;

      if (event.ctrlKey && event.key === 'p') {
        event.preventDefault();

        setOpened(true);
      }

      if (event.ctrlKey && event.key === 'd') {
        event.preventDefault();

        const root = document.querySelector(':root');
        root?.setAttribute('data-theme', root?.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
        localStorage.setItem('theme', root?.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
      }
    });
  });

  const [opened, setOpened] = useState(false);
  const [query, setQuery] = useState('');

  return (
    <>
      <MantineHeader className='fixed left-0 top-0 z-50 mt-2 box-border flex h-12 w-screen items-center justify-between border-none bg-transparent sm:h-20 md:mt-0' height={72}>
        <div className='ml-2 flex items-center sm:ml-4'>
          <Link aria-label='Go to homepage' className='float-left ml-2 flex items-center sm:ml-4' href='/'>
            <div className='float-left mr-2 rounded-md bg-accent-secondary'>
              <CgFormatSlash className='text-2xl text-invert-secondary' />
            </div>
            <p className='float-left hidden font-jakarta text-[19px] font-bold sm:block'>
              <span className='text-primary'>zenithpaws</span>
              <span className='text-accent-secondary'>.dev</span>
            </p>
          </Link>

          <Link className='float-left ml-8' href='/about'>
            <p className='float-left font-jakarta text-sm font-semibold'>
            <span className='text-accent-secondary transition-colors hover:text-accent-secondary-hover'>About</span>
            </p>
          </Link>

          <div className='mx-3 size-[3px] rounded-[50%] bg-[rgb(var(--text-secondary))]'></div>

          <Link className='float-left' href='/projects'>
            <p className='float-left font-jakarta text-sm font-semibold'>
              <span className='text-accent-secondary transition-colors hover:text-accent-secondary-hover'>Projects</span>
            </p>
          </Link>

          <div className='mx-3 size-[3px] rounded-[50%] bg-[rgb(var(--text-secondary))]'></div>

          <Link className='float-left' href='/contact'>
            <p className='float-left font-jakarta text-sm font-semibold'>
              <span className='text-accent-secondary transition-colors hover:text-accent-secondary-hover'>Contact</span>
            </p>
          </Link>
        </div>

        <Menu
          styles={{
            dropdown: {
              '.mantine-Menu-item[data-hovered=true]': {
                backgroundColor: 'rgba(var(--background-accent-secondary),0.25)',
                color: 'rgb(var(--text-accent-hover))',
              },
              backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(var(--background-secondary), 0.75)',
              border: '1px solid rgb(var(--border-primary))',
              borderRadius: '0.5rem',
              color: 'rgb(var(--text-primary))',
              padding: '2rem',
            },
          }}>
          <Menu.Dropdown className='p-2'>
            <Menu.Item
              className='rounded-lg bg-transparent font-jakarta font-semibold text-accent-secondary transition-colors hover:bg-[rgba(var(--background-accent-primary-hover),0.2)] hover:text-accent-secondary-hover'
              icon={<HiRectangleGroup />}>
              <Link href='/projects'>Projects</Link>
            </Menu.Item>

            <Menu.Item
              className='rounded-lg bg-transparent font-jakarta font-semibold text-accent-secondary transition-colors hover:bg-[rgba(var(--background-accent-primary-hover),0.2)] hover:text-accent-secondary-hover'
              icon={<HiPaperAirplane />}>
              <Link href='/contact'>Contact</Link>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
        <div className='flex items-center'>
          <Button
            unstyled
            aria-label='Open command palette'
            className='mr-4 h-10 translate-y-0 rounded-lg bg-secondary px-3 font-sans font-semibold text-primary transition-colors hover:bg-secondary active:translate-y-px'
            onClick={() => {
              setOpened(true);
            }}>
            <div className='flex items-center'>
              <HiCommandLine className='inline-block items-center text-sm' />
              <span className='ml-2 hidden text-sm font-medium lg:inline-block'>Command Palette</span>
              <span className='pointer-events-none ml-3 hidden rounded-sm border border-b-2 border-primary bg-primary p-1 py-[4px] font-mono text-3xs text-primary lg:inline-block'>CTRL</span>
              <span className='ml-1 hidden pb-1 text-3xs lg:inline-block'>+</span>
              <span className='pointer-events-none ml-1 hidden rounded-sm border border-b-2 border-primary bg-primary p-1 py-[4px] font-mono text-3xs text-primary lg:inline-block'>P</span>
            </div>
          </Button>
        </div>
      </MantineHeader>
      <Modal
        centered
        styles={{
          body: { padding: '6px' },
          content: {
            backgroundColor: 'rgb(var(--background-primary))',
            border: '1px solid rgba(rgb(var(--border-primary)), 0.35)',
            borderRadius: '0.5rem',
            maxHeight: '600px',
            overflow: 'hidden',
            padding: '0px !important',
            width: '600px',
          },
          root: { padding: '0px' },
        }}
        opened={opened}
        p={1}
        withCloseButton={false}
        onClose={() => setOpened(false)}>
        <TextInput
          styles={{
            input: {
              ':focus': { borderColor: 'transparent' },
              backgroundColor: 'rgb(var(--background-secondary-hover))',
              borderColor: 'transparent',
              borderRadius: '0.5rem',
              boxSizing: 'border-box',
              color: 'rgb(var(--text-primary))',
              fontFamily: "'JetBrains Mono'",
              fontSize: '0.75rem',
              margin: '10px',
              width: 'calc(100% - 20px)',
            },
          }}
          onChange={(event) => {
            setQuery(event.target.value.toLowerCase());
          }}
        />
        <div className={`${styles.header} max-h-[500px] overflow-auto`}>
          {commands.map((command) =>
            query.split(' ').every((value) => command.tag.includes(value)) ? (
              <Link key={command.tag} passHref href={command.link}>
                <div className='relative flex h-10 cursor-pointer flex-row items-center hover:bg-primary-hover'>
                  {command.icon}
                  <Text className='ml-3 font-jakarta text-sm text-primary'>{command.name}</Text>
                  <div className='absolute right-0 mr-3 flex items-center'>{command.right}</div>
                </div>
              </Link>
            ) : (
              <></>
            )
          )}
        </div>
      </Modal>
    </>
  );
};
