import Link from "next/link";
import React from "react";
import styles from "./Sidebar.module.css";
interface SidebarProps {
  isClicked: boolean;
  setIsClicked: (isClicked: boolean) => void;
}
const Sidebar: React.FC<SidebarProps> = ({ isClicked, setIsClicked }) => {
  return (
    <>
      <ul
        className={`${styles.wrapper} ${
          isClicked ? styles.active : styles.inactive
        }`}
      >
        <li>
          <Link href="/about" onClick={() => setIsClicked(false)}>
            <p>About Us</p>
          </Link>
        </li>
        <li>
          <Link href="/services" onClick={() => setIsClicked(false)}>
            <p>Services</p>
          </Link>
        </li>
        <li>
          <Link href="/contacts" onClick={() => setIsClicked(false)}>
            <p>Contacts</p>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
