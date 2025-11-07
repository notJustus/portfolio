import React from "react";
import type { NextPage } from "next";
import classNames from "classnames/bind";
import { SkillCard } from "@/components";
import { ISkillsSectionProps } from "@/utils/typings/typings";
import { SKILLSET } from "@/utils/constants/constants";
import { useFilteredSkills } from "@/utils/hooks";
import styles from "./SkillsSection.module.scss";

const cx = classNames.bind(styles);

const SkillsSection: NextPage<ISkillsSectionProps> = ({ skills }) => {
  const { filteredSkill: languages } = useFilteredSkills(skills, SKILLSET.LANGUAGES);
  const { filteredSkill: frontend } = useFilteredSkills(skills, SKILLSET.FRONTEND);
  const { filteredSkill: backend } = useFilteredSkills(skills, SKILLSET.BACKEND);
  const { filteredSkill: mobile } = useFilteredSkills(skills, SKILLSET.MOBILE);
  const { filteredSkill: machineLearning } = useFilteredSkills(skills, SKILLSET.MACHINE_LEARNING);
  const { filteredSkill: others } = useFilteredSkills(skills, SKILLSET.OTHERS);

  return (
    <div className={cx("skills")}>
      <h1 className={cx("skills-heading")}>Skills</h1>
      <div className={cx("skills-container")}>
        <SkillCard skills={languages} skillName="Languages" />
        <SkillCard skills={frontend} skillName="Frontend" />
        <SkillCard skills={backend} skillName="Backend" />
        <SkillCard skills={mobile} skillName="Mobile" />
        <SkillCard skills={machineLearning} skillName="Machine Learning" />
        <SkillCard skills={others} skillName="Others" />
      </div>
    </div>
  );
};

export default SkillsSection;
