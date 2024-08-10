"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { db } from "../../lib/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const Recepies = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "recepies"));
        const recepies = [];
        querySnapshot.forEach((doc) => {
          recepies.push(doc.data());
        });
        setData(recepies);
        console.log(recepies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <ul>
          {data.map((recepie) => (
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
