import React from "react";
import styles from "./page.module.css";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2>Login</h2>
        <form className={styles.signInForm}>
          <input
            type="text"
            className={styles.formInput}
            placeholder="Username"
            required
          />
          <input
            type="password"
            className={styles.formInput}
            placeholder="Password"
            required
          />
          <button type="submit" className={styles.submitButton}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
