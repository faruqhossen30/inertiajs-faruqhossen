import React from 'react'
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function RichTextEditor({data,setData}) {
    const [value, setValue] = useState('');

    // console.log(value);


    const toolbarOptions = [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],          // custom button values
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
        ['link', 'image', 'video', 'formula'],

        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'align': [] }],

        ['clean']                                         // remove formatting button
    ];

    const module = {
        toolbar: toolbarOptions,
    }


    return (
        <ReactQuill className="h-52 min-w-full" theme="snow" value={data.description} onChange={(e)=> setData('description', e)} modules={module} />
    )
}

export default RichTextEditor
