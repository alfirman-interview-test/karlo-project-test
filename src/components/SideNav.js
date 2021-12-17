import { useContext } from "react";
import { Link } from "react-router-dom";
import { Data } from "../App";

export default function SideNav({ isSideNavOpened, isHide }) {
  const data = useContext(Data);
  return (
    <div
      className={`${!isSideNavOpened ? "-translate-x-96" : "translate-x-0"} ${
        isHide ? "translate-y-[60vh]" : "translate-y-0"
      } fixed bottom-8 left-8 border border-zinc-300 rounded-2xl shadow w-[300px] h-[520px] bg-zinc-200 transform duration-500 overflow-hidden`}
    >
      <div className="h-full w-full overflow-auto custom-scrollbar">
        <div className="flex justify-center text-slate-800 mt-10">
          <button className="uppercase py-2 px-5 bg-white rounded-full shadow">
            blog
          </button>
        </div>
        <div className="w-5/6 mx-auto mt-5 space-y-5 mb-[75vh]">
          {categories.map((el, idx) => (
            <div key={idx}>
              <button className="text-sm uppercase py-2 px-3 w-full bg-sky-500 text-white rounded-md shadow text-left">
                {el.name}
              </button>
              <ul className="mt-2 space-y-2">
                {Object.values(data).length &&
                  data[el.key].map((e, i) => (
                    <li key={i}>
                      <Link
                        to={
                          "/" +
                          e.title
                            .replace(/\W+/g, " ")
                            .split(" ")
                            .join("_")
                            .toLowerCase()
                        }
                        className="text-sm py-2 px-3 text-left w-full bg-white hover:underline rounded-md shadow inline-block"
                      >
                        {e.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const categories = [
  {
    name: "SEMINAR & WORKSHOP",
    key: "seminar",
  },
  {
    name: "ACHIEVEMENT",
    key: "achievement",
  },
  {
    name: "NEWS",
    key: "news",
  },
  {
    name: "PARTNERSHIP",
    key: "partnership",
  },
  {
    name: "Kompetisi MAPID",
    key: "teknis_kompetisi_mapid",
  },
  {
    name: "Weekly MAPID Blog",
    key: "weekly_mapid_blog",
  },
];
