import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = process.env.REACT_APP_TMDB_TOKEN;

const headers = {
  Authorization: "Bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
