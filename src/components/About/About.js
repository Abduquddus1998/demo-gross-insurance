import React from "react";

import Navigation from "components/Navigation/Navigation";
import Footer from "components/Footer/Footer";
import TeamMembers from "./TeamMembers";

import Video from "assets/images/video.jpg";
import Collective from "assets/images/collective.jpg";
import MapPhoto from "assets/images/map-pic.png";

import "./About.scss";

const About = () => {
  return (
    <div className="about-container">
      <Navigation />
      <div className="about-content">
        <div className="team-image">
          <img src={Collective} alt="collective" />
          <div className="team-motto">
            <h1>Our team work for you profit</h1>
          </div>
        </div>
        <div className="team">
          <div className="title">
            <h1>About</h1>
          </div>
          <div className="about-team">
            <div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus ad aliquid, at, delectus distinctio dolores error
                eveniet laborum, minima modi odio repellat tenetur ut vero
                voluptas voluptate voluptatum? Id, voluptate? Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. At consequatur deserunt
                distinctio dolorum ducimus eos exercitationem illo illum impedit
                ipsa nam nulla optio pariatur quia, quisquam quos sequi tempora
                voluptatum!
              </div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                dignissimos iusto odit. Hic nulla, porro quae rem ut voluptates.
                Aliquam beatae error excepturi minus obcaecati porro
                repudiandae? Incidunt, ipsum obcaecati.
              </div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis, dolorem dolores eligendi ex facilis illum in ipsa
                iste itaque mollitia nihil numquam, optio quasi quisquam
                ratione, reiciendis velit voluptatibus voluptatum? Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Animi dolorum ea
                impedit, neque provident rerum sed suscipit voluptas! Ab enim
                excepturi illo in laboriosam magni odio officiis placeat quo,
                ullam.
              </div>
            </div>
            <div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus ad aliquid, at, delectus distinctio dolores error
                eveniet laborum, minima modi odio repellat tenetur ut vero
                voluptas voluptate voluptatum? Id, voluptate?
              </div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                dignissimos iusto odit. Hic nulla, porro quae rem ut voluptates.
                Aliquam beatae error excepturi minus obcaecati porro
                repudiandae? Incidunt, ipsum obcaecati. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Distinctio eveniet excepturi
                id porro quo repellat veritatis! Dicta ducimus libero minima
                quibusdam tenetur! Aperiam aspernatur at deleniti deserunt nemo
                quisquam, voluptatum.
              </div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis, dolorem dolores eligendi ex facilis illum in ipsa
                iste itaque mollitia nihil numquam, optio quasi quisquam
                ratione, reiciendis velit voluptatibus voluptatum?
              </div>
            </div>
          </div>
        </div>
        <div className="our-offices">
          <div className="title">Our Offices</div>
          <div className="office-map">
            <img src={MapPhoto} alt="office-locations" />
          </div>
          <div className="title"> Our Team</div>
        </div>
        <div className="team-members">
          <TeamMembers />
        </div>
        <div className="video-section">
          <div className="team-video">
            <img src={Video} alt="video" />
            <span className="play-icon">
              <ion-icon name="play-circle-outline"></ion-icon>
            </span>
          </div>
          <div className="video-desc">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              delectus dicta, distinctio dolor dolore ducimus et fuga fugit in
              iure nesciunt nihil odit possimus recusandae similique tempora
              unde ut voluptates?
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
