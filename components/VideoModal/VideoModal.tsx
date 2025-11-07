import React, { useEffect } from "react";
import type { NextPage } from "next";
import classNames from "classnames/bind";
import { isValidVideoUrl } from "@/utils/security/urlValidator";
import styles from "./VideoModal.module.scss";

const cx = classNames.bind(styles);

interface IVideoModalProps {
  videoUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: NextPage<IVideoModalProps> = ({ videoUrl, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !isValidVideoUrl(videoUrl)) return null;

  return (
    <div className={cx("video-modal-overlay")} onClick={onClose}>
      <div className={cx("video-modal-content")} onClick={(e) => e.stopPropagation()}>
        <button className={cx("video-modal-close")} onClick={onClose}>
          ×
        </button>
        <video
          className={cx("video-modal-video")}
          controls
          autoPlay
          src={videoUrl}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoModal;
