import React, { useEffect, useRef, useState } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface PROPS {
    aiOutput: string;
}

function OutputSection({ aiOutput }: PROPS) {
    const editorRef: any = useRef();
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const editorInstance = editorRef.current.getInstance();
        editorInstance.setMarkdown(aiOutput);
    }, [aiOutput]);

    // Copy the current content of the editor to the clipboard
    const handleCopy = () => {
        setCopied(true);
        const editorInstance = editorRef.current?.getInstance();
        if (editorInstance) {
            const content = editorInstance.getMarkdown();
            navigator.clipboard.writeText(content);
            setTimeout(() => {
                setCopied(false);
            }, 700);
        }
    };

    return (
        <div className='bg-white shadow-lg border rounded-lg p-4 md:p-5'>
            <div className='flex justify-between items-center mb-4'>
                <h2 className='font-bold text-lg md:text-xl'>Your Result</h2>
                <Button 
                    onClick={handleCopy} 
                    className={`flex gap-2 ${copied ? '!bg-green-600' : 'bg-primary'}`}
                >
                    <Copy className="w-4 h-4" />
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                </Button>
            </div>
            <Editor
                ref={editorRef}
                initialValue="Your result will appear here"
                initialEditType="wysiwyg"
                height="400px" // Reduced height for better responsiveness
                useCommandShortcut={true}
                onChange={() => console.log(editorRef.current.getInstance().getMarkdown())}
            />
        </div>
    );
}

export default OutputSection;
