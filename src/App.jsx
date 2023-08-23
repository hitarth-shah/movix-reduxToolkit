import "./App.css";
import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/Api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./Store/homeSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/home/Home";
import Footer from "./commonComponents/footer/Footer";
import Header from "./commonComponents/header/Header";
import Details from "./Components/details/Details";
import SearchResult from "./Components/searchResult/SearchResult";
import Explore from "./Components/explore/Explore";
import PageNotFound from "./Components/404/pageNotFound";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    fetchApiConfig();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      console.log("*res", res);

      const url = {
        backdrop: res?.images?.secure_base_url + "original",
        poster: res?.images?.secure_base_url + "original",
        profile: res?.images?.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query " element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
