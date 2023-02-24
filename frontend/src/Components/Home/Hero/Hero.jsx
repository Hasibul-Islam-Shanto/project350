import React, { useState } from "react";
import styles from "./hero.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image1 from "../sliderImage/image_1.jpg";
import Image2 from "../sliderImage/image_2.jpg";
import { Link } from "react-router-dom";
import { BiBus, BiTrain, BiCheckCircle } from "react-icons/bi";

const smallDivDetails = [
  {
    id: 1,
    name: "Bus Ticket",
  },
  {
    id: 2,
    name: "Train Ticket",
  },
  {
    id: 3,
    name: "Check In",
  },
];
const Hero = () => {
  const [active, setActive] = useState(1);
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

        <div className={styles.small_details}>
          <div className={styles.sub_detail}>
            {smallDivDetails.map((detail) => (
              <div
                onClick={() => setActive(detail.id)}
                key={detail.id}
                className={`${styles.sub_detaildiv} ${
                  active === detail.id ? styles.active_subDetaildiv : ""
                }`}
              >
                {detail.id === 1 && <BiBus className={styles.sub_detailIcon} />}
                {detail.id === 2 && (
                  <BiTrain className={styles.sub_detailIcon} />
                )}
                {detail.id === 3 && (
                  <BiCheckCircle className={styles.sub_detailIcon} />
                )}
                {detail.name}
              </div>
            ))}
          </div>

        </div>
      </div>
    </React.Fragment>
  );
};

export default Hero;
