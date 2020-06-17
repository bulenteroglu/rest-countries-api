import axios from "axios";

export const getCountries = async () => {
  try {
    const { data } = await axios.get("https://restcountries.eu/rest/v2/all");

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCountry = async (searchQuery) => {
  try {
    const { data } = await axios.get(
      `https://restcountries.eu/rest/v2/name/${searchQuery}`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getRegion = async (region) => {
  try {
    const { data } = await axios.get(
      `https://restcountries.eu/rest/v2/region/${region}`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
