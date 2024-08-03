import Link from "next/link";
import React from "react";
import Logo from "./logo/Logo";
import Button from "./button/Button";
import styles from "./index.module.css";

const Navbar = () => {
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
        </div>
      </div>
    </>
  );
};

export default Navbar;
