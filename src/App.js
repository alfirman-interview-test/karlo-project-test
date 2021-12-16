import { createContext, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import SideNav from "./components/SideNav";
import Toggle from "./components/Toggle";
import useScroll from "./lib/useScroll";
import Home from "./pages/Home";

export const Data = createContext();

function App() {
  const [isSideNavOpened, setSideNavOpened] = useState(false); // horizontal
  const [isHide, setHide] = useState(true); // vertical
  const [data, setData] = useState([]);
  const { scrollY } = useScroll();

  useEffect(() => {
    let modified = {};
    fetch("https://api.mapid.io/blog/get_list_docs_public/blog")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((el) => {
          if (!modified[el.sub_bracket]) modified[el.sub_bracket] = [el];
          else modified[el.sub_bracket].push(el);
        });
        setData(modified);
      })
      .catch((e) => console.log("error", e));
  }, []);

  useEffect(() => {
    if (scrollY > 300) setHide(false);
    else setHide(true);
  }, [scrollY]);

  return (
    <Data.Provider value={data}>
      <SideNav isSideNavOpened={isSideNavOpened} isHide={isHide} />
      <Toggle
        isHide={isHide}
        setHide={setHide}
        setSideNavOpened={setSideNavOpened}
        isSideNavOpened={isSideNavOpened}
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:title" component={Home} />
      </Switch>
    </Data.Provider>
  );
}

export default App;
