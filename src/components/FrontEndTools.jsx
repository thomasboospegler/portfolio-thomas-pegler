import React from 'react';
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiJest,
  SiRedux,
  SiTailwindcss,
} from 'react-icons/si';
import { FaSass } from 'react-icons/fa';
import rtlLogo from '../assets/images/testing-library.svg';

export default function FrontEndTools() {
  return (
    <div className="front-end-container">
      <p data-aos="flip-up" data-aos-once>Front-end</p>
      <ul className="languages-container">
        <li data-aos="fade-up" data-aos-once data-aos-delay="100">
          <div>
            <SiJavascript />
          </div>
          <span>JavaScript</span>
        </li>
        <li data-aos="fade-up" data-aos-once data-aos-delay="150">
          <div>
            <SiTypescript />
          </div>
          <span>TypeScript</span>
        </li>
        <li data-aos="fade-up" data-aos-once data-aos-delay="200">
          <div>
            <SiHtml5 />
          </div>
          <span>HTML5</span>
        </li>
        <li data-aos="fade-up" data-aos-once data-aos-delay="250">
          <div>
            <SiCss3 />
          </div>
          <span>CSS3</span>
        </li>
        <li data-aos="fade-up" data-aos-once data-aos-delay="300">
          <div>
            <SiReact />
          </div>
          <span>React.js</span>
        </li>
        <li data-aos="fade-up" data-aos-once data-aos-delay="350">
          <div>
            <SiRedux />
          </div>
          <span>Redux</span>
        </li>
        <li data-aos="fade-up" data-aos-once data-aos-delay="400">
          <div>
            <SiJest />
          </div>
          <span>Jest</span>
        </li>
        <li data-aos="fade-up" data-aos-once data-aos-delay="450">
          <div>
            <img src={rtlLogo} alt="rtl logo" />
          </div>
          <span>RTL</span>
        </li>
        <li data-aos="fade-up" data-aos-once data-aos-delay="500">
          <div>
            <FaSass />
          </div>
          <span>Sass</span>
        </li>
        <li data-aos="fade-up" data-aos-once data-aos-delay="550">
          <div>
            <SiTailwindcss />
          </div>
          <span>Tailwind</span>
        </li>
      </ul>
    </div>
  );
}
