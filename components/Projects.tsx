'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { SectionHeader } from './SectionHeader';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  screenshots: string[];
  liveUrl?: string;
  codeUrl?: string;
  coverImage?: string;
}


/* =========================================================
   PROJECT DATA
========================================================= */

const projects: Project[] = [
  {
    title: 'Dental Clinic Website',

    description:
      'A modern responsive dental clinic website designed to provide patients with information about dental services, doctors, appointments, and contact details.',

    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'Responsive Design',
    ],

    coverImage: '/projects/dental-clinic/cover.png',

    screenshots: [
      '/projects/dental-clinic/ss_1.png',
      '/projects/dental-clinic/ss_2.png',
      '/projects/dental-clinic/ss_3.png',
      '/projects/dental-clinic/ss_4.png',
    ],

    liveUrl: 'https://dental-clinic-website-ochre-tau.vercel.app/',

    codeUrl:
      'https://github.com/Varad-codex/Dental-Clinic-Website',
  },
];


/* =========================================================
   LIGHTBOX
========================================================= */

function Lightbox({
  images,
  onClose,
  startIndex = 0,
}: {
  images: string[];
  onClose: () => void;
  startIndex?: number;
}) {
  const [current, setCurrent] = useState(startIndex);

  const prev = () => {
    setCurrent(
      (c) => (c - 1 + images.length) % images.length
    );
  };

  const next = () => {
    setCurrent(
      (c) => (c + 1) % images.length
    );
  };

  return (
    <div
      className="lightbox-overlay"
      onClick={onClose}
    >

      {/* =====================================================
          SCREENSHOT PREVIEW CONTAINER
===================================================== */}

      <div
        className="relative max-w-5xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >

        {/* ===================================================
            CLOSE BUTTON
        =================================================== */}

        <button
          onClick={onClose}
          aria-label="Close screenshots"
          className="
          lightbox-close
          absolute
          -top-12
          right-0
          z-50
          w-10
          h-10
          rounded-full
          flex
          items-center
          justify-center
          text-white
          transition-all
          duration-200"
          style={{
            background: 'rgba(15, 23, 42, 0.9)',
            border: '1px solid rgba(255,255,255,0.2)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line
              x1="18"
              y1="6"
              x2="6"
              y2="18"
            />

            <line
              x1="6"
              y1="6"
              x2="18"
              y2="18"
            />
          </svg>
        </button>


        {/* ===================================================
            IMAGE PREVIEW
        =================================================== */}

        <div
          className="
            relative
            aspect-video
            rounded-xl
            overflow-hidden
            bg-black/60
          "
        >
          {images[current] ? (
            <Image
              src={images[current]}
              alt={`Screenshot ${current + 1}`}
              fill
              className="object-contain"
            />
          ) : (
            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                text-white/40
                text-sm
              "
            >
              No image
            </div>
          )}
        </div>


        {/* ===================================================
            PREVIOUS / COUNTER / NEXT
        =================================================== */}

        {images.length > 1 && (
          <div className="flex items-center justify-center gap-4 mt-4">

            {/* Previous */}
            <button
              onClick={prev}
              className="
                text-white/60
                hover:text-white
                transition
              "
              aria-label="Previous screenshot"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>


            {/* Counter */}
            <span
              className="
                text-white/60
                text-sm
                font-mono
              "
            >
              {current + 1} / {images.length}
            </span>


            {/* Next */}
            <button
              onClick={next}
              className="
                text-white/60
                hover:text-white
                transition
              "
              aria-label="Next screenshot"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

          </div>
        )}

      </div>
    </div>
  );
}


/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({
  project,
}: {
  project: Project;
}) {
  const [lightboxOpen, setLightboxOpen] =
    useState(false);

  return (
    <>
      <div
        className="
          card
          overflow-hidden
          flex
          flex-col
          h-full
        "
      >

        {/* =================================================
            COVER IMAGE
        ================================================= */}

        <div
          className="
            relative
            w-full
            aspect-video
            bg-gradient-to-br
            overflow-hidden
          "
          style={{
            background:
              'linear-gradient(135deg, rgba(37,99,235,0.12), rgba(124,58,237,0.10), rgba(236,72,153,0.10))',
          }}
        >

          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={`${project.title} cover`}
              fill
              className="object-cover"
            />
          ) : (
            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                text-4xl
              "
            >
              🖥️
            </div>
          )}


          {/* =================================================
              SCREENSHOT BADGE
          ================================================= */}

          {project.screenshots.length > 0 && (
            <button
              onClick={() =>
                setLightboxOpen(true)
              }
              className="
                absolute
                top-3
                right-3
                flex
                items-center
                gap-1.5
                text-xs
                font-medium
                px-2.5
                py-1.5
                rounded-lg
                text-white
                backdrop-blur-sm
                transition-all
                hover:scale-105
              "
              style={{
                background:
                  'rgba(0,0,0,0.55)',
              }}
            >
              📷 {project.screenshots.length}{' '}
              Screenshots
            </button>
          )}

        </div>


        {/* =================================================
            PROJECT CONTENT
        ================================================= */}

        <div
          className="
            p-5
            flex
            flex-col
            gap-3
            flex-1
          "
        >

          {/* Title */}
          <h3
            className="
              text-lg
              font-bold
              tracking-tight
            "
            style={{
              color: 'var(--text-primary)',
            }}
          >
            {project.title}
          </h3>


          {/* Description */}
          <p
            className="
              text-sm
              leading-relaxed
              flex-1
            "
            style={{
              color: 'var(--text-secondary)',
            }}
          >
            {project.description}
          </p>


          {/* =================================================
              TECH TAGS
          ================================================= */}

          <div
            className="
              flex
              flex-wrap
              gap-1.5
              pt-1
            "
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="
                  text-xs
                  px-2.5
                  py-1
                  rounded-md
                  font-medium
                  skill-pill
                "
              >
                {tag}
              </span>
            ))}
          </div>


          {/* =================================================
              LINKS
          ================================================= */}

          <div
            className="
              flex
              gap-3
              pt-2
            "
          >

            {/* Live */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  btn-primary
                  text-xs
                  px-4
                  py-2
                "
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />

                  <polyline points="15 3 21 3 21 9" />

                  <line
                    x1="10"
                    y1="14"
                    x2="21"
                    y2="3"
                  />
                </svg>

                Live
              </a>
            )}


            {/* Code */}
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  btn-outline
                  text-xs
                  px-4
                  py-2
                "
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="16 18 22 12 16 6" />

                  <polyline points="8 6 2 12 8 18" />
                </svg>

                Code
              </a>
            )}

          </div>

        </div>

      </div>


      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={project.screenshots}
            onClose={() =>
              setLightboxOpen(false)
            }
          />
        )}
      </AnimatePresence>
    </>
  );
}


/* =========================================================
   PROJECTS SECTION
========================================================= */

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24"
      style={{
        background:
          'var(--bg-secondary)',
      }}
    >

      <div
        className="
          max-w-6xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >

        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <SectionHeader
          number="03"
          title="Projects"
          heading='Selected Projects'
          subtitle="A selection of projects I've built to solve real problems and explore new technologies."
        />


        {/* =================================================
            PROJECT GRID
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
          "
        >

          {projects.map((project, i) => (
            <AnimatedSection
              key={project.title}
              delay={i * 0.1}
            >
              <ProjectCard
                project={project}
              />
            </AnimatedSection>
          ))}

        </div>


        {/* =================================================
            GITHUB BUTTON
        ================================================= */}

        <AnimatedSection delay={0.2}>

          <div
            className="
              flex
              justify-center
              mt-12
            "
          >

            <a
              href="https://github.com/Varad-codex"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >

              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
              </svg>

              View more on GitHub

            </a>

          </div>

        </AnimatedSection>

      </div>

    </section>
  );
}