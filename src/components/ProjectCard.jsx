import React, { useContext } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { useMediaQuery } from 'react-responsive';
import PortfolioContext from '../context/PortfolioContext';
import portfolio from '../services/ProjectsData';

export default function ProjectCard() {
  const { featuredProjects, seeMoreProjects: { projectsAmount } } = useContext(PortfolioContext);

  const isDesktop = useMediaQuery({ query: '(min-width: 1250px)' });

  return (
    <>
      {portfolio.slice(featuredProjects, projectsAmount).map(
        (
          {
            name, image, description, tools, liveProject, githubCode,
          },
          index,
        ) => (
          <div
            className={`project-card card-trigger-${index}`}
            data-aos="zoom-in"
            data-aos-once
            data-aos-anchor={
              index === 0 || isDesktop ? undefined : `.card-trigger-${index - 1}`
            }
            data-aos-anchor-placement="top-bottom"
            key={index}
          >
            <img src={image} alt={name} className="project-preview" />
            <div className="project-card-info">
              <div className="project-name-tools">
                <div className="project-name">
                  <h3>{name}</h3>
                  <p>{description}</p>
                </div>
                <div className="project-tools">
                  {tools.map((tool) => (
                    <button type="button" key={tool}>{tool}</button>
                  ))}
                </div>
              </div>
              <div className="project-buttons">
                <a href={liveProject} target="_blank" rel="noreferrer">
                  <button type="button" className="project-view">
                    <span>View Project</span>
                    <HiOutlineArrowNarrowRight />
                  </button>
                </a>
                <a href={githubCode} target="_blank" rel="noreferrer">
                  <button type="button">
                    <span>View Code</span>
                    <HiOutlineArrowNarrowRight />
                  </button>
                </a>
              </div>
            </div>
          </div>
        ),
      )}
    </>
  );
}
