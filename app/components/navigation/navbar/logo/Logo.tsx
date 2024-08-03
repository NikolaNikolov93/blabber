import Link from "next/link";
import React from "react";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <Link className={styles.logo} href="/">
      <img src="logo.svg" alt="" />
    </Link>
  );
};

export default Logo;
