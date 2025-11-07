import React from "react";
import type { NextPage } from "next";
import classNames from "classnames/bind";
import { 
  SiC, 
  SiCplusplus, 
  SiPython, 
  SiPostgresql, 
  SiScala, 
  SiOpenjdk, 
  SiR, 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiFirebase, 
  SiSupabase, 
  SiSwift, 
  SiKotlin, 
  SiGit, 
  SiDocker,
  SiReact,
  SiTypescript,
  SiReactrouter,
  SiChakraui,
  SiDjango,
  SiJsonwebtokens,
  SiCoder
} from "react-icons/si";
import { ISkillCardProps } from "@/utils/typings/typings";
import { isValidUrl } from "@/utils/security/urlValidator";
import styles from "./SkillCard.module.scss";

const cx = classNames.bind(styles);

const SkillCard: NextPage<ISkillCardProps> = ({ skills, skillName }) => {
  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<{ size: number; color: string }> } = {
      SiC,
      SiCplusplus,
      SiPython,
      SiPostgresql,
      SiScala,
      SiOpenjdk,
      SiR,
      SiHtml5,
      SiCss3,
      SiJavascript,
      SiFirebase,
      SiSupabase,
      SiSwift,
      SiKotlin,
      SiGit,
      SiDocker,
      SiReact,
      SiTypescript,
      SiReactrouter,
      SiChakraui,
      SiDjango,
      SiJsonwebtokens,
    };

    const IconComponent = iconMap[iconName];
    if (IconComponent) {
      return <IconComponent size={50} color="var(--text-color-two)" />;
    }
    return <SiCoder size={50} color="var(--text-color-two)" />;
  };

  return (
    <div className={cx("skill-card")}>
      <p className={cx("skill-card-heading")}>{skillName}</p>
      <div className={cx("skill-card-container")}>
        {skills?.map(skill => (
          <div
            key={skill?.id}
            className={cx("skill-card-container-item")}
            onClick={() => {
              if (isValidUrl(skill?.url)) {
                window.open(skill?.url, "_blank", "noopener,noreferrer");
              }
            }}
          >
            {getIcon(skill?.image?.url)}
            <p>{skill?.skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
