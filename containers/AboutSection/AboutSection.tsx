"use client";

import React from "react";
import type { NextPage } from "next";
import classNames from "classnames/bind";
import Image from "next/image";
import styles from "./AboutSection.module.scss";

const cx = classNames.bind(styles);

const AboutSection: NextPage = () => {
  return (
    <div className={cx("about")}>
      <div className={cx("about-left")}>
        <h1 className={cx("about-left-head")}>Justus Beck</h1>
        <h2 className={cx("about-left-tagline")}>
          I teach mobile development and study AI. Now building full-stack applications.
        </h2>
        <p className={cx("about-left-text")}>
          I'm a mobile engineer and AI master student living in Amsterdam. After 3 years of teaching
          others how to build scalable & clean native iOS and Android apps, I want to go back to
          building software myself! Outside of coding, you can find me playing padel at B. Amsterdam
          or with a cheeky pint in Amsterdam's beautiful grachten!
        </p>
        <div className={cx("about-left-socialMedia")}>
          <Image
            src="/assets/github.webp"
            alt="Example WebP"
            width={40}
            height={40}
            priority
            onClick={() =>
              window.open("https://github.com/notJustus", "_blank", "noopener,noreferrer")
            }
          />
          <Image
            src="/assets/linkedin.webp"
            alt="Example WebP"
            width={40}
            height={40}
            priority
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/justus-beck/",
                "_blank",
                "noopener,noreferrer",
              )
            }
          />
          <Image
            src="/assets/gmail.webp"
            alt="Example WebP"
            width={40}
            height={40}
            priority
            onClick={() =>
              window.open("mailto:justus.beck01@gmail.com", "_blank", "noopener,noreferrer")
            }
          />
        </div>
        {/** Star me on GitHub button removed */}
      </div>
      <div className={cx("about-right")}>
        <div className={cx("about-right-profilePic")} />
      </div>
    </div>
  );
};

export default AboutSection;
