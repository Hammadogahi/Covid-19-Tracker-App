import axios from "axios";

const apiURL = "https://covid19.mathdro.id/api";

const countriesApiURL = "https://corona.lmao.ninja/v2/countries?yesterday&sort";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, countries, deaths, recovered, lastUpdate },
    } = await axios.get(apiURL);
    return { confirmed, countries, deaths, recovered, lastUpdate };
  } catch (err) {
    console.log(err);
  }
};

export const fetchContriesData = async () => {
  try {
    const data = await axios.get(countriesApiURL);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchDailyData = async () => {
  try {
    const dailyData = await axios.get("https://covid19.mathdro.id/api/daily");
    return dailyData;
  } catch (err) {
    console.log(err);
  }
};
