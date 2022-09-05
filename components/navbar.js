import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import { useWeb3, useAccount, useNetwork } from "@3rdweb/hooks"



export default function Navbar() {
  const { address, connectWallet } = useWeb3();
 
 
 
  return (
    <header className={styles.navbar}>
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link href="/"><a  className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <h3 className="active" >MARKETLAND</h3>
            </a></Link>
  
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              {/*<li>
              <Link href="/profile"><a className="nav-link px-4 text-white">cc</a></Link>
  </li>*/}
              <li>
              <Link href="/land"><a className="nav-link px-4 text-white">ทรัพย์สินทั้งหมด</a></Link>
              </li>
              <li>
              <Link href="/help"><a className="nav-link px-4 text-white">ช่วยเหลือ</a></Link>
              </li>
              <li>
              <Link href="/aboutus"><a className="nav-link px-4 text-white">เกี่ยวกับเรา</a></Link>
              </li>
            </ul>
            
  
            <div className="text-end">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg>
              <button type="button" className="btn btn-outline-light me-2" onClick={() => connectWallet("injected")}> install wallet
              </button>
              <button type="button" className="btn btn-warning" onClick={() => connectWallet("injected")} >
              Connect Wallet 
              </button>
              
            </div>
          </div>
        </div>
      </header>
  )
}
