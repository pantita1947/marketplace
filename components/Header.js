import Link from 'next/link'
import styles from '../styles/Home.module.css'
import React, { Component } from 'react'
import { useWeb3 } from "@3rdweb/hooks"


const Header = () => {
  
    return (
      <header className={styles.navbar}>
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link href="/"><a  className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <h3 className="active" >MARKETLAND</h3>
            </a></Link>
  
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
              <Link href="/profile"><a className="nav-link px-4 text-white">cc</a></Link>
              </li>
              <li>
              <Link href="/profile"><a className="nav-link px-4 text-white">ทรัพย์สินทั้งหมด</a></Link>
              </li>
              <li>
              <Link href="/help"><a className="nav-link px-4 text-white">ช่วยเหลือ</a></Link>
              </li>
              <li>
              <Link href="/aboutus"><a className="nav-link px-4 text-white">เกี่ยวกับเรา</a></Link>
              </li>
            </ul>
  
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input
                type="search"
                className="form-control form-control-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>
  
            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">
                <Link href="/login"><a >ค่อยคิด</a></Link>
              </button>
              <button type="button" className="btn btn-warning" >
              <Link href="/login"><a >Connect Wallet</a></Link>  
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  };
  export default Header;