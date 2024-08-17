"use client";

import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

interface EditorProps {
  initialIssue: string;
  initialTitle: string;
  repo: string;
  create: (title: string, body: string, repo: string) => void;
  remove: () => void;
}

export default function IssueEditor({
  initialIssue,
  initialTitle,
  repo,
  create,
  remove,
}: EditorProps) {
  const [title, setTitle] = useState(initialTitle);
  const [markdown, setMarkdown] = useState(initialIssue);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    create(title, markdown, `${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/${repo}`);
  }

  return (
    <div className="h-full flex flex-col">
      <>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded p-2 bg-[#0c1118] text-slate-300"
        />
        <label htmlFor="body">Body:</label>
        <div className="flex-grow">
          <MDEditor value={markdown} onChange={setMarkdown} height={450} />
        </div>
        <div className="flex justify-right my-5 space-x-10">
          <button
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Create Issue on Github
          </button>
          <button className="btn btn-warning" onClick={remove}>
            Discard Issue
          </button>
        </div>
      </>
    </div>
  );
}
