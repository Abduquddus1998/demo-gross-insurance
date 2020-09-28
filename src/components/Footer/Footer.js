import React from "react";

import FooterMap from "components/Map/Map";

import Telegram from "assets/images/telegram.png";
import InstagramIcon from "assets/images/intagram-icon.png";
import FacebookIcon from "assets/images/fecebook-icon.png";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-addresses">
        <div className="title">
          <h3>Свяжитесь с нами!</h3>
        </div>
        <div className="phones-mails">
          <div className="phones">
            <div>
              <h5>Телефон:</h5>
            </div>
            <div>+000 00 000 00 00</div>
            <div>+000 00 000 00 00</div>
            <div>+000 00 000 00 00</div>
          </div>
          <div className="mails">
            <div>
              <h5>Email:</h5>
            </div>
            <div>bbbbbbbb@mail.ru</div>
            <div>cccccccc@mail.ru</div>
          </div>
        </div>
        <div className="social-networks">
          <div>
            <h5>Cоциальные сети:</h5>
          </div>
          <div>
            <img src={FacebookIcon} alt="Instagram" />
          </div>
          <div>
            <img src={InstagramIcon} alt="Telegram" />
          </div>
          <div>
            <img src={Telegram} alt="Facebook" />
          </div>
        </div>
      </div>
      <div className="map-container">
        <FooterMap />
        <div>Адрес: г. Ташкент, Яшнабадский р-н, ул. Паркентская 327а</div>
      </div>
      <div className="review-form">
        <div>
          <h4>Review</h4>
        </div>
        <input type="text" className="form-control" placeholder="Nick..." />
        <input type="email" className="form-control" placeholder="Email..." />
        <textarea className="form-control" />
        <button type="button" className="btn btn-success">
          Send
        </button>
      </div>
    </div>
  );
};

export default Footer;
