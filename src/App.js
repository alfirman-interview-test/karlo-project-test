import { createContext, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

export const Data = createContext();

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.mapid.io/blog/get_list_docs_public/blog")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => console.log("error", e));
  }, []);

  return (
    <BrowserRouter>
      <Data.Provider value={data}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Data.Provider>
    </BrowserRouter>
  );
}

export default App;
