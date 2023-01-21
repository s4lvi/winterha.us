import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import React from "react";
import {Header} from "@/components/header/Header";
import {Footer} from "@/components/footer/Footer";


export default function Home() {
  return (
    <>
      <Head>
        <title>winterha.us</title>
        <meta name="description" content="J M Salvi Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.container}>
        <Header />
        <Footer />
      </section>
    </>
  )
}
