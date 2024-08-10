import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <main className={styles.container}>
          <h1 className={styles.headline}>Welcome to my World!</h1>
        </main>
      </div>
    </>
  );
}
