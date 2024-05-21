import { Layout } from 'antd';
import { motion } from 'framer-motion';
import Head from 'next/head';
import React from 'react';

const { Content } = Layout;

import * as S from './MainLayout';

type AdminLayoutProps = {
  title?: string;
  children: React.ReactNode;
};

export default function MainLayout({
  title = 'AiDextrading - web',
  children,
}: AdminLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="AiDextrading - web" />
        <meta name="keywords" content="AiDextrading - web" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="AiDextrading - web" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={typeof window !== 'undefined' ? window.location.href : ''}
        />
        <meta
          property="og:image"
          content="https://cdn-icons-png.flaticon.com/512/124/124021.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content="AiDextrading - web" />
        <meta
          name="twitter:image"
          content="https://cdn-icons-png.flaticon.com/512/124/124021.png"
        />
      </Head>
      <S.AdminLayoutWrap>
        <Layout className="site-layout">
          <Content>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {children}
            </motion.div>
          </Content>
        </Layout>
      </S.AdminLayoutWrap>
    </>
  );
}
