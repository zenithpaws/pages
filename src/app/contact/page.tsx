'use client';

import { Text, Title } from '@mantine/core';
import { SiInstagram, SiModrinth, SiLinktree, SiMastodon, SiTiktok, SiYoutube, SiTwitter, SiTwitch, SiTelegram, SiGithub, SiApplemusic, SiDiscord } from 'react-icons/si';

import { Header } from '@/components/layout/Header';
import styles from './page.module.css';

/**
 * @description - Contact page (/contact).
 * @return {JSX.Element} - Contact page.
 */

const Contact = () => {
  return (
    <>
      <Header />
      <main className='m-0 flex items-center justify-center p-0'>
        <div className={`${styles.grid} absolute left-0 top-0 -z-50 m-0 h-[40rem] w-full p-0`}>
          <div className='relative size-full'>
            <div className={`${styles.gridInner} absolute size-full`}></div>
          </div>
        </div>

        <div className='relative mx-4 mt-8 box-border flex flex-col items-start gap-8 p-0 px-1 sm:mx-8 sm:mt-12 md:mt-20 md:flex-row lg:w-240 xl:w-330'>
          <div className={`${styles.slideFromLeft} flex-1 md:ml-8 lg:mr-12 lg:mt-16`}>
            {/* eslint-disable-next-line tailwindcss/no-contradicting-classname */}
            <Title className='mt-10 font-jakarta text-[1.9rem] font-medium tracking-normal text-primary antialiased sm:text-[3rem] md:text-[4rem] xl:text-[4.5rem]'>
              <span>Where you can find me</span>
            </Title>

            {/* eslint-disable-next-line tailwindcss/no-contradicting-classname */}
            <Text className='mt-2 w-full font-jakarta text-[0.95rem] font-medium text-secondary md:mt-4 md:w-9/12 md:text-[1.25rem] md:font-light xl:text-[1.35rem]'>
              You can find me on <span className={`${styles.bolded}`}> Discord</span>, <span className={`${styles.bolded}`}>Telegram</span>, <span className={`${styles.bolded}`}>X/Twitter</span>,{' '}
              <span className={`${styles.bolded}`}>Mastodon</span> and more!
            </Text>
          </div>

          <div className='mt-24 flex w-full flex-col md:w-auto'>
            <Text className='mb-3 font-jakarta text-[13px] text-primary'>Platforms</Text>
            <div className='flex flex-row flex-wrap items-center gap-3 text-2xl text-secondary md:gap-4 md:text-[27px]'>
              <a href='https://linktr.ee/zenithpaws' target='_blank' rel='noopener noreferrer'>
                <SiLinktree className={`${styles.techIcon} hover:text-[#43e660]`} />
              </a>
              <div className={`${styles.techIcon} h-3 w-0 border-r border-r-[rgb(var(--text-secondary))]`} />
              <a href='https://discord.com/users/487638433179762688' target='_blank' rel='noopener noreferrer'>
                <SiDiscord className={`${styles.techIcon} hover:text-[#5865F2]`} />
              </a>
              <a href='https://t.me/zenithpaws' target='_blank' rel='noopener noreferrer'>
                <SiTelegram className={`${styles.techIcon} hover:text-[#27A7E7]`} />
              </a>
              <div className={`${styles.techIcon} h-3 w-0 border-r border-r-[rgb(var(--text-secondary))]`} />
              <a href='https://instagram.com/zenithpaw' target='_blank' rel='noopener noreferrer'>
                <SiInstagram className={`${styles.techIcon} hover:text-[#C13584]`} />
              </a>
              <a href='https://x.com/zenithpaws' target='_blank' rel='noopener noreferrer'>
                <SiTwitter className={`${styles.techIcon} hover:text-[#1D9BF0]`} />
              </a>
              <a href='https://yip.gay/@zenithpaws' target='_blank' rel='noopener noreferrer'>
                <SiMastodon className={`${styles.techIcon} hover:text-[#17063B]`} />
              </a>
              <div className={`${styles.techIcon} h-3 w-0 border-r border-r-[rgb(var(--text-secondary))]`} />
              <a href='https://youtube.com/@zenithpaws' target='_blank' rel='noopener noreferrer'>
                <SiYoutube className={`${styles.techIcon} hover:text-[#FF0000]`} />
              </a>
              <a href='https://twitch.tv/zenithpaws' target='_blank' rel='noopener noreferrer'>
                <SiTwitch className={`${styles.techIcon} hover:text-[#9146FF]`} />
              </a>
              <a href='https://tiktok.com/@zenithpaws23' target='_blank' rel='noopener noreferrer'>
                <SiTiktok className={`${styles.techIcon} hover:text-[#FE2C55]`} />
              </a>
              <a href='https://music.apple.com/profile/zenithpaws' target='_blank' rel='noopener noreferrer'>
                <SiApplemusic className={`${styles.techIcon} hover:text-[#f94c57]`} />
              </a>
              <div className={`${styles.techIcon} h-3 w-0 border-r border-r-[rgb(var(--text-secondary))]`} />
              <a href='https://github.com/zenithpaws' target='_blank' rel='noopener noreferrer'>
                <SiGithub className={`${styles.techIcon} hover:text-[#211F1F]`} />
              </a>
              <a href='https://modrinth.com/user/zenithpaws' target='_blank' rel='noopener noreferrer'>
                <SiModrinth className={`${styles.techIcon} hover:text-[#1bd96a]`} />
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Contact;
