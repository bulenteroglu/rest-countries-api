import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Search from "./components/ui/Search";
import Cards from "./components/ui/Cards";
import CountryDetail from "./components/ui/CountryDetail";
import { getCountry, getCountries, getRegion } from "./api";

function App() {
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  const clickOption = (region) => {
    switch (region) {
      case "Africa":
        setSelectedOption("Africa");
        break;
      case "Americas":
        setSelectedOption("Americas");
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
    <Router>
      <div className='bg-very-dark-blue min-h-screen'>
        <Navbar />
        <div className='container mx-auto'>
          {/* <Search handleSearch={handleSearch} clickOption={clickOption} /> */}
          <Route
            exact
            path='/'
            render={(props) => (
              <Search
                {...props}
                data={data}
                handleSearch={handleSearch}
                clickOption={clickOption}
              />
            )}
          />
          <Route
            exact
            path='/'
            render={(props) => <Cards {...props} data={data} />}
          />
        </div>
        <Route path='/country/:id' component={CountryDetail} />
      </div>
    </Router>
  );
}

export default App;
