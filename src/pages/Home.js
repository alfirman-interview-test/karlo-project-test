import { useContext, useEffect, useState } from "react";
import { Data } from "../App";
import Author from "../components/Author";
import EditorState from "../components/EditorState";
import SideNav from "../components/SideNav";
import Toggle from "../components/Toggle";
import useScroll from "../lib/useScroll";
import getStringDate from "../utils/getStringDate";

export default function Home() {
  const [isSideNavOpened, setSideNavOpened] = useState(false); // horizontal
  const [isHide, setHide] = useState(true); // vertical
  const { scrollY } = useScroll();

  const data = useContext(Data);
  let contentData;
  let editorState;

  if (data.length) {
    contentData = data[0];
    editorState = JSON.parse(data[0].editorState);
  }

  useEffect(() => {
    if (scrollY > 300) setHide(false);
    else setHide(true);
  }, [scrollY]);

  return (
    <div className="min-h-[500vh]">
      <SideNav isSideNavOpened={isSideNavOpened} isHide={isHide} />
      <Toggle
        isHide={isHide}
        setHide={setHide}
        setSideNavOpened={setSideNavOpened}
        isSideNavOpened={isSideNavOpened}
      />
      <div
        className="h-[500px] bg-cover bg-top flex items-end"
        style={{
          background: `linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.733), rgb(255, 255, 255)), url('${editorState?.entityMap[0].data.src}') center 38% / cover no-repeat`,
        }}
      >
        <h1 className="text-6xl font-extrabold mb-24 mx-auto w-5/6">
          {contentData?.title}
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="w-1/3">
          <Author
            pp={contentData?.authors[0].user.profile_picture.url_compressed}
            name={contentData?.authors[0].user.full_name}
            date={getStringDate(contentData?.authors[0].join_at)}
          />
          <EditorState editorState={editorState} />
        </div>
      </div>
    </div>
  );
}
