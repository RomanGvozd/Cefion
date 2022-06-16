import React from 'react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
// import {Editor as ClassicEditor} from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'

import './TextEditor.scss'

const TextEditor = ({value, setValue}) => {

    return (
      <div className='text-editor'>
        <CKEditor
          className='text-editor'
          editor={Editor}
          data={value}
          onReady={editor => {
              // You can store the "editor" and use when it is needed.
              console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
              const data = editor.getData();
              setValue(data)
              // console.log({ event, editor, data });

          }}
          onBlur={(event, editor) => {
              // console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
              // console.log('Focus.', editor);
          }}
        />
      </div>
    )
}

export default TextEditor;