"use client";

import { useState } from "react";
import type { NextPage } from "next";
import classNames from "classnames/bind";
import { SECTION } from "@/utils/constants/constants";
import { INavbarProps } from "@/utils/typings/typings";
import styles from "./Navbar.module.scss";

const cx = classNames.bind(styles);

const Navbar: NextPage<INavbarProps> = ({
  onNavItemClick = () => {},
  switchTheme: _switchTheme = () => {},
  theme: _theme,
}) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <>
      <nav className={cx("navbar")}>
        <div className={cx("menu")}>
          <input
            className={cx("checked")}
            type="checkbox"
            checked={showSidebar}
            onChange={() => setShowSidebar(!showSidebar)}
          />
          <div className={cx("line", showSidebar ? "line-1" : "line1")} />
          <div className={cx("line", showSidebar ? "line-2" : "line2")} />
          <div className={cx("line", showSidebar ? "line-3" : "line3")} />
        </div>
        {/** Title and theme icon removed */}
        <div className={cx("navbar-list")}>
          <p className={cx("navbar-list-item")} onClick={() => onNavItemClick(SECTION.ABOUT)}>
            About
          </p>
          <p className={cx("navbar-list-item")} onClick={() => onNavItemClick(SECTION.JOBS)}>
            Work
          </p>
          <p className={cx("navbar-list-item")} onClick={() => onNavItemClick(SECTION.PROJECTS)}>
            Projects
          </p>
          <p className={cx("navbar-list-item")} onClick={() => onNavItemClick(SECTION.SKILLS)}>
            Skills
          </p>
          {/** Contact removed */}
        </div>
      </nav>
      <div className={cx("sidebar", showSidebar && "active")}>
        <p className={cx("sidebar-item")} onClick={() => onNavItemClick(SECTION.ABOUT)}>
          About
        </p>
        <p className={cx("sidebar-item")} onClick={() => onNavItemClick(SECTION.JOBS)}>
          Work
        </p>
        <p className={cx("sidebar-item")} onClick={() => onNavItemClick(SECTION.PROJECTS)}>
          Projects
        </p>
        <p className={cx("sidebar-item")} onClick={() => onNavItemClick(SECTION.SKILLS)}>
          Skills
        </p>
        {/** Contact removed */}
      </div>
    </>
  );
};

export default Navbar;
