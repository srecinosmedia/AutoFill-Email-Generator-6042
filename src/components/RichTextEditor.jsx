import React from 'react';
import { useEmail } from '../context/EmailContext';
import { FaBold, FaItalic, FaUnderline, FaLink } from 'react-icons/fa';

const RichTextEditor = () => {
  const { emailState, setEmailState } = useEmail();

  const handleFormat = (command) => {
    document.execCommand(command, false, null);
  };

  const handleChange = (e) => {
    setEmailState(prev => ({
      ...prev,
      body: e.target.innerHTML
    }));
  };

  return (
    <div className="border rounded-md overflow-hidden">
      <div className="bg-gray-50 p-2 border-b flex gap-2">
        <button
          type="button"
          onClick={() => handleFormat('bold')}
          className="p-2 hover:bg-gray-200 rounded"
        >
          <FaBold />
        </button>
        <button
          type="button"
          onClick={() => handleFormat('italic')}
          className="p-2 hover:bg-gray-200 rounded"
        >
          <FaItalic />
        </button>
        <button
          type="button"
          onClick={() => handleFormat('underline')}
          className="p-2 hover:bg-gray-200 rounded"
        >
          <FaUnderline />
        </button>
        <button
          type="button"
          onClick={() => {
            const url = prompt('Enter URL:');
            if (url) document.execCommand('createLink', false, url);
          }}
          className="p-2 hover:bg-gray-200 rounded"
        >
          <FaLink />
        </button>
      </div>
      <div
        contentEditable
        className="p-4 min-h-[200px] focus:outline-none"
        dangerouslySetInnerHTML={{ __html: emailState.body }}
        onInput={handleChange}
      />
    </div>
  );
};

export default RichTextEditor;