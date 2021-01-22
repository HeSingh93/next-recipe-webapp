import {Carousel, Image} from "react-bootstrap";
import styles from '../../styles/mainPage.module.css';

export default function Logo() {
  return ( <Image
      className={styles.logo}
      src={"/images/logoColor.png"}
      alt="logo image"/>);
};