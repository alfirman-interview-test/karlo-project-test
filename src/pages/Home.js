import { useContext } from "react";
import { Data } from "../App";
import Author from "../components/Author";
import EditorState from "../components/EditorState";
import getStringDate from "../utils/getStringDate";

export default function Home() {
  const data = useContext(Data);
  let contentData;
  let editorState;

  if (data.length) {
    contentData = data[0];
    editorState = JSON.parse(data[0].editorState);
  }

  return (
    <div className="min-h-[500vh]">
      <div
        className="h-[500px] bg-cover bg-top flex items-end px-12"
        style={{
          background: `linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.733), rgb(255, 255, 255)), url('${editorState?.entityMap[0].data.src}') center 38% / cover no-repeat`,
        }}
      >
        <h1 className="text-6xl font-extrabold mb-24">{contentData?.title}</h1>
      </div>
      <div className="flex justify-center">
        <div className="w-1/2">
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
