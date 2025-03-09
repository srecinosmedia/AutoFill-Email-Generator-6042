import React from 'react';
import { motion } from 'framer-motion';
import { useEmail } from '../context/EmailContext';
import { FaPaperclip, FaTimes } from 'react-icons/fa';

const AttachmentHandler = () => {
  const { emailState, setEmailState } = useEmail();

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setEmailState(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...files]
    }));
  };

  const removeAttachment = (index) => {
    setEmailState(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <label className="flex items-center gap-2 cursor-pointer bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md">
          <FaPaperclip />
          <span>Add Attachments</span>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>

      {emailState.attachments.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {emailState.attachments.map((file, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-md"
            >
              <span className="text-sm">{file.name}</span>
              <button
                type="button"
                onClick={() => removeAttachment(index)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTimes />
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AttachmentHandler;