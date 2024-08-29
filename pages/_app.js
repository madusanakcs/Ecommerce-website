import React from 'react'
import { Layout } from '@/components';
import "@/styles/globals.css";
import { StateContext } from '@/context/StateContext';
import { Toaster } from 'react-hot-toast';

console.log(Layout);  // Should log the component function or class
console.log(StateContext);  // Should log the context provider function

export default function App({ Component, pageProps }) {
  return (
  <StateContext>
   <Layout>
     <Toaster/>
     <Component {...pageProps} />
    </Layout>
  </StateContext>
  )
}

