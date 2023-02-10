import React, { useState } from "react";
import styles from "./hero.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image1 from "../sliderImage/image_1.jpg";
import Image2 from "../sliderImage/image_2.jpg";
import { Link } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";

const Hero = () => {
  const [flip, setFlip] = useState(false);
  const spring = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: true,
    delay: 200,
    onRest: () => setFlip(!flip),
  });
  return (
    <React.Fragment>
      <div className={styles.hero}>
        <div className={styles.carousel_container}>
          <Carousel
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            showThumbs={false}
            autoPlay
            stopOnHover
          >
            <div>
              <img
                src={Image1}
                alt=""
                style={{
                  width: "100%",
                  height: "80vh",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />
            </div>
            <div>
              <img
                src={Image2}
                alt=""
                style={{
                  width: "100%",
                  height: "80vh",
                }}
              />
            </div>
          </Carousel>
        </div>
        <div className={styles.make_opacity}>
          <div className={styles.second}>
            <h1>Buy Your Tickets Easily and Enjoy Your Journey.</h1>
            <div style={{ width: "700px", marginBottom: "2rem" }}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                libero possimus nam nulla dolorem dicta ipsam recusandae,
                asperiores deserunt quam.
              </p>
            </div>
            <Link to="/" className={styles.signinregbtn}>
              Sign In/Register
            </Link>
          </div>
        </div>

        <div style={{ height: "100vh" }}></div>
      </div>
    </React.Fragment>
  );
};

export default Hero;
