import React, { Component } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
export default class aboutus extends Component {
  render() {
    return (
      <div>
        
        <Head>
          <title>About Us </title>
        </Head>
        <main className={styles.main}>
          <center>
            <div className={styles.Style_header}>บริษัท มาร์เกตแลนด์ จำกัด</div>
            <div className={styles.Style_Q}>รับฝากขายบ้าน ที่ดิน ซื้อ - ขาย อสังหาริมทรัพย์ ทุกประเภท</div>
            <div className={styles.Style_liner}></div>
            <div>บริษัท มาร์เกตแลนด์ จำกัด เกิดจากการรวมมือกันของทีมงานมืออาชีพ มากประสบการณ์ <br></br>โดยมีความมุ่งมั่นในการพัฒนาให้บริการด้านการซื้อ - ขาย อสังหาริมทรัพย์ <br></br>ผ่านระบบ blockchain ให้กับลูกค้าที่สนใจ บ้าน หรือที่ดิน</div>
          </center>
          <div className={styles.blank}></div>
          <div className={styles.Style_header2}>... คิดถึงบ้าน คิดถึงมาร์เกตแลนด์ &#128155;</div>
          <div className={styles.blank}></div><div className={styles.blank}></div><div className={styles.blank}></div>
          <div className={styles.blank}></div><div className={styles.blank}></div><div className={styles.blank}></div>
          <div className="row align-items-center">
          <div className="col-lg-6 mb-10px">
            <div className="contact-detail">
              <div className={styles.Style_topic}> สอบถามรายละเอียดเพิ่มเติม </div>
              <div className={styles.Style_ans}>บริษัท มาร์เกตแลนด์ จำกัด  111 มหาวิทยาลัยเทคโนโลยีสุรนารี ต.สุรนารี อ.เมือง จ.นครราชสีมา 30000</div>
            </div>
              <div className="d-flex mr-20px mb-5px"> &#128222;0822031861 <br /> &#128231;b6221232@g.sut.ac.th</div> 
          </div>
        <div className="col-lg-6 d-flex justify-content-center">
          <div className="box-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.9911822026525!2d102.01850751476258!3d14.881771489623883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311eada1f2cc53f1%3A0x10533e4b3f07a09f!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14Liq4Li44Lij4LiZ4Liy4Lij4Li1!5e0!3m2!1sen!2sth!4v1660040690323!5m2!1sen!2sth" width={450} height={300} style={{border: 0}} allowFullScreen></iframe>
          </div>
        </div>
      </div>
        </main >
        <Footer />


      </div>
    )
  }
}
