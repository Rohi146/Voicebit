import React, { useEffect, useState, useRef } from "react";
import heroImage from "../assets/images/voicebit-ai-voice-ordering-hero.gif";
import starIcon from "../assets/images/voicebit-client-stars.png";
import phoneImage from "../assets/images/voicebit-mobile-app-demo.gif";
import businessOwners from "../assets/images/restaurant-owners-trust-voicebit.gif";
import tastyFood from "../assets/images/tasty-food-voicebit.png";
import rayosPizza from "../assets/images/rayos-pizza-voicebit-client.png";
import bigApplePizza from "../assets/images/big-apple-pizza-voicebit-client.png";
import newYorkPizza from "../assets/images/new-york-pizza-voicebit-client.png";
import step1 from "../assets/images/voicebit-demo-screen.png";
import step2 from "../assets/images/voicebit-ordering-process.png";
import step3 from "../assets/images/voicebit-confirm-the-order.png";
import step4 from "../assets/images/voicebit-delivery.png";
import step5 from "../assets/images/voicebit-order-list.png";
import step6 from "../assets/images/voicebit-thank-you-screen.png";
import steps from "../assets/images/voicebit-ordering-steps.png";
import Header from "./Header";
import useReveal from "../hooks/useReveal";
import "react-phone-input-2/lib/style.css";
import ContactForm from "./ContactForm";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const slideRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const testimonials = [
    {
      text: "We've seen a 15% jump in call-in orders since using VoiceBit. It's like having a perfect receptionist 24/7.",
      author: "Alex G.",
      product: "Owner of New York Pizza",
      image: newYorkPizza,
    },
    {
      text: "VoiceBit never misses a call and handles orders flawlessly. Our customers love the instant response.",
      author: "Ray A.",
      product: "Owner of Big Apple Pizza",
      image: bigApplePizza,
    },
    {
      text: "The bilingual support has opened up our business to so many new customers. Game-changer!",
      author: "Ramez J.",
      product: "Owner of Rayo’s Pizza",
      image: rayosPizza,
    },
    {
      text: "We were amazed a call in pizza was taken by AI with perfection. It was customized with two parts and a side of anchovies and everything was 100% accurate. What a great idea, and we always love the pizza!",
      author: "Laura Krause",
      product: "Customer Big Apple Pizza",
      image: bigApplePizza,
    },
  ];

  const slides = [
    ...testimonials.slice(-3), // last 3 for seamless back loop
    ...testimonials,
    ...testimonials.slice(0, 3), // first 3 for forward loop
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide((s) => s + 1);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (currentSlide >= slides.length - 3) {
      const t = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(3); // reset to real first slide
      }, 600);
      return () => clearTimeout(t);
    }
    if (currentSlide < 3) {
      const t = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(slides.length - 6); // jump to real last
      }, 600);
      return () => clearTimeout(t);
    }
    setIsTransitioning(true);
  }, [currentSlide, slides.length]);

  const centerActive = () => {
    const container = containerRef.current;
    const track = trackRef.current;
    const slide = slideRefs.current[currentSlide];
    if (!container || !track || !slide) return;

    const containerCenter = container.clientWidth / 2;
    const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
    const translate = slideCenter - containerCenter;

    track.style.transition = isTransitioning
      ? "transform 0.6s ease-in-out"
      : "none";
    track.style.transform = `translateX(-${translate}px)`;
  };

  useEffect(centerActive, [currentSlide, isTransitioning]);
  useEffect(() => {
    const onResize = () => centerActive();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const statRefs = useRef([]);

  const animateNumber = (
    start,
    end,
    element,
    prefix = "",
    suffix = "",
    duration = 2000
  ) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      element.innerText = `${prefix}${value.toLocaleString()}${suffix}`; // Add prefix and suffix
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        element.innerText = `${prefix}${end}${suffix}`; // Ensure exact end value with prefix/suffix
      }
    };
    requestAnimationFrame(step);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const stats = [
            { target: 55000, prefix: "", suffix: "+" },
            { target: 650, prefix: "$", suffix: "k+" },
            { target: 99, prefix: "", suffix: "%" },
            { target: 10, prefix: "", suffix: "+" },
          ];
          statRefs.current.forEach((ref, index) => {
            if (ref) {
              animateNumber(
                0,
                stats[index].target,
                ref,
                stats[index].prefix,
                stats[index].suffix,
                2000
              );
            }
          });
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const section = document.querySelector(".tasty-food-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const [ref1, visible1] = useReveal();
  const [ref2, visible2] = useReveal();
  const [ref3, visible3] = useReveal();
  const [ref4, visible4] = useReveal();
  const [ref5, visible5] = useReveal();
  const [ref6, visible6] = useReveal();
  const [ref7, visible7] = useReveal();
  const [ref8, visible8] = useReveal();
  const [ref9, visible9] = useReveal();
  const [ref10, visible10] = useReveal();
  const [ref11, visible11] = useReveal();
  const [ref12, visible12] = useReveal();
  const [ref13, visible13] = useReveal();
  const [ref14, visible14] = useReveal();
  const [ref15, visible15] = useReveal();
  const [ref16, visible16] = useReveal();
  const [ref17, visible17] = useReveal();
  const [ref18, visible18] = useReveal();
  const [ref19, visible19] = useReveal();

  const [isPopupOpen, setIsPopupOpen] = useState(false); // Form state
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
    document.title = "VoiceBit – Smart Call Ordering for Restaurants";

    const description = document.createElement("meta");
    description.name = "description";
    description.content =
      "Turn customer calls into sales with VoiceBit. Automate orders, boost revenue, build loyalty, and streamline restaurant operations effortlessly.";
    document.head.appendChild(description);

    const keywords = document.createElement("meta");
    keywords.name = "keywords";
    keywords.content =
      "restaurant call assistant, automate orders, smart call ordering, AI ordering system, boost restaurant sales, VoiceBit restaurant AI, food ordering automation, customer loyalty restaurants";
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
        <div className="hero-section">
          <div
            ref={ref1}
            className={`hero-container reveal ${visible1 ? "visible" : ""}`}
          >
            <div className="hero-content">
              <h1>
                {" "}
                Unlock
                <span style={{ color: "#CE1210" }}> Revenue and Loyalty </span>
                with Every Call
              </h1>
              <p>
                Reclaim your margins, delight customers, and relieve staff—all
                while owning the direct customer relationship.
              </p>
              <button className="demo-btn" onClick={openPopup}>
                Book a Demo
              </button>
            </div>
            <div className="hero-image-container">
              <img
                src={heroImage}
                alt="AI-powered phone assistant handling restaurant orders – Voicebit hero banner"
                className="hero-image"
              />
            </div>
          </div>
        </div>
         {" "}
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
      <section>
        <div className="trusted-section padding-inline ">
          <div ref={ref2} className={` reveal ${visible2 ? "visible" : ""}`}>
            <div className="stars">
              <img
                src={starIcon}
                alt="Voicebit AI phone ordering system"
                className="star"
              />
            </div>
            <h2>Trusted by Restaurant Business Owners</h2>
            <img
              src={businessOwners}
              alt="Restaurant business owners trusting Voicebit AI ordering solution"
              className="business-owners"
            />
          </div>
        </div>
      </section>
      <section className="tasty-food-section">
        <div
          ref={ref3}
          className={`stats-container reveal ${visible3 ? "visible" : ""}`}
        >
          <div className="stat-item">
            <span
              className="stat-number"
              ref={(el) => (statRefs.current[0] = el)}
            >
              0
            </span>
            <p>
              Phone Calls <br /> Handled
            </p>
          </div>
          <div className="stat-item">
            <span
              className="stat-number"
              ref={(el) => (statRefs.current[1] = el)}
            >
              0
            </span>
            <p>
              Revenue Channelized <br /> with Calls
            </p>
          </div>
          <div className="stat-item">
            <span
              className="stat-number"
              ref={(el) => (statRefs.current[2] = el)}
            >
              0
            </span>
            <p>Order Accuracy</p>
          </div>
          <div className="stat-item">
            <span
              className="stat-number"
              ref={(el) => (statRefs.current[3] = el)}
            >
              0
            </span>
            <p>Calls Answered at Once</p>
          </div>
        </div>
        <div className="image-container">
          <img
            src={tastyFood}
            alt="Tasty food prepared from orders handled by Voicebit AI"
            className="tasty-food-image"
          />
        </div>
      </section>
      <section className="testimonial-section">
        <div ref={ref4} className={` reveal ${visible4 ? "visible" : ""}`}>
          <h2>What Our Customers Say</h2>

          <div className="carousel-container" ref={containerRef}>
            <div className="carousel-track" ref={trackRef}>
              {slides.map((t, i) => {
                const isActive = i === currentSlide;
                return (
                  <div
                    key={i}
                    ref={(el) => (slideRefs.current[i] = el)}
                    className={`carousel-slide ${isActive ? "active" : ""}`}
                  >
                    <img
                      src={t.image}
                      alt={`${t.author} logo`}
                      className="testimonial-image"
                    />
                    <p className="testimonial-text">"{t.text}"</p>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <p className="testimonial-author">{t.author}</p>
                      <p className="testimonial-product">{t.product}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="carousel-dots">
            {testimonials.map((_, index) => {
              const realIndex =
                (currentSlide - 3 + testimonials.length) % testimonials.length;
              return (
                <button
                  key={index}
                  className={`dot ${realIndex === index ? "active" : ""}`}
                  onClick={() => {
                    setIsTransitioning(true);
                    setCurrentSlide(index + 3);
                  }}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="steps-sec-cont">
        <div className="steps-sec">
          <img
            src={steps}
            alt="Voicebit AI system order taking steps from call to delivery"
          />
          <div
            ref={ref5}
            className={`step-num-1 reveal ${visible5 ? "visible" : ""}`}
          >
            <p className="step-number">Step 1</p>

            <h3>VoiceBit Picks Up</h3>
            <p>
              Guests call their local restaurant's phone number. VoiceBit system
              answers it immediately with no hold music, no delay.
            </p>
          </div>
          <div
            ref={ref6}
            className={`step-num-2 reveal ${visible6 ? "visible" : ""}`}
          >
            <p className="step-number">Step 2</p>
            <h3>Guest Places Their Order</h3>
            <p>
              VoiceBit remembers customers and their preferences while taking
              orders and suggesting relevant upsells.
            </p>
          </div>
          <div
            ref={ref7}
            className={`step-num-3 reveal ${visible7 ? "visible" : ""}`}
          >
            <p className="step-number">Step 3</p>
            <h3>Order Is Paid and Sent</h3>
            <p>
              VoiceBit processes payment and sends the confirmed order straight
              to the kitchen.
            </p>
          </div>
          <div
            ref={ref8}
            className={`step-num-4 reveal ${visible8 ? "visible" : ""}`}
          >
            <p className="step-number">Step 4</p>
            <h3>Best 3rd-Party Driver Assigned Automatically</h3>
            <p>
              If the order is for delivery, our system automatically matches it
              with the best 3rd-party driver and assigns the delivery on behalf
              of the restaurant.
            </p>
          </div>
          <div
            ref={ref9}
            className={`step-num-5 reveal ${visible9 ? "visible" : ""}`}
          >
            <p className="step-number">Step 5</p>
            <h3>Customer gets their order</h3>
            <p>
              If pickup, the customer is notified when their order is ready. For
              delivery, the customer receives live tracking updates.
            </p>
          </div>
          <div
            ref={ref10}
            className={`step-num-6 reveal ${visible10 ? "visible" : ""}`}
          >
            <p className="step-number">Step 6</p>
            <h3>Loyalty on Autopilot</h3>
            <p>
              Customers earn loyalty points automatically with every order and
              can redeem them easily on their next order—all done through voice.
            </p>
          </div>
        </div>
      </section>
      <section className="how-it-works">
        <div className="how-it-works-section">
          <div className="steps-container">
            {/* Step 1 */}
            <div
              ref={ref11}
              className={`step-card reveal ${visible11 ? "visible" : ""}`}
            >
              <div className="step-number-container step-2-sec">
                <p className="step-number">Step 1</p>
                <h3>VoiceBit Picks Up</h3>
                <p>
                  Guests call their local restaurant's phone number. VoiceBit
                  system answers it immediately with no hold music, no delay.
                </p>
              </div>
              <img
                src={step1}
                alt="Voicebit demo screen showcasing AI phone ordering solution"
                className="step-image "
              />
              <svg
                className="line-svg"
                width="2"
                height="172"
                viewBox="0 0 2 172"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 0L0.999992 172"
                  stroke="#CE1210"
                  stroke-dasharray="11 11"
                />
              </svg>
            </div>

            {/* Step 2 */}
            <div
              ref={ref12}
              className={`step-card reveal ${visible12 ? "visible" : ""}`}
            >
              <div className="step-number-container">
                <div className="step-2-sec">
                  <p className="step-number">Step 2</p>
                  <h3>Guest Places Their Order</h3>
                  <p>
                    VoiceBit remembers customers and their preferences while
                    taking orders and suggesting relevant upsells.
                  </p>
                </div>
              </div>
              <img
                style={{ marginRight: "auto", zIndex: 2 }}
                src={step2}
                alt="Voicebit AI ordering process – customer calls the restaurant"
                className="step-image step-2-img "
              />
              <svg
                className="line-svg"
                width="2"
                height="172"
                viewBox="0 0 2 172"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 0L0.999992 172"
                  stroke="#CE1210"
                  stroke-dasharray="11 11"
                />
              </svg>
            </div>
            {/* Step 3 */}

            <div
              ref={ref13}
              className={`step-card reveal ${visible13 ? "visible" : ""}`}
            >
              <div className="step-number-container">
                <div className="step-3-sec">
                  <p className="step-number">Step 3</p>
                  <h3>Order Is Paid and Sent</h3>
                  <p>
                    VoiceBit processes payment and sends the confirmed order
                    straight to the kitchen.
                  </p>
                </div>
              </div>
              <img
                src={step3}
                alt="AI system – AI processes and confirms the order"
                className="step-image step-3-img"
              />
              <svg
                className="line-svg"
                width="2"
                height="172"
                viewBox="0 0 2 172"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 0L0.999992 172"
                  stroke="#CE1210"
                  stroke-dasharray="11 11"
                />
              </svg>
            </div>

            {/* Step 4 */}
            <div
              ref={ref14}
              className={`step-card reveal ${visible14 ? "visible" : ""}`}
            >
              <div className="step-number-container">
                <div className="step-2-sec">
                  <p className="step-number">Step 4</p>
                  <h3>Best 3rd-Party Driver Assigned Automatically</h3>
                  <p>
                    If the order is for delivery, our system automatically
                    matches it with the best 3rd-party driver and assigns the
                    delivery on behalf of the restaurant.
                  </p>
                </div>
              </div>
              <img
                style={{ marginRight: "auto", zIndex: 2 }}
                src={step4}
                alt="Food delivery bike representing fast restaurant orders with Voicebit"
                className="step-image step-2-img "
              />
              <svg
                className="line-svg"
                width="2"
                height="172"
                viewBox="0 0 2 172"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 0L0.999992 172"
                  stroke="#CE1210"
                  stroke-dasharray="11 11"
                />
              </svg>
            </div>
            {/* Step 5 */}

            <div
              ref={ref15}
              className={`step-card reveal ${visible15 ? "visible" : ""}`}
            >
              <div className="step-number-container">
                <div className="step-3-sec">
                  <p className="step-number">Step 5</p>
                  <h3>Customer gets their order</h3>
                  <p>
                    If pickup, the customer is notified when their order is
                    ready. For delivery, the customer receives live tracking
                    updates
                  </p>
                </div>
              </div>
              <img
                src={step5}
                alt="Order list view generated by Voicebit AI phone assistant"
                className="step-image step-3-img"
              />
              <svg
                className="line-svg"
                width="2"
                height="172"
                viewBox="0 0 2 172"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 0L0.999992 172"
                  stroke="#CE1210"
                  stroke-dasharray="11 11"
                />
              </svg>
            </div>
            {/* Step 6 */}
            <div
              ref={ref16}
              className={`step-card reveal ${visible16 ? "visible" : ""}`}
            >
              <div className="step-number-container">
                <div className="step-2-sec">
                  <p className="step-number">Step 6</p>
                  <h3>Loyalty on Autopilot</h3>
                  <p>
                    Customers earn loyalty points automatically with every order
                    and can redeem them easily on their next order—all done
                    through voice.
                  </p>
                </div>
              </div>
              <img
                style={{ marginRight: "auto", zIndex: 2 }}
                src={step6}
                alt="Thank you screen after successful order placement with Voicebit"
                className="step-image step-2-img "
              />
            </div>
          </div>
        </div>
      </section>
      <section className="why-voicebit-section">
        <div ref={ref17} className={`reveal ${visible17 ? "visible" : ""}`}>
          <h2>Why VoiceBit is Your Next-Gen Choice</h2>
          <div className="why-voicebit-container">
            <div className="voicebit-cards">
              <div className="spacer"></div>
              <div className="why-card">
                <svg
                  width="85"
                  height="85"
                  viewBox="0 0 85 85"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M62.4325 48.8876C66.6825 48.8876 70.125 52.3302 70.125 56.5802V59.5084H70.1038C69.9593 62.8234 69.0497 66.9756 65.331 70.3671C61.268 74.0774 54.2513 76.4999 42.5 76.4999C30.7445 76.4999 23.732 74.0774 19.669 70.3671C15.9502 66.9756 15.0408 62.8191 14.8963 59.5084H14.875V56.5759C14.875 52.3302 18.3175 48.8876 22.5675 48.8876H62.4325ZM27.625 12.7499C25.9342 12.7499 24.3127 13.4215 23.1172 14.6171C21.9216 15.8126 21.25 17.4341 21.25 19.1249V36.1249C21.25 37.8157 21.9216 39.4372 23.1172 40.6327C24.3127 41.8283 25.9342 42.4999 27.625 42.4999H57.375C59.0658 42.4999 60.6873 41.8283 61.8828 40.6327C63.0784 39.4372 63.75 37.8157 63.75 36.1249V19.1249C63.75 17.4341 63.0784 15.8126 61.8828 14.6171C60.6873 13.4215 59.0658 12.7499 57.375 12.7499H44.625V10.6249C44.637 10.3426 44.5903 10.0609 44.4878 9.79768C44.3852 9.53442 44.2291 9.29532 44.0293 9.09555C43.8296 8.89577 43.5905 8.73967 43.3272 8.63714C43.064 8.5346 42.7823 8.48787 42.5 8.4999C41.327 8.4999 40.375 9.4774 40.375 10.6249V12.7499H27.625ZM29.75 27.6249C29.75 26.4977 30.1978 25.4167 30.9948 24.6197C31.7918 23.8227 32.8728 23.3749 34 23.3749C35.1272 23.3749 36.2082 23.8227 37.0052 24.6197C37.8022 25.4167 38.25 26.4977 38.25 27.6249C38.25 28.7521 37.8022 29.8331 37.0052 30.6301C36.2082 31.4271 35.1272 31.8749 34 31.8749C32.8728 31.8749 31.7918 31.4271 30.9948 30.6301C30.1978 29.8331 29.75 28.7521 29.75 27.6249ZM46.75 27.6249C46.75 26.4977 47.1978 25.4167 47.9948 24.6197C48.7918 23.8227 49.8728 23.3749 51 23.3749C52.1272 23.3749 53.2082 23.8227 54.0052 24.6197C54.8022 25.4167 55.25 26.4977 55.25 27.6249C55.25 28.7521 54.8022 29.8331 54.0052 30.6301C53.2082 31.4271 52.1272 31.8749 51 31.8749C49.8728 31.8749 48.7918 31.4271 47.9948 30.6301C47.1978 29.8331 46.75 28.7521 46.75 27.6249Z"
                    fill="#2D96FF"
                  />
                </svg>

                <h3>Smart AI, Trained for Restaurants</h3>
                <p>
                  Purpose-built for food service with industry-specific
                  knowledge
                </p>
              </div>

              <div className="why-card">
                <svg
                  width="85"
                  height="85"
                  viewBox="0 0 85 85"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M64.4 42.5172C64.4 44.5063 66.0425 46.1338 68.05 46.1338H75.35C77.3575 46.1338 79 44.5063 79 42.5172C79 40.528 77.3575 38.9005 75.35 38.9005H68.05C66.0425 38.9005 64.4 40.528 64.4 42.5172ZM59.2535 59.9495C58.9669 60.32 58.7582 60.7436 58.6396 61.1953C58.521 61.647 58.4949 62.1178 58.563 62.5796C58.631 63.0415 58.7918 63.4852 59.0358 63.8845C59.2797 64.2837 59.602 64.6305 59.9835 64.9044C61.918 66.3149 63.962 67.8339 65.8965 69.2805C67.5025 70.474 69.7655 70.1485 70.9335 68.5572C70.9335 68.521 70.97 68.521 70.97 68.4849C71.2556 68.1107 71.4634 67.6841 71.5814 67.2298C71.6994 66.7755 71.7252 66.3025 71.6573 65.8382C71.5894 65.374 71.4291 64.9277 71.1858 64.5253C70.9426 64.1228 70.6211 63.7722 70.24 63.4939C68.3055 62.0472 66.2615 60.5282 64.3635 59.1177C63.9802 58.837 63.5448 58.6339 63.0823 58.5202C62.6197 58.4064 62.139 58.3842 61.6678 58.4547C61.1965 58.5253 60.7439 58.6872 60.3359 58.9313C59.9279 59.1754 59.5725 59.4968 59.29 59.8772C59.29 59.9133 59.2535 59.9495 59.2535 59.9495ZM71.0065 16.5133C71.0065 16.4771 70.97 16.4771 70.97 16.441C70.689 16.0634 70.3352 15.7448 69.9291 15.5038C69.5229 15.2627 69.0725 15.1039 68.604 15.0366C68.1355 14.9694 67.6581 14.9949 67.1996 15.1118C66.7411 15.2287 66.3106 15.4346 65.933 15.7176C63.9985 17.1643 61.918 18.6833 60.02 20.13C58.414 21.3235 58.122 23.5658 59.3265 25.121C59.3265 25.1572 59.363 25.1572 59.363 25.1933C60.5675 26.7847 62.794 27.1102 64.4 25.9167C66.3345 24.5062 68.3785 22.951 70.313 21.5043C71.8825 20.347 72.1745 18.1046 71.0065 16.5133ZM27.9 31.6672H13.3C9.285 31.6672 6 34.9222 6 38.9005V46.1338C6 50.1122 9.285 53.3672 13.3 53.3672H16.95V64.2172C16.95 66.2064 18.5925 67.8339 20.6 67.8339C22.6075 67.8339 24.25 66.2064 24.25 64.2172V53.3672H27.9L46.15 64.2172V20.8171L27.9 31.6672ZM55.275 42.5172C55.275 37.707 53.158 33.367 49.8 30.4013V54.5968C53.158 51.6673 55.275 47.3273 55.275 42.5172Z"
                    fill="#CE1210"
                  />
                </svg>

                <h3>Human Fallback, Always Available</h3>
                <p>Seamless handoff to staff when needed</p>
              </div>
            </div>
            <div className="voicebit-cards">
              <div className="why-card">
                <svg
                  width="85"
                  height="85"
                  viewBox="0 0 85 85"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M45.4467 77.2121C56.5179 74.995 70.8333 67.0298 70.8333 46.435C70.8333 27.696 57.1165 15.2152 47.2529 9.48121C45.0606 8.20621 42.5 9.88142 42.5 12.4137V18.8879C42.5 23.995 40.3537 33.3166 34.3896 37.1948C31.3438 39.1745 28.05 36.2102 27.6817 32.5977L27.3771 29.6298C27.0229 26.1802 23.5096 24.087 20.7542 26.1908C15.7994 29.9627 10.625 36.5856 10.625 46.4314C10.625 71.6162 29.3569 77.9168 38.721 77.9168C39.2688 77.9168 39.8402 77.8991 40.4352 77.8637C35.8098 77.4706 28.3333 74.6018 28.3333 65.3227C28.3333 58.0623 33.6281 53.157 37.6515 50.7664C38.7352 50.1289 39.9996 50.9612 39.9996 52.2185V54.3081C39.9996 55.9018 40.6194 58.3987 42.0892 60.1058C43.7537 62.0395 46.194 60.0137 46.3887 57.4708C46.4525 56.6704 47.26 56.1604 47.9542 56.5641C50.2244 57.8923 53.125 60.7256 53.125 65.3227C53.125 72.576 49.1265 75.9123 45.4467 77.2121Z"
                    fill="#FC7950"
                  />
                </svg>

                <h3>Boost Orders with Friendly Upsells</h3>
                <p>Increase average order value with natural conversation</p>
              </div>

              <div className="why-card">
                <svg
                  width="85"
                  height="85"
                  viewBox="0 0 85 85"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M62.0835 74.9994C59.2507 74.9994 55.2716 73.9751 49.313 70.6467C42.0672 66.5842 36.4627 62.8335 29.2561 55.6472C22.3078 48.7046 18.9265 44.2097 14.1942 35.6C8.84802 25.8789 9.75936 20.7833 10.7781 18.6055C11.9913 16.0025 13.7821 14.4457 16.0967 12.9005C17.4114 12.0393 18.8027 11.301 20.2529 10.6951C20.398 10.6327 20.533 10.5732 20.6534 10.5195C21.3718 10.196 22.4602 9.70702 23.8388 10.2293C24.7589 10.5747 25.5802 11.2813 26.866 12.5508C29.5028 15.1508 33.1061 20.9414 34.4354 23.7852C35.3279 25.7019 35.9185 26.967 35.92 28.386C35.92 30.0473 35.0841 31.3285 34.0697 32.7112C33.8796 32.9709 33.6909 33.219 33.5081 33.4599C32.4037 34.9108 32.1614 35.3301 32.321 36.0788C32.6446 37.5834 35.058 42.0623 39.0241 46.019C42.9902 49.9756 47.3408 52.2361 48.8515 52.5582C49.6322 52.7251 50.0603 52.4726 51.558 51.3293C51.7728 51.1653 51.9933 50.9956 52.2241 50.8258C53.771 49.6752 54.9929 48.8613 56.6154 48.8613H56.6241C58.0361 48.8613 59.2449 49.4736 61.2476 50.4834C63.8597 51.8008 69.8256 55.357 72.442 57.9962C73.7147 59.2788 74.4244 60.0971 74.7712 61.0156C75.2936 62.3983 74.8017 63.4821 74.481 64.2076C74.4273 64.328 74.3678 64.46 74.3054 64.6066C73.6945 66.0539 72.9518 67.442 72.0865 68.7533C70.5439 71.0602 68.981 72.8463 66.3717 74.0607C65.0319 74.6944 63.5656 75.0154 62.0835 74.9994Z"
                    fill="#12AD6F"
                  />
                </svg>

                <h3>Handles 10+ Calls Simultaneously</h3>
                <p>
                  Never miss a customer. Manage high call volume with ease
                  during peak hours.
                </p>
              </div>
            </div>

            <div className="voicebit-cards">
              <div className="spacer"></div>
              <div className="why-card">
                <svg
                  width="85"
                  height="85"
                  viewBox="0 0 85 85"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.31247 42.5C5.31247 21.9619 21.9618 5.3125 42.5 5.3125C63.0381 5.3125 79.6875 21.9619 79.6875 42.5C79.6875 63.0381 63.0381 79.6875 42.5 79.6875C36.21 79.6875 30.2759 78.123 25.075 75.3605L10.3912 79.5361C9.70878 79.7295 8.98706 79.7373 8.30062 79.5586C7.61418 79.3798 6.9879 79.0211 6.48646 78.5194C5.98502 78.0177 5.62661 77.3912 5.44825 76.7047C5.26988 76.0181 5.27803 75.2964 5.47184 74.6141L9.64747 59.933C6.79343 54.5659 5.30462 48.5787 5.31247 42.5ZM26.5625 34.5312C26.5625 35.2357 26.8423 35.9114 27.3405 36.4095C27.8386 36.9076 28.5142 37.1875 29.2187 37.1875H55.7812C56.4857 37.1875 57.1613 36.9076 57.6595 36.4095C58.1576 35.9114 58.4375 35.2357 58.4375 34.5312C58.4375 33.8268 58.1576 33.1511 57.6595 32.653C57.1613 32.1549 56.4857 31.875 55.7812 31.875H29.2187C28.5142 31.875 27.8386 32.1549 27.3405 32.653C26.8423 33.1511 26.5625 33.8268 26.5625 34.5312ZM29.2187 47.8125C28.5142 47.8125 27.8386 48.0924 27.3405 48.5905C26.8423 49.0886 26.5625 49.7643 26.5625 50.4688C26.5625 51.1732 26.8423 51.8489 27.3405 52.347C27.8386 52.8451 28.5142 53.125 29.2187 53.125H45.1562C45.8607 53.125 46.5363 52.8451 47.0345 52.347C47.5326 51.8489 47.8125 51.1732 47.8125 50.4688C47.8125 49.7643 47.5326 49.0886 47.0345 48.5905C46.5363 48.0924 45.8607 47.8125 45.1562 47.8125H29.2187Z"
                    fill="#6C4BFF"
                  />
                </svg>

                <h3>Bilingual & Natural Conversations</h3>
                <p>Speak to customers in their preferred language</p>
              </div>
              <div className="why-card">
                <svg
                  width="85"
                  height="85"
                  viewBox="0 0 85 85"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.3333 42.5C27.3299 42.5 26.4893 42.84 25.8117 43.52C25.134 44.2 24.794 45.0406 24.7917 46.0417V56.6667C24.7917 57.6701 25.1317 58.5119 25.8117 59.1919C26.4917 59.8719 27.3322 60.2107 28.3333 60.2083C29.3344 60.206 30.1762 59.866 30.8585 59.1883C31.5409 58.5107 31.8797 57.6701 31.875 56.6667V46.0417C31.875 45.0382 31.535 44.1976 30.855 43.52C30.175 42.8424 29.3344 42.5024 28.3333 42.5ZM56.6667 24.7917C55.6632 24.7917 54.8226 25.1317 54.145 25.8117C53.4674 26.4917 53.1274 27.3322 53.125 28.3333V56.6667C53.125 57.6701 53.465 58.5119 54.145 59.1919C54.825 59.8719 55.6656 60.2107 56.6667 60.2083C57.6678 60.206 58.5095 59.866 59.1919 59.1883C59.8742 58.5107 60.2131 57.6701 60.2083 56.6667V28.3333C60.2083 27.3299 59.8683 26.4893 59.1883 25.8117C58.5083 25.134 57.6678 24.794 56.6667 24.7917ZM42.5 49.5833C41.4965 49.5833 40.656 49.9233 39.9783 50.6033C39.3007 51.2833 38.9607 52.1239 38.9583 53.125V56.6667C38.9583 57.6701 39.2983 58.5119 39.9783 59.1919C40.6583 59.8719 41.4989 60.2107 42.5 60.2083C43.5011 60.206 44.3428 59.866 45.0252 59.1883C45.7076 58.5107 46.0464 57.6701 46.0417 56.6667V53.125C46.0417 52.1215 45.7017 51.281 45.0217 50.6033C44.3417 49.9257 43.5011 49.5857 42.5 49.5833ZM17.7083 74.375C15.7604 74.375 14.0935 73.682 12.7075 72.296C11.3215 70.9101 10.6274 69.2419 10.625 67.2917V17.7083C10.625 15.7604 11.3192 14.0935 12.7075 12.7075C14.0958 11.3215 15.7628 10.6274 17.7083 10.625H67.2917C69.2396 10.625 70.9077 11.3192 72.296 12.7075C73.6844 14.0958 74.3774 15.7628 74.375 17.7083V67.2917C74.375 69.2396 73.682 70.9077 72.296 72.296C70.9101 73.6844 69.2419 74.3774 67.2917 74.375H17.7083ZM42.5 42.5C43.5035 42.5 44.3452 42.16 45.0252 41.48C45.7052 40.8 46.044 39.9594 46.0417 38.9583C46.0393 37.9572 45.6993 37.1167 45.0217 36.4367C44.344 35.7567 43.5035 35.4167 42.5 35.4167C41.4965 35.4167 40.656 35.7567 39.9783 36.4367C39.3007 37.1167 38.9607 37.9572 38.9583 38.9583C38.956 39.9594 39.296 40.8012 39.9783 41.4835C40.6607 42.1659 41.5013 42.5047 42.5 42.5Z"
                    fill="#FF2AD1"
                  />
                </svg>

                <h3>End-to-End Automation</h3>
                <p>
                  Spend zero time on order processing, payment, driver routing,
                  loyalty, and kitchen operations—everything runs automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-section-container">
        <div
          ref={ref18}
          className={`faq-section reveal ${visible18 ? "visible" : ""}`}
        >
          <h2>Frequently Asked Questions</h2>
          <p className="faq-txt">Everything you need to know about VoiceBit</p>
          <div className="faq-container">
            <div className="faq-item">
              <div
                className="faq-question"
                onClick={() => setActiveIndex(activeIndex === 0 ? null : 0)}
              >
                <span className="faq-toggle">
                  {activeIndex === 0 ? "−" : "+"}
                </span>
                <p>How quickly can VoiceBit be set up for my restaurant?</p>
              </div>
              {activeIndex === 0 && (
                <div className="faq-answer">
                  <p>
                    VoiceBit can be set up in as little as 1 hour. We'll work
                    with you to configure your menu, train the AI on your
                    specific offerings, and ensure everything is working
                    perfectly before going live.
                  </p>
                </div>
              )}
            </div>
            <div className="faq-item">
              <div
                className="faq-question"
                onClick={() => setActiveIndex(activeIndex === 1 ? null : 1)}
              >
                <span className="faq-toggle">
                  {activeIndex === 1 ? "−" : "+"}
                </span>
                <p>
                  What happens if VoiceBit can't handle a customer's request?
                </p>
              </div>
              {activeIndex === 1 && (
                <div className="faq-answer">
                  <p>
                    VoiceBit is designed to seamlessly transfer calls to your
                    staff when needed. The AI will provide context about the
                    customer's request, ensuring a smooth handoff without the
                    customer having to repeat themselves.
                  </p>
                </div>
              )}
            </div>
            <div className="faq-item">
              <div
                className="faq-question"
                onClick={() => setActiveIndex(activeIndex === 2 ? null : 2)}
              >
                <span className="faq-toggle">
                  {activeIndex === 2 ? "−" : "+"}
                </span>
                <p>Can VoiceBit integrate with my existing POS system?</p>
              </div>
              {activeIndex === 2 && (
                <div className="faq-answer">
                  <p>
                    Yes! VoiceBit integrates with most major POS systems used by
                    restaurants. We'll work with you during setup to ensure
                    orders flow directly into your existing workflow.
                  </p>
                </div>
              )}
            </div>
            <div className="faq-item">
              <div
                className="faq-question"
                onClick={() => setActiveIndex(activeIndex === 3 ? null : 3)}
              >
                <span className="faq-toggle">
                  {activeIndex === 3 ? "−" : "+"}
                </span>
                <p>What languages does VoiceBit support?</p>
              </div>
              {activeIndex === 3 && (
                <div className="faq-answer">
                  <p>
                    VoiceBit currently supports English and Spanish, with plans
                    to add more languages based on customer demand. The AI can
                    switch between languages naturally during a conversation.
                  </p>
                </div>
              )}
            </div>
            <div className="faq-item">
              <div
                className="faq-question"
                onClick={() => setActiveIndex(activeIndex === 4 ? null : 4)}
              >
                <span className="faq-toggle">
                  {activeIndex === 4 ? "−" : "+"}
                </span>
                <p>How accurate is VoiceBit at taking orders?</p>
              </div>
              {activeIndex === 4 && (
                <div className="faq-answer">
                  <p>
                    VoiceBit achieves over 99% accuracy in order taking. The AI
                    is specifically trained on restaurant terminology and common
                    customer requests, and learns from each interaction to
                    improve over time.
                  </p>
                </div>
              )}
            </div>
            <div className="faq-item">
              <div
                className="faq-question"
                onClick={() => setActiveIndex(activeIndex === 5 ? null : 5)}
              >
                <span className="faq-toggle">
                  {activeIndex === 5 ? "−" : "+"}
                </span>
                <p>What if my internet goes down?</p>
              </div>
              {activeIndex === 5 && (
                <div className="faq-answer">
                  <p>
                    VoiceBit has built-in redundancy and can route calls to your
                    backup numbers or mobile phones if your primary internet
                    connection fails. We also provide 24/7 monitoring to ensure
                    maximum uptime.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="sales-channel-section">
        <div
          ref={ref19}
          className={`sales-channel-container reveal ${
            visible19 ? "visible" : ""
          }`}
        >
          <div className="sales-text">
            <h2>
              Ready to turn your <br />
              phone into a <span>reliable sales channel?</span>
            </h2>
            <p className="highlight">Try it yourself and order a pizza</p>
            <p className="phone-number">
              Call{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23px"
                  height="23px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
                    fill="#335C66B8"
                  />
                </svg>
              </span>
              (925) 660-7336
            </p>
            <button className="demo-btn" onClick={openPopup}>
              Book a Demo
            </button>
            <ul className="features-list">
              <li>
                <span>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_117_718)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 16C0 11.7565 1.68571 7.68687 4.68629 4.68629C7.68687 1.68571 11.7565 0 16 0C20.2435 0 24.3131 1.68571 27.3137 4.68629C30.3143 7.68687 32 11.7565 32 16C32 20.2435 30.3143 24.3131 27.3137 27.3137C24.3131 30.3143 20.2435 32 16 32C11.7565 32 7.68687 30.3143 4.68629 27.3137C1.68571 24.3131 0 20.2435 0 16ZM15.0869 22.848L24.2987 11.3323L22.6347 10.0011L14.7797 19.8165L9.216 15.1808L7.85067 16.8192L15.0869 22.848Z"
                        fill="#12AD6F"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_117_718">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <p>Keep your phone number</p>
              </li>
              <li>
                <span>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_117_718)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 16C0 11.7565 1.68571 7.68687 4.68629 4.68629C7.68687 1.68571 11.7565 0 16 0C20.2435 0 24.3131 1.68571 27.3137 4.68629C30.3143 7.68687 32 11.7565 32 16C32 20.2435 30.3143 24.3131 27.3137 27.3137C24.3131 30.3143 20.2435 32 16 32C11.7565 32 7.68687 30.3143 4.68629 27.3137C1.68571 24.3131 0 20.2435 0 16ZM15.0869 22.848L24.2987 11.3323L22.6347 10.0011L14.7797 19.8165L9.216 15.1808L7.85067 16.8192L15.0869 22.848Z"
                        fill="#12AD6F"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_117_718">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <p>30-day free trial</p>
              </li>
              <li>
                <span>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_117_718)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 16C0 11.7565 1.68571 7.68687 4.68629 4.68629C7.68687 1.68571 11.7565 0 16 0C20.2435 0 24.3131 1.68571 27.3137 4.68629C30.3143 7.68687 32 11.7565 32 16C32 20.2435 30.3143 24.3131 27.3137 27.3137C24.3131 30.3143 20.2435 32 16 32C11.7565 32 7.68687 30.3143 4.68629 27.3137C1.68571 24.3131 0 20.2435 0 16ZM15.0869 22.848L24.2987 11.3323L22.6347 10.0011L14.7797 19.8165L9.216 15.1808L7.85067 16.8192L15.0869 22.848Z"
                        fill="#12AD6F"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_117_718">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <p>Cancel anytime</p>
              </li>
            </ul>
          </div>
          <div className="sales-image">
            <img
              src={phoneImage}
              alt="Mobile view of Voicebit AI voice ordering assistant"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
