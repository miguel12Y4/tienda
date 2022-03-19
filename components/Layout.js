import React, { useRef, useState } from 'react';
import styles from '../styles/layout.module.css';

import Link from 'next/link'


export default function Layout({ children }) {
  const [openNav, setOpenNav] = useState(false);

  const obj = useRef()

  const handleNav = () => {
    if (openNav === false) {

    }
    setOpenNav(e => !e)
  }

  const handleSubmit = (ev)=>{
    ev.preventDefault();
    alert('Lo sentimos esta funcion no está implementada aún')
  }
  return (
    <div className={styles.d}>
      <div className={styles.navF}>
        <div className={styles.containerHeader}>
          <header className={styles.header}>
            <div className={styles.logo}>
              <img src="https://picsum.photos/81" alt="" />
            </div>
            <div className={styles.search}>
              <form onSubmit={ev => handleSubmit(ev)}>
                <input type="text" name="" id="" />
                <button type="submit" className={styles.btnSearch}>
                  <img src="/iconos/lupa.png" alt="" />
                </button>
              </form>
            </div>
            <span className={styles.movil} onClick={handleNav}>
              {openNav ?
                <img className={styles.btnAnimX} src="/iconos/x.png" alt="" />
                : <img className={styles.btnAnimO} src="/iconos/hamburguesa.png" alt="" />}
            </span>
            <nav>
              <ul className={styles.navOriginal}>
                <li>
                  <Link href="/">
                    <a>
                      Home
                    </a>
                  </Link>
                </li>
                <li><Link href="/productos">
                  <a>
                    Productos
                  </a>
                </Link></li>
                <li><Link href="/contacto">
                  <a>
                    Contacto
                  </a>
                </Link></li>
              </ul>
            </nav>
          </header>
          <nav>
            <div className={openNav ? styles.navResponseMostrada : " " + " " + styles.navResponseOculto}>
              <ul className={""}>
                <li onClick={() => setOpenNav(false)}>
                  <Link href="/">
                    <a>
                      Home
                    </a>
                  </Link>
                </li>
                <li onClick={() => setOpenNav(false)}><Link href="/productos">
                  <a>
                    Productos
                  </a>
                </Link></li>
                <li onClick={() => setOpenNav(false)}><Link href="/contacto" onClick={() => setOpenNav(false)}>
                  <a>
                    Contacto
                  </a>
                </Link></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      {children}
      <footer className={styles.footer}>
        <div>
          <span>© Miguel Saavedra Aravena</span>
        </div>
        <div>
          <a href="https://github.com/miguel12Y4">
            <img src="/images/github.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/miguel12y4/">
            <img src="/images/linkedin.png" alt="" />
          </a>
        </div>

        <div className={styles.datos}>
          <div>
            <img src="/iconos/phone.png" alt="" />
            <a href="tel:+56931204154">+56-931204154</a>
          </div>
          <div>
            <img src="/iconos/email.png" alt="" />
            <a href="mailto:miguel12y4@gmail.com">miguel12y4@gmail.com</a>
          </div>
        </div>

      </footer>
    </div>
  )
}
