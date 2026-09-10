import React, { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import classNames from "classnames/bind";
import { FaBeer, FaRobot } from "react-icons/fa";
import { TechStack } from "@/utils/constants/constants";
import { IProjectCardProps } from "@/utils/typings/typings";
import { VideoModal } from "@/components";
import { isValidUrl, isValidVideoUrl } from "@/utils/security/urlValidator";
import styles from "./ProjectCard.module.scss";

const cx = classNames.bind(styles);

// Filter tab labels double as techStack entries, so they are not shown as tech chips
const filterCategories = new Set(Object.values(TechStack).map(value => value.toLowerCase()));

const ProjectCard: NextPage<IProjectCardProps> = ({ project }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const getProjectIcon = () => {
    switch (project?.title) {
      case "PintKing":
        return <FaBeer size={80} color="var(--text-color-two)" />;
      case "AgentLink":
        return <FaRobot size={80} color="var(--text-color-two)" />;
      default:
        return null;
    }
  };
  return (
    <div className={cx("project-card")}>
      <div
        className={cx("project-card-image-container")}
        onClick={() =>
          project?.videoUrl && isValidVideoUrl(project.videoUrl) && setIsVideoModalOpen(true)
        }
        style={{ cursor: project?.videoUrl ? "pointer" : "default" }}
      >
        {project?.videoUrl ? (
          <>
            <Image
              src={project?.image?.url}
              alt="project-image"
              width={200}
              height={120}
              className="object-contain bg-black"
              priority
            />
            <div className={cx("project-card-play-overlay")}>
              <div className={cx("project-card-play-button")}>▶</div>
            </div>
          </>
        ) : getProjectIcon() ? (
          <div className={cx("project-card-icon-container")}>{getProjectIcon()}</div>
        ) : project?.image?.url ? (
          <Image
            src={project?.image?.url}
            alt="project-image"
            width={200}
            height={120}
            className="object-contain bg-black"
            priority
          />
        ) : null}
      </div>
      <p className={cx("project-card-title")}>{project?.title}</p>
      <div className={cx("project-card-techStack")}>
        {project?.techStack
          ?.filter(stack => !filterCategories.has(stack?.text?.toLowerCase()))
          ?.map(stack => (
            <span key={stack?.text} className={cx("project-card-techStack-tech")}>
              {stack?.text}
            </span>
          ))}
      </div>
      <p className={cx("project-card-description")}>{project?.description}</p>
      <div className={cx("project-card-links")}>
        {project?.githubLink && isValidUrl(project?.githubLink) && (
          <Image
            src="/assets/github.webp"
            alt="github-image"
            onClick={() => window.open(project?.githubLink, "_blank", "noopener,noreferrer")}
            width={35}
            height={35}
            priority
          />
        )}
        {project?.demoLink && isValidUrl(project?.demoLink) && (
          <Image
            src="/assets/www.webp"
            alt="link-image"
            onClick={() => window.open(project?.demoLink, "_blank", "noopener,noreferrer")}
            width={35}
            height={35}
            priority
          />
        )}
      </div>

      {project?.videoUrl && isValidVideoUrl(project.videoUrl) && (
        <VideoModal
          videoUrl={project.videoUrl}
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ProjectCard;
