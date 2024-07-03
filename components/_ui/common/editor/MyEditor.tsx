import React, { useEffect, useState } from 'react';
import { Editor, EditorState, convertToRaw, RichUtils } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

const MyEditor: React.FC = () => {
  const [editorState, setEditorState] = useState<EditorState>(() => EditorState.createEmpty());
  const [currentColor, setCurrentColor] = useState<string>('black'); // State for current text color

  const handleEditorChange = (state: EditorState) => {
    setEditorState(state);
  };

  const toggleInlineStyle = (style: string) => {
    handleEditorChange(RichUtils.toggleInlineStyle(editorState, style));
  };

  const toggleBlockType = (blockType: string) => {
    handleEditorChange(RichUtils.toggleBlockType(editorState, blockType));
  };

  const changeTextColor = (color: string) => {
    setCurrentColor(color);
    handleEditorChange(RichUtils.toggleInlineStyle(editorState, 'COLOR-' + color.toUpperCase()));
  };

  const exportHtml = () => {
    const rawContentState = convertToRaw(editorState.getCurrentContent());
    const html = draftToHtml(rawContentState);
    console.log(html);
  };

  useEffect(() => {
    setEditorState(EditorState.createEmpty());
  }, []);

  return (
    <div className="prose">
      <div className="editor-controls mb-2">
        <button className="btn btn-secondary mr-2" onClick={() => toggleInlineStyle('BOLD')}>
          Bold
        </button>
        <button className="btn btn-secondary mr-2" onClick={() => toggleInlineStyle('ITALIC')}>
          Italic
        </button>
        <button className="btn btn-secondary mr-2" onClick={() => toggleBlockType('unordered-list-item')}>
          Bullet List
        </button>
        <button className="btn btn-secondary mr-2" onClick={() => toggleBlockType('header-two')}>
          Heading
        </button>
        <div className="color-picker">
          <button className="btn btn-secondary mr-2" onClick={() => changeTextColor('black')}>
            Black Text
          </button>
          <button className="btn btn-secondary mr-2" onClick={() => changeTextColor('red')}>
            Red Text
          </button>
          {/* Add more color options as needed */}
        </div>
      </div>
      <Editor
        editorState={editorState}
        onChange={handleEditorChange}
        placeholder="Start typing..."
        customStyleMap={{
          // Define custom styles for colors
          'COLOR-BLACK': {
            color: 'black',
          },
          'COLOR-RED': {
            color: 'red',
          },
          // Add more colors here
        }}
      />
      <button className="mt-4 btn btn-primary" onClick={exportHtml}>
        Export HTML
      </button>
    </div>
  );
};

export default MyEditor;
