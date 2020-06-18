import React, { useEffect, useState } from "react";
import { getCountry } from "../../api";
import { Link } from "react-router-dom";

const CountryDetail = ({
  match: {
    params: { id },
  },
}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setData(await getCountry(id));
    };

    fetchAPI();
  }, []);

  const country = data[0];

  console.log(country);

  return (
    <>
      <div className='px-12 md:px-20 mt-12 md:mt-20 md:flex md:flex-col text-white-dark-mode min-h-screen'>
        <div className='flex items-center'>
          <div className='relative'>
            <Link to='/'>
              <button className='px-10 py-1 bg-dark-blue md:px-20 md:py-2 rounded shadow-lg text-center focus:outline-none'>
                Back
              </button>
            </Link>

            <div className='mt-2 ml-3 fill-current w-4 absolute top-0 md:mt-3 md:ml-10'>
              <svg id='icon-arrow-left2' viewBox='0 0 32 32'>
                <path d='M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z'></path>
              </svg>
            </div>
          </div>
        </div>
        {country && (
          <div className='md:flex flex-col md:flex-row mt-12'>
            <div className='md:flex-1'>
              <img
                className='w-full h-full md:w-172 md:h-120'
                src={country.flag}
                alt={country.name}
              />
            </div>
            <div className='mt-8 md:flex md:flex-col flex-1 text-lg justify-center'>
              <h2 className='font-semibold text-3xl text-white-dark-mode'>
                {country.name}
              </h2>
              <div className='md:flex md:flex-col'>
                <div className='text-sm md:flex md:text-base'>
                  <div>
                    <p className='mt-3 mt-4 font-medium'>
                      Native Name:{" "}
                      <span className='font-light'>{country.nativeName}</span>
                    </p>
                    <p className='mt-3 md:mt-2 font-medium'>
                      Population:{" "}
                      <span className='font-light'>
                        {country.population.toLocaleString()}
                      </span>
                    </p>
                    <p className='mt-3 md:mt-2 font-medium'>
                      Region:{" "}
                      <span className='font-light'>{country.region}</span>
                    </p>
                    <p className='mt-3 md:mt-2 font-medium'>
                      Sub Region:{" "}
                      <span className='font-light'>{country.subregion}</span>
                    </p>
                    <p className='mt-3 md:mt-2 font-medium'>
                      Capital:{" "}
                      <span className='font-light'>{country.capital}</span>
                    </p>
                  </div>
                  <div className='mt-10 md:mt-4 md:ml-32'>
                    <p className='font-medium'>
                      Top Level Domain:{" "}
                      <span className='font-light'>
                        {country.topLevelDomain}
                      </span>
                    </p>
                    <p className='mt-3 md:mt-2 font-medium'>
                      Currencies:{" "}
                      {Object.keys(country.currencies).map((key) => (
                        <span key={key} className='font-light'>
                          {country.currencies[key].name}
                        </span>
                      ))}
                    </p>
                    <p className='mt-3 md:mt-2 font-medium'>
                      Languages:{" "}
                      {Object.keys(country.languages).map((key, i) => (
                        <span key={key} className='font-light'>
                          {(i ? ", " : "") + country.languages[key].name}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
                <div className='mt-8 md:mt-12'>
                  <p className='flex flex-wrap md:flex-none md:mt-2 font-medium md:mb-8 md:mb-0 flex-wrap'>
                    Border Countries:{" "}
                    {country.borders.map((border, i) => (
                      <span
                        className={`${
                          i ? "ml-2" : "ml-3"
                        }  sm:mt-8 md:mt-0 mb-3 md:mb-0 font-light text-sm bg-dark-blue py-1 px-4 shadow-md  `}
                      >
                        {border}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CountryDetail;
