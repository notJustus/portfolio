"use client";

import React, { useRef } from "react";
import type { NextPage } from "next";
import classNames from "classnames/bind";
// Removed Toaster as contact form and toasts are no longer used
import Image from "next/image";
import { Navbar } from "@/components";
import { AboutSection, JobsSection, ProjectsSection, SkillsSection, FooterSection } from "@/containers";
import { SECTION } from "@/utils/constants/constants";
import { IHomePageLayoutProps } from "@/utils/typings/typings";
import { useScroll, useTheme } from "@/utils/hooks";
import styles from "./HomePageLayout.module.scss";

const cx = classNames.bind(styles);

const HomePageLayout: NextPage<IHomePageLayoutProps> = ({ cmsApiResponse }) => {
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});
  const { isScrollButtonVisible } = useScroll();
  const { theme, switchTheme } = useTheme();

  const { jobs, skills, projects } = cmsApiResponse;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavItemClick = (item: string) => {
    window.scrollTo({
      top: SECTION.ABOUT === item ? 0 : sectionsRef.current[item.toLowerCase()]!.offsetTop - 70,
      behavior: "smooth",
    });
  };

  return (
    <div data-theme={theme} className={cx("home-page-layout")}>
      <header className={cx("header")}>
        <Navbar theme={theme} onNavItemClick={handleNavItemClick} switchTheme={switchTheme} />
      </header>
      <main>
        <section
          className={cx("about-section")}
          ref={el => {
            sectionsRef.current.about = el;
          }}
        >
          <AboutSection />
        </section>
        <section
          className={cx("job-section")}
          ref={el => {
            sectionsRef.current.jobs = el;
          }}
        >
          <JobsSection jobs={jobs} />
        </section>
        <section
          className={cx("projects-section")}
          ref={el => {
            sectionsRef.current.projects = el;
          }}
        >
          <ProjectsSection projects={projects} />
        </section>
        <section
          className={cx("skills-section")}
          ref={el => {
            sectionsRef.current.skills = el;
          }}
        >
          <SkillsSection skills={skills} />
        </section>
        {/** Contact section removed */}
      </main>
      <FooterSection />
      {isScrollButtonVisible && (
        <Image
          src="/assets/scrollup.webp"
          alt="scroll-up-button"
          className={cx("scroll-up")}
          width={40}
          height={40}
          priority
          onClick={scrollToTop}
        />
      )}
      {/** Toaster removed */}
    </div>
  );
};

export default HomePageLayout;
