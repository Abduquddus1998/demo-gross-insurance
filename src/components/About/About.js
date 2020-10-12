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
                You want to tell me what this is all about? As I walk through
                the valley of the shadow of death I take a look at my life and
                realize there's nothin' left Cause I've been blasting and
                laughing so long, That even my mama thinks that my mind is gone
                But I ain't never crossed a man that didn't deserve it Me be
                treated like a punk you know that's unheard of You better watch
                don't know
              </div>
              <div>
                how you're talking and where you're walking Or you and your
                homies might be lined in chalk I really hate to trip but I gotta
                loc As they croak, I see myself in the pistol smoke, fool I'm
                the kinda G the little homies wanna be like On my knees in the
              </div>
              <div>
                night saying prayers in the streetlight We’ve been spending most
                our lives living in the gangsta's paradise We’ve been spending
                most our lives living in the gangsta's paradise We keep spending
                most our lives living in the gangsta's paradise We keep spending
                most our lives living in the gangsta's paradise Look at the
                situation they got me facin' I can't live a normal life, I was
                raised by the streets So I gotta be down with the hood team Too
              </div>
            </div>
            <div>
              <div>
                much television watching got me chasing dreams I'm an educated
                fool with money on my mind Got my 10 in my hand and a gleam in
                my eye I'm a loc'd out gangsta set trippin' banger And my homies
                is down so don't arouse my anger, fool Death ain't nothing but a
                heartbeat away, I'm living life, do or die, what can I say I'm
                23 now, but will I live to see 24 The way things are going I
              </div>
              <div>
                Hello, it's me I've thought about us for a long, long time Maybe
                I think too much but something's wrong There's something here
                that doesn't last too long Maybe I shouldn't think of you as
                mine Seeing you, or seeing anything as much as I do you I take
                for granted that you're always there I take for granted that you
                just don't care Sometimes I can't help seeing all the way
              </div>
              <div>
                through It's important to me That you know you are free 'Cause I
                never want to make you change for me Think of me You know that
                I'd be with you if I could I'll come around to see you once in a
                while Or if I ever need a reason to smile And spend the night if
                you think…
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
              A lot of their content is free, but customers can become members
              for £10.75 per month to get access to a "Best Buys" and "Don't
              Buy" list, the latest reviews of products from their test labs,
              and access to their consumer legal advice service.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
