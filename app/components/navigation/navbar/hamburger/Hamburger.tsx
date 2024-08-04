import styles from "./Hamburger.module.css";
import Close from "../close/Close";
interface HamburgerProps {
  isClicked: boolean;
  setIsClicked: (isClicked: boolean) => void;
}
const Hamburger: React.FC<HamburgerProps> = ({ isClicked, setIsClicked }) => {
  return (
    <div onClick={() => setIsClicked(!isClicked)} className={styles.img}>
      {isClicked ? (
        <Close />
      ) : (
        <img className={styles.img} src="hamburger.svg" alt="" />
      )}
    </div>
  );
};

export default Hamburger;
