import React, { useState, useEffect } from "react";
import Navbar from "./components/ui/Navbar";
import Search from "./components/ui/Search";
import Cards from "./components/ui/Cards";

import { getCountry, getCountries, getRegion } from "./api";

function App() {
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  const clickOption = (region) => {
    switch (region) {
      case "Africa":
        setSelectedOption("Africa");
        break;
      case "America":
        setSelectedOption("America");
        break;
      case "Asia":
        setSelectedOption("Asia");
        break;
      case "Europe":
        setSelectedOption("Europe");
        break;
      case "Oceania":
        setSelectedOption("Oceania");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (selectedOption) {
      const fetchAPi = async () => {
        setData(await getRegion(selectedOption));
      };

      fetchAPi();
    }
  }, [selectedOption]);

  const fetchCountries = async () => {
    setData(await getCountries());
  };

  const handleSearch = (searchQuery) => {
    if (searchQuery.length > 2) {
      const fetchAPI = async () => {
        setData(await getCountry(searchQuery));
      };
      fetchAPI();
    } else if (searchQuery.length < 1) {
      fetchCountries();
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className='bg-very-dark-blue min-h-screen'>
      <Navbar />
      <div className='container mx-auto'>
        <Search handleSearch={handleSearch} clickOption={clickOption} />
        <Cards data={data} />
      </div>
    </div>
  );
}

export default App;
