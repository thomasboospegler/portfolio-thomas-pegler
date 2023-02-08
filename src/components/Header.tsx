import React from 'react';
import { BsMoonStarsFill } from 'react-icons/bs';

export default function Header() {
  return (
    <header className="bg-gray-100 py-5 px-10 flex justify-between items-center">
      <section>
        <h2 className="text-xl">
          Thomas
          {' '}
          <span className="text-cyan-500 ">Boos</span>
          {' '}
          Pegler
        </h2>
      </section>
      <section>
        <ul className="flex items-center gap-3">
          <li><BsMoonStarsFill className="cursor-pointer text-2xl" /></li>
          <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md" href="/">CV</a></li>
        </ul>
      </section>
    </header>
  );
}
