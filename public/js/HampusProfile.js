import {Carousel, Image} from "react-bootstrap";
import styles from '../../styles/generic.module.css';

export default function Logo() {
  return ( <Image
      className={styles.logo}
      src={"/images/hampusProfile.jpg"}
      alt="profile picture"/>);
};