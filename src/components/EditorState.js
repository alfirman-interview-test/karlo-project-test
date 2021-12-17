export default function EditorState({ editorState }) {
  return (
    <main className="mt-10 text-lg space-y-12">
      <ul className="space-y-6">
        {editorState?.blocks.map((block) => (
          <li key={block.key}>{block.text}</li>
        ))}
      </ul>
      <div className="flex justify-center">
        {editorState?.entityMap.length && (
          <img
            src={editorState?.entityMap[0].data.src}
            alt={editorState?.entityMap[0].data.src}
            className="w-3/4"
          />
        )}
      </div>
      {editorState?.entityMap.length && (
        <a
          href={editorState.entityMap[1].data.link_url}
          className="text-blue-500 hover:underline inline-block"
        >
          {editorState?.entityMap[1].data.link_url}
        </a>
      )}
    </main>
  );
}
