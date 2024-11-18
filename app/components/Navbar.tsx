"use client"

import { useState } from 'react'
import  styles from './Navbar.module.css';
import Link from "next/link";


function Navbar() {
    // adding the states 
    const [isActive, setIsActive] = useState(false);

    //add the active class
    const toggleActiveClass = () => {
      setIsActive(!isActive);
    };
    
    //clean up function to remove the active class
    const removeActive = () => {
      setIsActive(false)
    }
    
    return (
      <div className={`${styles.app}`}>
        <header className={`${styles.appHeader}`}>
          <nav className={`${styles.navbar}`}>
            
            <Link className={`${styles.logo}`} href="/">Início</Link>
            
            <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            
              <li onClick={removeActive}>
                <Link className={`${styles.navLink}`} href="/about">Sobre</Link>
              </li>

              <li onClick={removeActive}>
                <Link className={`${styles.navLink}`} href="/quiz">Quiz</Link>
              </li>

              <li onClick={removeActive}>
                <a target="_blank" href='https://github.com/adaoduque/Brasileirao_Dataset' className={`${styles.navLink}`}>Dados</a>
              </li>

              <li onClick={removeActive}>
                <a target="_blank" href='https://github.com/ti-a-go/quiz-brasileirao' className={`${styles.navLink}`}>Github</a>
              </li>

            </ul>

            <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
            </div>
          
          </nav>
        </header>
      </div>
    );
  }
  export default Navbar;;