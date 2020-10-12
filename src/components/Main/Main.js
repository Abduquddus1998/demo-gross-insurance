import React, { useEffect } from "react";
import { Steps } from "antd";
import { useDispatch } from "react-redux";

import MainCarousel from "./MainCarousel";
import CardSlider from "./CardSlider";
import LeftAds from "components/Ads/LeftAds";
import RightAds from "components/Ads/RightAds";
import Navigation from "components/Navigation/Navigation";
import Footer from "components/Footer/Footer";
import MainForm from "components/Auth/MainForm";

import { getReviews } from "store/actions/main";

import {
  Commission,
  EasyPayment,
  Guarantee,
  StabilProfit,
} from "assets/icons/svg-icons";

import People from "assets/images/people.png";
import Bank from "assets/images/bank.png";
import MoneyBag from "assets/images/money-bag.jpg";
import Clock from "assets/images/sand-timer_red.png";
import Humo from "assets/images/humo.png";
import Paynet from "assets/images/paynet.png";
import Click from "assets/images/click.png";
import Payme from "assets/images/payme.png";
import Uzcard from "assets/images/uzxard.png";
import Oson from "assets/images/oson.png";

import "./Main.scss";

const Main = () => {
  const { Step } = Steps;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews());
  });

  return (
    <div className="main-container">
      <Navigation />
      <MainForm />
      <div className="carousel-container">
        <MainCarousel />
      </div>
      <div className="pros-container">
        <div className="pros-info">
          <div className="advantages">
            <span>
              <ion-icon name="checkmark-circle-outline" size="large"></ion-icon>
            </span>
            <h5>Демо-счет с $10 000 на балансе </h5>
          </div>
          <div className="extra-info">
            Протестируйте интересующие стратегии на демо-счете
          </div>
        </div>
        <div className="pros-info">
          <div className="advantages">
            <span>
              <ion-icon name="checkmark-circle-outline" size="large"></ion-icon>
            </span>
            <h5>Минимальный депозит — $10 </h5>
          </div>
          <div className="extra-info">
            Отсутствие комиссии за ввод и вывод средств
          </div>
        </div>
        <div className="pros-info">
          <div className="advantages">
            <span>
              <ion-icon name="checkmark-circle-outline" size="large"></ion-icon>
            </span>
            <h5>Минимальный размер сделки — $1</h5>
          </div>
          <div className="extra-info">Легко начать даже с небольшой суммы</div>
        </div>
      </div>
      <div className="content-and-ads">
        <LeftAds />

        <div className="main-sections">
          <div className="why-we">
            <div className="section-header">
              <h3> Why we?</h3>
            </div>
            <div className="content">
              <div className="content-items">
                <div className="icon">
                  <Guarantee width="70px" height="80px" />
                </div>
                <div className="info">
                  Look If you had One shot Or one opportunity To seize
                  everything you ever wanted In one moment
                </div>
              </div>
              <div className="content-items">
                <div className="icon">
                  <EasyPayment width="70px" height="70px" />
                </div>
                <div className="info">
                  Would you capture it Or just let it slip? Yo His palms are
                  sweaty, knees weak, arms are heavy There's vomit on his
                  sweater already, mom's spaghetti
                </div>
              </div>
              <div className="content-items">
                <div className="icon">
                  <Commission width="70px" height="70px" />
                </div>
                <div className="info">
                  He's nervous, but on the surface he looks calm and ready To
                  drop bombs, but he keeps on forgettin' What he wrote down, the
                  whole crowd goes so loud He opens his mouth, but the words
                  won't come out
                </div>
              </div>
              <div className="content-items">
                <div className="icon">
                  <StabilProfit width="70px" height="70px" />
                </div>
                <div className="info">
                  He's chokin', how, everybody's jokin' now The clocks run out,
                  times up, over, blaow Snap back to reality, oh there goes
                  gravity Oh, there goes Rabbit, he choked
                </div>
              </div>
            </div>
          </div>
          <CardSlider />

          <div className="get-started">
            <div className="title">
              <h3>Easy Start</h3>
            </div>
            <div className="start-steps">
              <Steps size="40px">
                <Step status="process" title="Зарегистрируйтесь" />
                <Step status="process" title="Познакомьтесь с платформой" />
                <Step status="process" title="Инвестируйте" />
              </Steps>
              <div className="steps-descriptions">
                <div className="description1">
                  Введите свой email, чтобы создать аккаунт. Это бесплатно
                </div>
                <div className="description2">
                  Узнайте, как работают инвестиции, не рискуя собственными
                  деньгами
                </div>
                <div className="description3">
                  Выберите актив и заставьте деньги работать на вас
                </div>
              </div>
            </div>
          </div>
          <div className="main-motivations">
            <div className="title">
              <h3>Motivations</h3>
            </div>
            <div className="motivations">
              <div className="motive-content">
                <img src={People} alt="people-icon" />
                <div>We have more than 1320 daily users in our site!</div>
              </div>
              <div className="motive-content">
                <img src={Bank} alt="motive-content" />
                <div>
                  The total amount of money Circulated in the platform consists
                  of $1.2 billion
                </div>
              </div>
              <div className="motive-content">
                <img src={MoneyBag} alt="people-icon" />
                <div>
                  The average profit output of an average user in the platform
                  is $265/month
                </div>
              </div>
              <div className="motive-content">
                <img src={Clock} alt="people-icon" />
                <div>
                  Average time to get the first profit from investments takes 3
                  months
                </div>
              </div>
            </div>
          </div>
        </div>
        <RightAds />
      </div>
      <div className="payment-systems">
        <img src={Click} alt="click" />
        <img src={Payme} alt="Payme" />
        <img src={Paynet} alt="Paynet" />
        <img src={Humo} alt="Humo" />
        <img src={Uzcard} alt="Uzcard" />
        <img src={Oson} alt="Oson" />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
