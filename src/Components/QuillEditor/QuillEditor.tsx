import React, { useState, useCallback, useEffect } from 'react';
import { Box } from '@mui/system';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import { useTheme } from '@mui/material';

interface IProps {
  height: number | string;
  placeholder?: string
  onChange: React.Dispatch<React.SetStateAction<string>>
  text:string
}

export const QuillEditor = ({ height, placeholder, onChange ,text}: IProps) => {

  const handleChange = (content: any, delta: any, source: any) => {
    console.log(content)
    onChange(content);
  };

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote', 'code-block'],

      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
      [{ direction: 'rtl' }], // text direction

      [{ align: [] }],

      ['clean'], // remove formatting button
    ],
  };
  return (
    <>
      <Box
        sx={{
          '.ql-editor': {
            overflowY: 'scroll',
            height: height,
          },
          '.ql-editor.ql-blank::before': {
            color: '#444444',
            fontStyle: 'normal'
          },
          '.ql-toolbar.ql-snow': {
            border: 'none',
          },
          '.ql-container.ql-snow': {
            border: 'none',
          },
        }}
      >
        <ReactQuill placeholder={placeholder} value={text} modules={modules} onChange={handleChange} />
      </Box>
    </>
  );
};
