/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FiPlayCircle, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({
  name,
  year,
  image,
  imageFit = "cover",
  link,
  videoLink,
  videoLabel,
  youtubeLink,
  status,
  category,
  description,
  index,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imageClassName = useMemo(
    () =>
      imageFit === "contain"
        ? "h-full w-full object-contain p-3 transition-all duration-700 group-hover:scale-105"
        : "h-full w-full object-cover transition-all duration-700 group-hover:scale-110",
    [imageFit]
  );

  useEffect(() => {
    if (!isModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsModalOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);
  const projectVideoLink = videoLink || youtubeLink;
  const isYouTubeVideo = projectVideoLink?.includes("youtu");
  const VideoIcon = isYouTubeVideo ? FaYoutube : FiPlayCircle;
  const projectVideoLabel =
    videoLabel || (isYouTubeVideo ? "View YouTube" : "View Video");
  const shouldShowActions = category === "Mobile" || projectVideoLink || link;

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModal();
    }
  };

  const projectModal =
    isModalOpen &&
    createPortal(
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
        onClick={() => setIsModalOpen(false)}
      >
        <motion.div
          variants={fadeIn("up", 0)}
          initial="hidden"
          animate="show"
          className="max-h-[90vh] w-full max-w-[620px] overflow-y-auto rounded-lg border border-white/10 bg-darkBrown shadow-cyanShadow"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-between gap-4 border-b border-white/10 p-4">
            <div>
              <p className="text-xs font-semibold uppercase text-orange">
                {category}
              </p>
              <h3 className="text-2xl font-bold text-cyan">{name}</h3>
            </div>
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 text-white/70 transition-colors hover:border-cyan/50 hover:text-cyan"
              aria-label="Close project details"
            >
              <FiX size={20} />
            </button>
          </div>

          {image && (
            <div className="bg-black/20 p-4">
              <img
                src={image}
                alt={name}
                className={`mx-auto max-h-[380px] w-full rounded-lg bg-black/20 ${
                  imageFit === "contain" ? "object-contain" : "object-cover"
                }`}
              />
            </div>
          )}

          <div className="p-5">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-lg border border-white/10 px-3 py-2 text-sm text-white/60">
                {year}
              </span>
              {status && (
                <span className="rounded-lg border border-orange/40 px-3 py-2 text-sm text-orange">
                  {status}
                </span>
              )}
            </div>
            <p className="text-sm leading-relaxed text-white/80 sm:text-base">
              {description}
            </p>

            {shouldShowActions && (
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-cyan px-5 py-3 text-sm font-semibold text-cyan transition-colors hover:bg-cyan hover:text-black"
                  >
                    View Project <BsFillArrowUpRightCircleFill size={16} />
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-sm font-semibold text-white/30"
                  >
                    View Project <BsFillArrowUpRightCircleFill size={16} />
                  </button>
                )}
                {projectVideoLink ? (
                  <a
                    href={projectVideoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors ${
                      isYouTubeVideo
                        ? "bg-red-600 text-white hover:bg-red-500"
                        : "bg-orange text-black hover:bg-lightOrange"
                    }`}
                  >
                    <VideoIcon size={18} />
                    {projectVideoLabel}
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white/30"
                  >
                    <FiPlayCircle size={18} />
                    {projectVideoLabel}
                  </button>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>,
      document.body
    );

  return (
    <>
      <motion.div
        variants={fadeIn("up", index * 0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="group relative cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-all duration-500 hover:border-cyan/50 focus:outline-none focus:ring-2 focus:ring-cyan/70"
        onClick={openModal}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`Open ${name} project details`}
      >
        <div className="aspect-video overflow-hidden bg-black/20">
          {image ? (
            <img src={image} alt={name} className={imageClassName} />
          ) : (
            <div className="flex h-full items-center justify-center bg-[#101f3f] p-5">
              <div className="h-full w-[46%] min-w-[120px] rounded-lg border border-cyan/30 bg-black/30 p-3 shadow-cyanShadow">
                <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-white/40" />
                <div className="mb-3 h-16 rounded-md border border-cyan/20 bg-cyan/10" />
                <div className="space-y-2">
                  <div className="h-2 rounded-full bg-orange/80" />
                  <div className="h-2 w-4/5 rounded-full bg-white/25" />
                  <div className="h-2 w-2/3 rounded-full bg-cyan/40" />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <span className="h-8 rounded-md bg-white/10" />
                  <span className="h-8 rounded-md bg-cyan/20" />
                  <span className="h-8 rounded-md bg-orange/20" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Hover overlay with description */}
        <div className="absolute inset-0 flex flex-col justify-between bg-black/85 p-5 opacity-0 transition-all duration-500 group-hover:opacity-100">
          <div>
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <h3 className="text-base font-bold text-cyan">{name}</h3>
              {category && (
                <span className="rounded-md border border-orange/40 px-2 py-1 text-xs text-orange">
                  {category}
                </span>
              )}
            </div>
            <p className="line-clamp-6 text-sm leading-relaxed text-white/80">
              {description}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white/40 text-xs">{year}</span>
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-white transition-colors duration-300 hover:text-cyan"
                onClick={(event) => event.stopPropagation()}
              >
                View Project <BsFillArrowUpRightCircleFill size={16} />
              </a>
            ) : (
              <span className="text-sm text-white/40">
                {status || "Coming Soon"}
              </span>
            )}
          </div>
        </div>

        <div className="p-4">
          <div className="mb-2 flex items-center justify-between gap-3">
            <h2 className="truncate text-base font-bold text-orange">{name}</h2>
            {category && (
              <span className="shrink-0 rounded-md border border-white/10 px-2 py-1 text-xs text-white/50">
                {category}
              </span>
            )}
          </div>
          <p className="text-white/50 text-sm mt-1">{year}</p>
        </div>
      </motion.div>
      {projectModal}
    </>
  );
};

export default SingleProject;
