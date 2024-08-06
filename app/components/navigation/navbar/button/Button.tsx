"use client";
import Link from "next/link";
import styles from "./Button.module.css";

const Button = () => {
  return (
    <>
      <Link href="/login" className={styles.button}>
        Login
      </Link>
    </>
  );
};

export default Button;
