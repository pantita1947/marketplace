import React, { Component } from 'react'
import { Login } from '../components/Login'
import styles from '../styles/Home.module.css'
import { useWeb3 } from "@3rdweb/hooks"

export default class login extends Component {
  
  render() {
    return (
      <div>
        <center>
          <div className={styles.Style_header2}>เชื่อมต่อกระเป๋าตังค์ของคุณ</div>
          <div className={styles.blank}></div>
          <Login/>
          
        </center>
      </div>
    )
  }
}
