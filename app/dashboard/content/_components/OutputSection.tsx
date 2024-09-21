import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface PROPS{
  aiOutput:string
}
function OutputSection({aiOutput}:PROPS) {
  const editorRef:any = useRef()
  useEffect(() => {
    const editorInstance = editorRef.current.getInstance()
    editorInstance.setMarkdown(aiOutput);
  }, [aiOutput])

  // Copy the current content of the editor to the clipboard
  const handleCopy = () => {
    const editorInstance = editorRef.current?.getInstance();
    if (editorInstance) {
      const content = editorInstance.getMarkdown();
      navigator.clipboard.writeText(content);
      alert("Content copied to clipboard!");
    }
  };
  return (
    <div className='bg-white shadow-lg border rounded'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-bold text-lg'>
          Your Result
        </h2>
        <Button onClick={handleCopy} className='flex gap-2'>
          <Copy className='w-4 h-4' />Copy
        </Button>
      </div>
      <Editor
        ref = {editorRef}
        initialValue="Your result will appear here"
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
        onChange={() => console.log(editorRef.current.getInstance().getMarkdown())}
      />
    </div>
  )
}

export default OutputSection