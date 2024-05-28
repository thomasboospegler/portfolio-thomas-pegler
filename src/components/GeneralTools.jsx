import React from 'react';
import {
  SiVisualstudiocode, SiGit, SiGithub, SiTrello,
} from 'react-icons/si';
import { FaTerminal } from 'react-icons/fa';
import { RiDeviceLine } from 'react-icons/ri';

export default function GeneralTools() {
  return (
    <div className="general-container">
      <p data-aos="flip-up" data-aos-once>General</p>
      <ul className="languages-container">
        <li data-aos="fade-up" data-aos-once data-aos-delay="100">
          <div>
            <SiVisualstudiocode />
          </div>
          <span>VS Code</span>
        </li>
        <li data-aos="fade-up" data-aos-once data-aos-delay="150">
          <div>
            <SiGit />
          </div>
          <span>Git</span>
        </li>
        <li data-aos="fade-up" data-aos-once data-aos-delay="200">
          <div>
            <SiGithub />
          </div>
          <span>Github</span>
        </li>
        <li data-aos="fade-up" data-aos-once data-aos-delay="250">
          <div>
            <SiTrello />
          </div>
          <span>Trello</span>
        </li>
        <li data-aos="fade-up" data-aos-once data-aos-delay="300">
          <div>
            <FaTerminal />
          </div>
          <span>Command Line</span>
        </li>
        <li data-aos="fade-up" data-aos-once data-aos-delay="350">
          <div>
            <RiDeviceLine />
          </div>
          <span>Responsive Websites</span>
        </li>
      </ul>
    </div>
  );
}
