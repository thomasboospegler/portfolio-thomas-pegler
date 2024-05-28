import React from 'react';
import {SiNodedotjs, SiPython, SiTypescript,
  SiMysql, SiMongodb, SiDocker} from 'react-icons/si';

export default function BackEndTools() {
  return (
    <div className="front-end-container">
      <p data-aos="flip-up" data-aos-once>Back-end</p>
      <ul className="languages-container">
        <li data-aos="fade-up" data-aos-once data-aos-delay="100">
          <div>
            <SiNodedotjs />
          </div>
          <span>NodeJs</span>
        </li>
        <li data-aos="fade-up" data-aos-once data-aos-delay="150">
          <div>
            <SiPython />
          </div>
          <span>Python</span>
        </li>
        <li data-aos="fade-up" data-aos-once data-aos-delay="200">
          <div>
            <SiTypescript />
          </div>
          <span>TypeScript</span>
        </li>
        <li data-aos="fade-up" data-aos-once data-aos-delay="250">
          <div>
            <SiMysql />
          </div>
          <span>MySQL</span>
        </li>
        <li data-aos="fade-up" data-aos-once data-aos-delay="300">
          <div>
            <SiMongodb />
          </div>
          <span>MongoDB</span>
        </li>
        <li data-aos="fade-up" data-aos-once data-aos-delay="350">
          <div>
            <SiDocker />
          </div>
          <span>Docker</span>
        </li>
      </ul>
    </div>
  );
}
