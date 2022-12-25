import React from 'react';
import './Header.css';

function Header() {
  return (
        <header className="header flex text-4xl justify-center items-center py-5 bg-[#f9d4cd] sm:bg-white gap-2 w-[100%]">
        <img src="https://cdn-icons-png.flaticon.com/512/906/906334.png" alt="tasks logo" />
        <h1 className='text-[#555252]'>Today's Tasks</h1>
      </header>
  )
}

export default Header;