import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='bg-dark-blue font-nunito shadow-xl'>
      <nav className='flex justify-between px-20 py-6 items-center text-white-dark-mode'>
        <Link to='/'>
          <h1 className='text-2xl font-extrabold'>Where in the world?</h1>
        </Link>
        <button className='flex items-center focus:outline-none'>
          <svg className='w-8 fill-current' id='icon-moon' viewBox='0 0 32 32'>
            <path d='M21.837 17.831v0c0.088-0.351 0.142-0.716 0.158-1.091-0.468 0.165-0.971 0.254-1.495 0.254-2.485 0-4.5-2.015-4.5-4.5 0-0.524 0.090-1.027 0.254-1.495-0.374 0.016-0.739 0.070-1.091 0.158-2.392 0.597-4.164 2.76-4.164 5.336 0 3.038 2.462 5.5 5.5 5.5 2.577 0 4.739-1.772 5.337-4.163zM12 16.495c0-1.961 1.255-3.63 3.005-4.246-0.004 0.082-0.005 0.163-0.005 0.246 0 3.038 2.462 5.5 5.5 5.5 0.082 0 0.164-0.002 0.246-0.005-0.616 1.751-2.285 3.005-4.246 3.005-2.485 0-4.5-2.015-4.5-4.5v0z'></path>
          </svg>
          <div>Dark Mode</div>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
