"use client";

import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

interface EditorProps {
  initialIssue: string;
  initialTitle: string;
  create: (title: string, body: string, repo: string) => void;
  remove: () => void;
}
interface IssueState {
  title: string;
  markdown: string;
}

export default function IssueEditor({
  initialIssue,
  initialTitle,
  create,
  remove,
}: EditorProps) {
  const [title, setTitle] = useState(initialTitle);
  const [markdown, setMarkdown] = useState(initialIssue);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    create(title, markdown, "katemoser/one-thing");
  }

  return (
    <div className="h-full flex flex-col">
      <>
        <h1>Title:</h1>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded p-2 bg-slate-900 text-slate-300"
        />
        <h2>Body:</h2>
        <div className="flex-grow">
          <MDEditor value={markdown} onChange={setMarkdown} height="100%" />
        </div>
        <div className="flex justify-center my-5">
          <button
            className="bg-green-500 rounded-sm px-2 py-1"
            onClick={handleSubmit}
          >
            Create Issue on Github
          </button>
          <button className="bg-red-400 rounded-sm px-2 py-1" onClick={remove}>
            Discard Issue
          </button>
        </div>
      </>
    </div>
  );
}
