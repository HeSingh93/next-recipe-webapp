import {Image} from "react-bootstrap";
import styles from '../../styles/mainPage.module.css';

function MainRecipePlaceHolder() {
  return (<Image
      className={styles.logo}
      src={"/images/logoColor.png"}
      alt="logo image"/>);
}

export default MainRecipePlaceHolder;