import recepies from "@/public/recepies";
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Recepies = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <ul>
          {recepies.map((recepie) => (
            <li key={recepie.name}>
              <Link href={`recepies/${recepie.name}`}>{recepie.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Recepies;
