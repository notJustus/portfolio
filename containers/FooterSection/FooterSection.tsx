import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import classNames from "classnames/bind";
import styles from "./FooterSection.module.scss";

const cx = classNames.bind(styles);

const FooterSection: NextPage = () => {
  return (
    <footer className={cx("footer")}>
      <div className={cx("footer_copyright")}>
        <p className={cx("footer-copyright-main-text")}>&copy; 2025 / Justus Beck</p>
      </div>
      <div className={cx("footer-socialmedia")}>
        <div className={cx("footer-socialmedia-links")}>
          <Image
            src="/assets/github.webp"
            alt="Github Link"
            width={35}
            height={35}
            priority
            onClick={() => window.open("https://github.com/notJustus", "_blank", "noopener,noreferrer")}
          />
          <Image
            src="/assets/linkedin.webp"
            alt="Linkedin Link"
            width={35}
            height={35}
            priority
            onClick={() => window.open("https://www.linkedin.com/in/justus-beck/", "_blank", "noopener,noreferrer")}
          />
          <Image
            src="/assets/gmail.webp"
            alt="Gmail Link"
            width={35}
            height={35}
            priority
            onClick={() => window.open("mailto:justus.beck01@gmail.com", "_blank", "noopener,noreferrer")}
          />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
