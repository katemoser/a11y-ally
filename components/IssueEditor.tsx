"use client";

import { create } from "domain";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

interface EditorProps {
  initialIssue: string;
  initialTitle: string;
  create: (title: string, body: string, repo: string) => void;
}
 interface IssueState {
    title: string;
    markdown: string;
 }

export default function IssueEditor({
  initialIssue,
  initialTitle,
  create
}: EditorProps) {

  const [formData, setFormData] = useState({title: initialTitle, markdown: initialIssue});

  console.log("formData", formData, "createIssue:", create);
  function handleChange(e) {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitting form, formData:", formData);
    create(formData.title, formData.markdown, "katemoser/one-thing");
    }

  return (
    <form>
      <>
        <h1>Title:</h1>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2"
        />
        <h2>Body:</h2>

        <textarea
            onChange={handleChange}
            name="markdown"
            value={formData.markdown}
            className="w-full h-1000 border border-gray-300 rounded p-2"
        />
       <button onClick ={handleSubmit}>Create Issue on Github</button>
      </>
    </form>
  );
}

// <>
//     <h1>Title:</h1>
//     <input type="text" value={title} onChange={(e) => console.log(e)} />
//     <h2>Body:</h2>
//     <textarea
//         onChange={handleChange}
//         value={markdown}
//         className="w-90 h-500"
//     />
// </>
