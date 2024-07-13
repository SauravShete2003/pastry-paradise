import logo from "./Designer.png";
import insta from "./instagram.png";
import linkedin from "./linkedin.png";
import facebook from "./facebook.png";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer-container">
      <img src={logo} className="pastry-paradise-logo" alt="logo"/>
      <div className="links-container">
        <a href="https://www.instagram.com/saurav_shete_patil/">
          <img
            src={insta}
            alt="instagram"
            className="
      social-media-icon"
          />
        </a >
        <a href="https://m.facebook.com/saurav.shete.10/">
          <img
            src={facebook}
            alt="facebook"
            className="
      social-media-icon"
          />
        </a>
        <a href="https://www.linkedin.com/in/saurav-shete/">
          <img
            src={linkedin}
            alt="linkedin"
            className="
      social-media-icon"
          />
        </a>
        <a href="https://peerlist.io/saurav_shete">
          <img
            src="https://media.licdn.com/dms/image/C4D0BAQGjCtiL8FcUcw/company-logo_200_200/0/1646835555233/peerlist_logo?e=2147483647&v=beta&t=5-raV6b7AI36OcSWiuqE6TrGkaNehuqRQa9OYwobaLs"
            className="social-media-icon"
            alt="peerlist"
          />
        </a>
      </div>
      <p className="public-date">
        Copyright © 2024 Pastry Paradise. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
