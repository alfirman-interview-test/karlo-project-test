import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Data } from "../App";
import Author from "../components/Author";
import EditorState from "../components/EditorState";
import getStringDate from "../utils/getStringDate";

export default function Blog() {
  const param = useParams();

  const data = useContext(Data);

  let contentData;
  let editorState;

  if (Object.values(Data).length) {
    if (param.title) {
      Object.values(data).forEach((el) => {
        const found = el.find(
          (blog) =>
            blog.title
              .replace(/\W+/g, " ")
              .split(" ")
              .join("_")
              .toLowerCase() === param.title
        );
        if (found) {
          contentData = found;
          editorState = JSON.parse(found.editorState);
        }
      });
    } else {
      contentData = data.weekly_mapid_blog?.length && data.weekly_mapid_blog[0];

      editorState =
        data.weekly_mapid_blog?.length &&
        JSON.parse(data.weekly_mapid_blog[0].editorState);
    }
  }

  return (
    <div className="min-h-[500vh]">
      <div
        className="h-[500px] bg-cover bg-top flex items-end"
        style={{
          background: `${
            Object.values(editorState?.entityMap || {}).length
              ? `linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.733), rgb(255, 255, 255)), url('${editorState.entityMap[0].data.src}') center 38% / cover no-repeat`
              : "linear-gradient(hsla(0,0%,100%,.08),hsla(0,0%,100%,.08),hsla(0,0%,100%,.08),hsla(0,0%,100%,.73),#fff),linear-gradient( 0deg ,#00f260,#0575e6)"
          } `,
        }}
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-24 mx-auto w-5/6">
          {contentData?.title}
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="w-5/6 lg:w-1/3">
          <Author
            pp={contentData?.authors[0].user?.profile_picture.url_compressed}
            name={contentData?.authors[0].user?.full_name}
            date={getStringDate(contentData?.authors[0].join_at)}
          />
          <EditorState editorState={editorState} />
        </div>
      </div>
    </div>
  );
}
