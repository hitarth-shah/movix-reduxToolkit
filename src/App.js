import "./App.css";
import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/Api";

function App() {
  useEffect(() => {
    fetchApiTesting();
  }, []);
  const fetchApiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log("*res", res);
    });
  };
  return <div className="App">App</div>;
}

export default App;
