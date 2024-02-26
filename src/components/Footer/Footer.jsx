import React from "react";
import styles from "./Footer.module.css";
import Logo from "../../assets/Logo.png";
import Insta from "../../assets/Insta.png";
import Facebook from "../../assets/Facebook.png";
import Tweeter from "../../assets/Tweeter.png";
import Pic from "../../assets/Pic.png";

const Footer = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.topBar}>
        <img src={Logo} alt="logo" width={143} height={30.305} />
        <div className={styles.topTexts}>
          <p>Home</p>
          <p>Attorneys</p>
          <p>Practice Areas</p>
          <p>About Us</p>
        </div>
        <div className={styles.logos}>
  <a href="https://www.instagram.com">
    <img src={Insta} alt="Insta" width={30} height={30} />
  </a>
  <a href="https://www.facebook.com">
    <img src={Facebook} alt="Facebook" width={30} height={30} />
  </a>
  <a href="https://twitter.com">
    <img src={Tweeter} alt="Tweeter" width={30} height={30} />
  </a>
  <a href="https://www.example.com">
    <img src={Pic} alt="Pic" width={30} height={30} />
  </a>
</div>

      </div>
      <div className={styles.buttomText}>
        <p>© 2024 Acme. All right reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </div>
  );
};
export default Footer;