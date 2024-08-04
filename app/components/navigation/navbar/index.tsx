"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "./logo/Logo";
import Button from "./button/Button";
import styles from "./index.module.css";
import Hamburger from "./hamburger/Hamburger";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Logo />
          <ul className={styles.navbar}>
            <li>
              <Link href="/about">
                <p>About Us</p>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <p>Services</p>
              </Link>
            </li>
            <li>
              <Link href="/contacts">
                <p>Contacts</p>
              </Link>
            </li>
          </ul>
          <Button />
          <div className={styles.hamburger}>
            <Hamburger isClicked={isClicked} setIsClicked={setIsClicked} />
          </div>
          <div>
            <Sidebar isClicked={isClicked} setIsClicked={setIsClicked} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
