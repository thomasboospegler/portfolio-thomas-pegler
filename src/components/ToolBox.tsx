import React from 'react';
import {
  SiCss3, SiHtml5, SiJavascript, SiJest, SiReact, SiRedux, SiTailwindcss, SiTestinglibrary,
  SiNodedotjs, SiPython, SiTypescript, SiMysql, SiMongodb, SiDocker,
} from 'react-icons/si';
import { DiSass } from 'react-icons/di';

export default function ToolBox() {
  return (
    <section className="text-center">
      <h1 className="text-4xl py-5">My Toolbox</h1>
      <p className="px-5">The skills, tools and technologies I use to bring projects to life:</p>
      <h3 className="text-2xl py-5 pt-14">Front-end</h3>
      <ul className="flex flex-wrap px-10 py-2 gap-5 justify-center">
        <li className="bg-neutral-800 p-7 flex flex-col items-center rounded-lg gap-2 border-b-2 border-teal-500 w-32">
          <SiJavascript className="text-4xl" />
          JavaScript
        </li>
        <li className="bg-neutral-800 p-7 flex flex-col items-center rounded-lg gap-2 border-b-2 border-teal-500 w-32">
          <SiHtml5 className="text-4xl" />
          HTML5
        </li>
        <li className="bg-neutral-800 p-7 flex flex-col items-center rounded-lg gap-2 border-b-2 border-teal-500 w-32">
          <SiCss3 className="text-4xl" />
          CSS3
        </li>
        <li className="bg-neutral-800 p-7 flex flex-col items-center rounded-lg gap-2 border-b-2 border-teal-500 w-32">
          <SiReact className="text-4xl" />
          React.js
        </li>
        <li className="bg-neutral-800 py-7 px-5 flex flex-col items-center rounded-lg gap-2 border-b-2 border-teal-500 w-32">
          <SiReact className="text-4xl" />
          Context API
        </li>
        <li className="bg-neutral-800 p-7 flex flex-col items-center rounded-lg gap-2 border-b-2 border-teal-500 w-32">
          <SiRedux className="text-4xl" />
          Redux
        </li>
        <li className="bg-neutral-800 p-7 flex flex-col items-center rounded-lg gap-2 border-b-2 border-teal-500 w-32">
          <SiJest className="text-4xl" />
          Jest
        </li>
        <li className="bg-neutral-800 p-7 flex flex-col items-center rounded-lg gap-2 border-b-2 border-teal-500 w-32">
          <SiTestinglibrary className="text-4xl" />
          RTL
        </li>
        <li className="bg-neutral-800 p-7 flex flex-col items-center rounded-lg gap-2 border-b-2 border-teal-500 w-32">
          <DiSass className="text-4xl" />
          Sass
        </li>
        <li className="bg-neutral-800 p-7 flex flex-col items-center rounded-lg gap-2 border-b-2 border-teal-500 w-32">
          <SiTailwindcss className="text-4xl" />
          Tailwind
        </li>
      </ul>
      <h3 className="text-2xl py-5 pt-14">Back-end</h3>
      <ul className="flex flex-wrap px-10 py-2 gap-5 justify-center">
        <li className="bg-neutral-800 p-7 flex flex-col items-center rounded-lg gap-2 border-b-2 border-teal-500 w-32">
          <SiJavascript className="text-4xl" />
          JavaScript
        </li>
        <li className="bg-neutral-800 p-7 flex flex-col items-center rounded-lg gap-2 border-b-2 border-teal-500 w-32">
          <SiPython className="text-4xl" />
          Python
        </li>
        <li className="bg-neutral-800 p-7 flex flex-col items-center rounded-lg gap-2 border-b-2 border-teal-500 w-32">
          <SiTypescript className="text-4xl" />
          Typescript
        </li>
        <li className="bg-neutral-800 p-7 flex flex-col items-center rounded-lg gap-2 border-b-2 border-teal-500 w-32">
          <SiNodedotjs className="text-4xl" />
          Node.js
        </li>
        <li className="bg-neutral-800 p-7 flex flex-col items-center rounded-lg gap-2 border-b-2 border-teal-500 w-32">
          <SiMysql className="text-4xl" />
          Mysql
        </li>
        <li className="bg-neutral-800 p-7 flex flex-col items-center rounded-lg gap-2 border-b-2 border-teal-500 w-32">
          <SiMongodb className="text-4xl" />
          Mongodb
        </li>
        <li className="bg-neutral-800 p-7 flex flex-col items-center rounded-lg gap-2 border-b-2 border-teal-500 w-32">
          <SiDocker className="text-4xl" />
          Docker
        </li>
      </ul>
    </section>
  );
}
