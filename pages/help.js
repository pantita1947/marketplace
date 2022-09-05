import React, { Component } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default class help extends Component {
  render() {
    return (
      <div>
        
        <Head>
            <title>Marketland</title>
        </Head>
        <main className={styles.box}>
            <div className={styles.Style_header}>คำถามที่พบบ่อย &#10067;</div>
            <div className={styles.blank}></div>
            <div className={styles.Style_Q}>&#128204; ซื้อที่ดินผ่าน Marketland ดีอย่างไร</div>
           {/* <div  style="animation-fill-mode: both; animation-duration: 100ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1; animation-name: react-reveal-433221355860038-3;">ddddd</div>
*/}

            
            <div></div>
            <div className={styles.Style_line}></div>
            <div className={styles.Style_Q}>&#128204; Connect wallet ทำอย่างไร</div>
            <div className={styles.Style_ans} >อย่างเดียว!</div>
            <div className={styles.Style_line}></div>
            

        </main >
        <Footer />
      </div>
    )
  }
}
