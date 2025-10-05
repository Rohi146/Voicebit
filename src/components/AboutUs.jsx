import React, { useEffect, useState } from "react";
import Header from "./Header";
import bsky from "../assets/images/berkeley-skydeck-voicebit.png";
import hitesh from "../assets/images/hitesh-kenjale-voicebit-ceo.png";
import lovre from "../assets/images/lovre-soric-voicebit-coo.png";
import jay from "../assets/images/jay-patel-voicebit-cto.png";
import jet from "../assets/images/growth-jet-icon.gif";
import bulb from "../assets/images/innovation-idea-icon.gif";
import useReveal from "../hooks/useReveal";
import "react-phone-input-2/lib/style.css";
import ContactForm from "./ContactForm";

const AboutUs = () => {
  const [ref1, visible1] = useReveal();
  const [ref2, visible2] = useReveal();
  const [ref3, visible3] = useReveal();
  const [ref4, visible4] = useReveal();
  const [ref5, visible5] = useReveal();
  const [ref6, visible6] = useReveal();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // New state for success message
  const [submitError, setSubmitError] = useState(""); // New state for API errors

  const openPopup = () => {
    setIsPopupOpen(true);
    setIsSubmitted(false);
    setSubmitError("");
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    document.title = "About Us | Redefining Restaurant Calls";

    const description = document.createElement("meta");
    description.name = "description";
    description.content =
      "Discover VoiceBit’s mission to help restaurants reclaim their customer relationships. Learn how our AI-powered call assistant boosts reliability, empathy, accountability, and innovation.";
    document.head.appendChild(description);

    const keywords = document.createElement("meta");
    keywords.name = "keywords";
    keywords.content =
      "about VoiceBit, restaurant call automation, AI call assistant, restaurant customer relationships, call reliability, innovation in restaurants";
    document.head.appendChild(keywords);

    return () => {
      document.head.removeChild(description);
      document.head.removeChild(keywords);
    };
  }, []);

  return (
    <div>
      <section className="bg-brand">
        <Header />
        <div className="how-it-works-page">
          <div
            ref={ref1}
            className={`how-it-works-content reveal ${
              visible1 ? "visible" : ""
            }`}
          >
            <h1>About Us</h1>
            <div className="mission-section">
              <div className="mission">
                <img
                  src={jet}
                  alt="Jet icon symbolizing business growth with Voicebit AI voice ordering"
                />
                <h2>
                  Our <br /> Mission
                </h2>
              </div>
              <p className="mission-text">
                To help restaurant owners deliver a superior direct ordering
                experience with easy-to-use tools that delight both the
                restaurant and their customers.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-us-page">
        <div
          ref={ref2}
          className={`why-started-section reveal ${visible2 ? "visible" : ""}`}
        >
          <div className="why-started-content">
            <img
              src={bulb}
              alt="Innovation bulb icon representing Voicebit’s AI-powered solutions"
            />

            <div className="why-started-texts">
              <p className="why-started-text">
                We noticed that many restaurant owners were losing their loyal
                customers to third-party apps. Since about 70% of a restaurant’s
                revenue comes from repeat customers, this was hurting both
                owners and their customers. Customers were paying extra fees,
                and owners were losing their direct connection with those who
                matter most. With Voicebit, we’re changing that by giving
                restaurant owners easy-to-use tools to take back control and
                offer a better experience through voice, so they can keep a
                stronger relationship with their customers.
              </p>
              <p className="why-started-text">
                We imagined a future where AI could answer calls instantly, take
                orders, handle questions, and route conversations to staff when
                needed. So we built it.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sky-sec-con">
        <div
          ref={ref3}
          className={`skydeck-section reveal ${visible3 ? "visible" : ""}`}
        >
          <div className="skydeck-card">
            <p className="skydeck-text">Backed by</p>
            <img
              src={bsky}
              alt="Voicebit featured in Berkeley SkyDeck accelerator program"
              className="skydeck-logo"
            />
            <p className="skydeck-text">
              We're proud to be backed by Berkeley SkyDeck, one of the top
              university-affiliated startup accelerators in the U.S.
            </p>
          </div>
        </div>
      </section>
      <section className="why-voicebit-section">
        <div ref={ref4} className={` reveal ${visible4 ? "visible" : ""}`}>
          <h2>Why VoiceBit Matters</h2>
          <div className="why-voicebit-container">
            <div className="voicebit-cards">
              <div className="spacer"></div>
              <div
                style={{ gap: "20px", alignItems: "center" }}
                className="why-card abt-why-card"
              >
                <svg
                  width="76"
                  height="76"
                  viewBox="0 0 76 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M63.4308 20.0814L38.5847 9.0322C38.4018 8.9462 38.2022 8.90161 38.0001 8.90161C37.798 8.90161 37.5984 8.9462 37.4155 9.0322L12.5693 20.0814C12.3124 20.1935 12.0931 20.3771 11.9376 20.6103C11.7822 20.8436 11.697 21.1166 11.6924 21.3968V29.2307C11.6924 43.6122 20.2862 61.0337 37.4739 67.0553C37.8151 67.1711 38.185 67.1711 38.5262 67.0553C55.7139 61.0337 64.3078 43.6122 64.3078 29.2307V21.3968C64.3031 21.1166 64.218 20.8436 64.0625 20.6103C63.907 20.3771 63.6878 20.1935 63.4308 20.0814ZM51.7035 29.7568L36.2696 49.4057C36.0453 49.689 35.7638 49.9218 35.4435 50.089C35.1231 50.2562 34.7712 50.3541 34.4105 50.3762L34.2585 50.3821C33.5789 50.3809 32.9274 50.1108 32.4462 49.6308L24.4955 41.6801C24.016 41.1994 23.7471 40.548 23.7479 39.869C23.7487 39.1901 24.0192 38.5393 24.4998 38.0598C24.9805 37.5803 25.6319 37.3114 26.3109 37.3122C26.9898 37.3131 27.6406 37.5836 28.1201 38.0642L34.0305 43.9747L47.6813 26.597C48.1081 26.0856 48.7173 25.7605 49.3797 25.6909C50.0422 25.6213 50.7057 25.8126 51.2294 26.2241C51.7532 26.6357 52.0959 27.2351 52.185 27.8952C52.274 28.5553 52.1023 29.2241 51.7064 29.7597L51.7035 29.7568Z"
                    fill="#08BE75"
                  />
                </svg>

                <h3>Reliability</h3>
                <p style={{ textAlign: "center" }}>
                  We show up for <br /> our customers, 24/7.
                </p>
              </div>
            </div>
            <div className="voicebit-cards">
              <div
                style={{ gap: "20px", alignItems: "center" }}
                className="why-card abt-why-card"
              >
                <svg
                  width="76"
                  height="76"
                  viewBox="0 0 76 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.1002 9.73429C24.9029 9.25675 27.777 9.41428 30.5107 10.1953C33.2444 10.9762 35.768 12.3608 37.8955 14.2468L38.0127 14.3513L38.1203 14.2563C40.1508 12.4744 42.5379 11.146 45.1224 10.3597C47.7069 9.57333 50.4293 9.34718 53.1082 9.69629L53.8872 9.81029C57.2638 10.3933 60.4199 11.8786 63.0213 14.1089C65.6227 16.3393 67.5725 19.2316 68.6642 22.4796C69.756 25.7276 69.9491 29.2104 69.223 32.5592C68.4969 35.908 66.8788 38.9981 64.5398 41.5023L63.9698 42.0881L63.8178 42.218L40.2262 65.5848C39.6817 66.1236 38.9605 66.4469 38.196 66.4946C37.4315 66.5423 36.6756 66.3114 36.0683 65.8444L35.7707 65.5848L12.0428 42.0818C9.52919 39.636 7.74154 36.5423 6.87786 33.1431C6.01419 29.744 6.10818 26.1721 7.14944 22.8231C8.1907 19.4741 10.1386 16.4787 12.7774 14.1685C15.4162 11.8583 18.6429 10.3236 22.1002 9.73429Z"
                    fill="#F65E5C"
                  />
                </svg>

                <h3>Empathy </h3>
                <p style={{ textAlign: "center" }}>
                  We design with the end-user in mind, always.
                </p>
              </div>

              <div
                style={{ gap: "20px", alignItems: "center" }}
                className="why-card abt-why-card"
              >
                <svg
                  width="76"
                  height="76"
                  viewBox="0 0 76 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M64.4398 33.6568L33.9119 65.9778C32.8921 67.0572 31.5313 67.752 30.0589 67.9452C28.5866 68.1383 27.0927 67.8179 25.8289 67.0381C24.5652 66.2582 23.609 65.0665 23.1213 63.6638C22.6337 62.2611 22.6445 60.7332 23.152 59.3376L28 46.0012H16.708C15.6117 46.0012 14.5322 45.7325 13.5638 45.2186C12.5954 44.7047 11.7677 43.9613 11.1531 43.0535C10.5386 42.1456 10.1559 41.101 10.0385 40.0109C9.9212 38.9209 10.0728 37.8187 10.4801 36.8009L19.772 13.5722C20.4316 11.9289 21.5675 10.5203 23.0336 9.52737C24.4998 8.53446 26.2293 8.00256 28 8H43.9999C47.8719 8 50.5478 11.8681 49.1918 15.4922L45.9999 24.0005H60.2758C61.3942 24.0004 62.4881 24.3281 63.4224 24.9428C64.3567 25.5576 65.0904 26.4326 65.5329 27.4598C65.9754 28.487 66.1073 29.6213 65.9123 30.7226C65.7174 31.8239 65.208 32.844 64.4398 33.6568Z"
                    fill="#FCAA23"
                  />
                </svg>

                <h3>Innovation</h3>
                <p style={{ textAlign: "center" }}>
                  We push boundaries to make advanced tools accessible.
                </p>
              </div>
            </div>

            <div className="voicebit-cards">
              <div className="spacer"></div>
              <div
                style={{ gap: "20px", alignItems: "center" }}
                className="why-card abt-why-card"
              >
                <svg
                  width="76"
                  height="76"
                  viewBox="0 0 76 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 38C9 30.3087 12.0553 22.9325 17.4939 17.4939C22.9325 12.0553 30.3087 9 38 9C45.6913 9 53.0675 12.0553 58.5061 17.4939C63.9446 22.9325 67 30.3087 67 38C67 45.6913 63.9446 53.0675 58.5061 58.5061C53.0675 63.9446 45.6913 67 38 67C30.3087 67 22.9325 63.9446 17.4939 58.5061C12.0553 53.0675 9 45.6913 9 38ZM36.3451 50.412L53.0413 29.5397L50.0253 27.1269L35.7883 44.9175L25.704 36.5152L23.2293 39.4848L36.3451 50.412Z"
                    fill="#12AD6F"
                  />
                </svg>

                <h3>Accountability</h3>
                <p style={{ textAlign: "center" }}>
                  We take ownership of <br /> your trust
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-section-container">
        <div
          ref={ref5}
          className={`team-section reveal ${visible5 ? "visible" : ""}`}
        >
          <h2>Meet the Team</h2>
          <div className="team-card-container">
            <div className="team-card">
              <img
                src={hitesh}
                alt="Hitesh Kenjale – CEO of Voicebit, AI-driven restaurant solutions leader"
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h3>Hitesh Kenjale</h3>
                <span className="team-position"> CEO</span>
              </div>
              <p>
                A second-time founder with proven go-to-market experience,
                Hitesh previously scaled a consumer business to 200,000+
                customers across 120+ retail locations. At Voicebit, he drives
                product vision, growth strategy, and market positioning. He’s
                passionate about applying AI to solve high-friction problems for
                small businesses at scale.
              </p>
            </div>
            <div className="team-card">
              <img
                src={lovre}
                alt="Lovre Soric – COO of Voicebit, restaurant operations and strategy expert"
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h3>Lovre Soric </h3>
                <span className="team-position"> COO</span>
              </div>
              <p>
                Former strategy consultant with deep domain expertise in quick
                service restaurant (QSB) operations, customer success, and
                implementation. He brings a systems, thinking approach and
                operational rigor to scale execution and drive retention.
              </p>
            </div>
            <div className="team-card">
              <img
                src={jay}
                alt="Jay Patel – CTO of Voicebit, AI/ML expert and product architect"
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h3>Jay Patel</h3>
                <span className="team-position"> CTO</span>
              </div>
              <p>
                Former Senior Software Engineer at Microsoft with deep
                experience in AI/ML and large-scale infrastructure. Jay oversees
                engineering and product development at VoiceBit, architecting
                scalable, reliable, and secure AI-driven systems purpose-built
                for real world business use.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section-container">
        <div className="cta-section">
          <div
            ref={ref6}
            className={`cta-content reveal ${visible6 ? "visible" : ""}`}
          >
            <h2>Let's Talk </h2>
            <p>Want to learn more, partner with us, or just say hello?</p>
            <button className="cta-content-button" onClick={openPopup}>
              Book a Demo
            </button>
          </div>
        </div>
         
        {isPopupOpen && (
          <ContactForm
            isOpen={isPopupOpen}
            onClose={closePopup}
            onSubmitSuccess={() => {
              setIsSubmitted(true);
              setSubmitError("");
            }}
          />
        )}
      </section>
    </div>
  );
};

export default AboutUs;
