import axios from "axios";

export const getCountries = async () => {
  try {
    const { data } = await axios.get("https://restcountries.eu/rest/v2/all");

    return data;
  } catch (error) {
    console.log(error);
  }
};
