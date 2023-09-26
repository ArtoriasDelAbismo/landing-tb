import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <section className="footer-section" id="modF">
        <div className="footer-section-left">
          <ul className="social-media">
            <li>
              <a
                href="https://www.instagram.com/tierrabatida/?hl=es"
                className="social"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={require("../../assets/icons/instagram.svg").default} alt="instagram" />
              </a>
            </li>

            <li>
              <a
                href="https://www.facebook.com/tierra.batida.5/?locale=es_LA"
                className="social"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={require("../../assets/icons/facebook.svg").default} alt="facebook" />
              </a>
            </li>

            <li>
              <a
                href="https://tierrabatida.com.ar/"
                className="social"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={require("../../assets/icons/website.svg").default} alt="website" />
              </a>
            </li>
          </ul>
        </div>
        <div className="division-center"></div>

        <div className="footer-section-right">
          <article>
            <div className="phone-social-right">
              <a href="/" className="social-right">
                <img src={require("../../assets/icons/phone.svg").default} alt="phone" />
              </a>
              <p id="text">0342 155682136</p>
            </div>

            <div className="location-social-right">
              <a
                href="https://www.google.com/maps/place/Saavedra+2372,+S3000+Santa+Fe+de+la+Vera+Cruz,+Santa+Fe/@-31.6460971,-60.7158648,17z/data=!3m1!4b1!4m6!3m5!1s0x95b5a9b2288daf75:0xd164fda48bc01a82!8m2!3d-31.6460971!4d-60.7158648!16s%2Fg%2F11jvngbxgc?entry=ttu"
                className="social-right"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={require("../../assets/icons/location.svg").default} alt="location" />
              </a>
              <p id="text">Saavedra 2372 - Santa Fe</p>
            </div>

            <div className="mail-social-right">
              <a href="/" className="social-right">
                <img src={require("../../assets/icons/mail.svg").default} alt="location" />
              </a>
              <p id="text">tierrabatida@gmail.com</p>
            </div>
          </article>
        </div>
      </section>
    </footer>
  );
}

export { Footer };
