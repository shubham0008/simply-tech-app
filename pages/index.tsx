import Head from "next/head";
import React from 'react';
import { Inter } from "@next/font/google";
import { ThemeProvider } from 'theme-ui';
import Layout from '../components/layout';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
    <Layout>
    <Banner/>
    </Layout>
</ThemeProvider>
  );
}


export const theme: Theme = {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
  },
}
