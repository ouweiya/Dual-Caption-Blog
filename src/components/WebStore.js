import React from 'react';
import webstore from '/img/webstore.png';

const WebStore = () => {
  return (
    <section id="webStore">
      <a
        href="https://chrome.google.com/webstore/detail/youtube-dual-subtitles/hkbdddpiemdeibjoknnofflfgbgnebcm"
        target="_blank"
        rel="noreferrer"
        className="bg-[#E8F0FE] p-4 rounded-md grid grid-flow-col items-center gap-x-3 max-w-max">
        <img src={webstore} alt="webstore.png" width="206" height="58" className="w-[206px] h-[58px] bg-white" />
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.3333 12H20V4H12V12H6.66667L16 21.3333L25.3333 12ZM6.66667 24V26.6667H25.3333V24H6.66667Z" fill="#3485FF" />
        </svg>
      </a>
    </section>
  );
};

export default WebStore;
