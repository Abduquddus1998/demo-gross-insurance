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
              <h3>Почему Мы</h3>
            </div>
            <div className="content">
              <div className="content-items">
                <div className="icon">
                  <Guarantee width="70px" height="80px" />
                </div>
                <div className="info">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                  cumque excepturi expedita facere fuga in magnam minus
                  molestias neque nihil optio porro, quaerat quia, sit soluta
                  tempore voluptatum! Dolore, qui?
                </div>
              </div>
              <div className="content-items">
                <div className="icon">
                  <EasyPayment width="70px" height="70px" />
                </div>
                <div className="info">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                  cumque excepturi expedita facere fuga in magnam minus
                  molestias neque nihil optio porro, quaerat quia, sit soluta
                  tempore voluptatum! Dolore, qui?
                </div>
              </div>
              <div className="content-items">
                <div className="icon">
                  <Commission width="70px" height="70px" />
                </div>
                <div className="info">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                  cumque excepturi expedita facere fuga in magnam minus
                  molestias neque nihil optio porro, quaerat quia, sit soluta
                  tempore voluptatum! Dolore, qui?
                </div>
              </div>
              <div className="content-items">
                <div className="icon">
                  <StabilProfit width="70px" height="70px" />
                </div>
                <div className="info">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                  cumque excepturi expedita facere fuga in magnam minus
                  molestias neque nihil optio porro, quaerat quia, sit soluta
                  tempore voluptatum! Dolore, qui?
                </div>
              </div>
            </div>
          </div>
          <CardSlider />

          <div className="get-started">
            <div className="title">
              <h3>Начать легко</h3>
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
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus assumenda aut commodi consequuntur cum dolore eaque,
                </div>
              </div>
              <div className="motive-content">
                <img src={Bank} alt="motive-content" />
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus assumenda aut commodi consequuntur cum dolore eaque,
                </div>
              </div>
              <div className="motive-content">
                <img src={MoneyBag} alt="people-icon" />
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus assumenda aut commodi consequuntur cum dolore eaque,
                </div>
              </div>
              <div className="motive-content">
                <img src={Clock} alt="people-icon" />
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus assumenda aut commodi consequuntur cum dolore eaque,
                </div>
              </div>
            </div>
          </div>
        </div>

        <RightAds />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
