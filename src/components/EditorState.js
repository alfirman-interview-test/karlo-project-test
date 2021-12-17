export default function EditorState({ editorState }) {
  return (
    <main className="mt-10 text-lg space-y-12">
      <ul className="space-y-6">
        {editorState?.blocks.map((block) => (
          <li key={block.key}>{block.text}</li>
        ))}
      </ul>
      <div className="flex justify-center">
        {Object.values(editorState?.entityMap || {}).length && (
          <img
            src={editorState?.entityMap[0].data.src}
            alt={editorState?.entityMap[0].data.src}
            className="w-3/4"
          />
        )}
      </div>
      <div className="w-full overflow-hidden">
        {Object.values(editorState?.entityMap || {}).length && (
          <a
            href={editorState.entityMap[1]?.data.link_url}
            style={{ overflowWrap: "break-word" }}
            className="text-blue-500 hover:underline"
          >
            {editorState?.entityMap[1]?.data.link_url}
          </a>
        )}
      </div>
    </main>
  );
}
