import './RichTextEditor.css'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useState } from 'react'
const RichTextEditor = () => {
  const [text, setText] = useState('')
  return (
    <div>
      <div className="richText-container">
        <CKEditor editor={ClassicEditor} />
      </div>
    </div>
  )
}

export default RichTextEditor
