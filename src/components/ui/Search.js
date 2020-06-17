import React, { useState } from "react";

const Search = ({ handleSearch, clickOption }) => {
  const [regionOption, setRegionOption] = useState(false);

  const clickRegion = () => {
    setRegionOption(!regionOption);
  };

  return (
    <div className='flex items-center justify-between mt-12 text-white-dark-mode'>
      <div className='flex items-center'>
        <div className='relative'>
          <input
            style={{ width: "27rem" }}
            type='text'
            className='bg-dark-blue px-16 py-3 focus:outline-none rounded shadow-md'
            placeholder='Search for a country...'
            onChange={(e) => handleSearch(e.target.value)}
          />
          <div className='absolute top-0'>
            <svg
              className='mt-4 ml-5 w-4 fill-current'
              id='icon-star'
              viewBox='0 0 32 32'
            >
              <path d='M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z'></path>
            </svg>
          </div>
        </div>
      </div>
      <div className='flex items-center'>
        <div className='relative'>
          <button
            onClick={clickRegion}
            className='text-sm bg-dark-blue pr-16 pl-4 py-3 focus:outline-none rounded shadow-md'
          >
            Filter by Region
            <div className='absolute top-0'>
              <svg
                className='mt-4 ml-32 w-4 fill-current'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 1200 1200'
              >
                <path d='M600.006 989.352l178.709-178.709L1200 389.357l-178.732-178.709L600.006 631.91L178.721 210.648L0 389.369l421.262 421.262l178.721 178.721h.023z' />
              </svg>
            </div>
          </button>
          {regionOption && (
            <div className='absolute top-0 bg-dark-blue mt-12 w-full py-2 px-4 rounded text-sm '>
              <div className='flex flex-col text-sm '>
                <button
                  onClick={(e) => clickOption(e.target.value)}
                  value='Africa'
                  className='mt-2 mb-2 hover:text-gray-400 cursor-pointer text-left focus:outline-none focus:outline-none'
                >
                  Africa
                </button>
                <button
                  onClick={(e) => clickOption(e.target.value)}
                  value='America'
                  className='mt-2 mb-2 hover:text-gray-400 cursor-pointer text-left focus:outline-none'
                >
                  America
                </button>
                <button
                  onClick={(e) => clickOption(e.target.value)}
                  value='Asia'
                  className='mt-2 mb-2 hover:text-gray-400 cursor-pointer text-left focus:outline-none'
                >
                  Asia
                </button>
                <button
                  onClick={(e) => clickOption(e.target.value)}
                  value='Europe'
                  className='mt-2 mb-2 hover:text-gray-400 cursor-pointer text-left focus:outline-none'
                >
                  Europe
                </button>
                <button
                  onClick={(e) => clickOption(e.target.value)}
                  value='Oceania'
                  className='mt-2 mb-2 hover:text-gray-400 cursor-pointer text-left focus:outline-none'
                >
                  Oceania
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
