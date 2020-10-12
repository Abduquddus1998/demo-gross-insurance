import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import FooterMap from "components/Map/Map";

import { postUserReview } from "store/actions/main";

import Telegram from "assets/images/telegram.png";
import InstagramIcon from "assets/images/intagram-icon.png";
import FacebookIcon from "assets/images/fecebook-icon.png";

import "./Footer.scss";

const Footer = () => {
  const dispatch = useDispatch();
  const reviewLoading = useSelector((state) => state.main.reviewsLoading);
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");

  const onInputChange = (setState) => (e) => setState(e.target.value);

  const sendReview = () => {
    dispatch(postUserReview(nickName, email, review));

    setNickName("");
    setEmail("");
    setReview("");
  };

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
            <div>1166</div>
            <div>+99871 241 65 78</div>
            <div>+99897 785 36 54</div>
          </div>
          <div className="mails">
            <div>
              <h5>Email:</h5>
            </div>
            <div> info@gross.uz</div>
            <div> info@gross.uz</div>
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
        <div>
          Address: O'zbekiston, 100000, Toshkent shahri, A.Temur ko'chasi,
          1-tor, 6
        </div>
      </div>
      <div className="review-form">
        <div>
          <h4>Review</h4>
        </div>
        <input
          type="text"
          name="nick"
          className="form-control"
          placeholder="Nick..."
          onChange={onInputChange(setNickName)}
          value={nickName}
        />
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email..."
          onChange={onInputChange(setEmail)}
          value={email}
        />
        <textarea
          className="form-control"
          name="reviews"
          onChange={onInputChange(setReview)}
          value={review}
        />
        <button type="button" className="review-button" onClick={sendReview}>
          {reviewLoading ? (
            <div
              className="spinner-border text-light"
              style={{ width: "25px", height: "25px" }}
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <div>Send</div>
          )}
        </button>
      </div>
    </div>
  );
};

export default Footer;
