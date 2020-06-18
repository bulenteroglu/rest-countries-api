import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  return (
    <div className='mt-16'>
      <div className='grid md:grid-cols-4 gap-12'>
        {data &&
          data.map((country) => (
            <Link key={country.name} to={`/country/${country.name}`}>
              <div className='mx-8 md:mx-0 bg-dark-blue text-white-dark-mode shadow-lg rounded overflow-hidden md:mb-16'>
                <a href='#'>
                  <img
                    className='object-cover w-full h-48'
                    src={country.flag}
                    alt='country-flag'
                  />
                  <div className='pt-6 px-8 pb-12'>
                    <h2 className='font-semibold text-xl'>{country.name}</h2>
                    <p className='mt-4'>
                      Population:{" "}
                      <span className='font-thin'>
                        {country.population.toLocaleString()}
                      </span>
                    </p>
                    <p className='mt-1'>
                      Region:{" "}
                      <span className='font-thin'>{country.region}</span>
                    </p>
                    <p className='mt-1'>
                      Capitial:{" "}
                      <span className='font-thin'>{country.capital}</span>
                    </p>
                  </div>
                </a>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Cards;
