"use client";
import { useState } from "react";
import { createIssueDescription, createGithubIssue } from "@/app/actions";
import exp from "constants";
import dynamic from "next/dynamic";
// import IssueEditor from "./IssueEditor";
import IssueEditor from "./IssueEditor";

export interface Concern {
  id: string;
  file: string;
  title: string;
  description: string;
}

export interface IssueState {
  data: string;
  isLoading: boolean;
  error: boolean;
}

export default function AccessibilityConcernCard({
  concern,
  remove,
}: {
  concern: Concern;
  remove: (id: string) => void;
}) {
  //   const [expanded, setExpanded] = useState(false);
  const [issue, setIssue] = useState<IssueState>({
    data: "",
    isLoading: false,
    error: false,
  });

  //   function handleClick() {
  //     setExpanded(expanded => !expanded);
  //   }

  async function createIssue() {
    try {
      const newIssue = await createIssueDescription(concern.file);
      console.log("NEW ISSUE", newIssue);
      setIssue({ data: newIssue, isLoading: false, error: false });
    } catch (error) {
      setIssue({ data: "", isLoading: false, error: true });
    }
  }

  async function postToGithub(title, body, repo) {
    const message= await createGithubIssue(title, body, repo);
    console.log("MESSAGE", message);
    setIssue({ data: message, isLoading: false, error: false });
  }

  function handleCreateIssue() {
    setIssue({ data: "", isLoading: true, error: false });
    createIssue();
  }

  function handleCreateGithubIssue(title, body, repo) {
    setIssue({ data: "", isLoading: true, error: false });
    postToGithub(title, body, repo);
  }
  if (issue.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="bg-purple-100 m-5 rounded-lg p-3 flex items-center"
    >
      <div className="flex-grow">
        {issue.data ? (
          <IssueEditor initialIssue={issue.data} initialTitle={concern.title} create={handleCreateGithubIssue} />
        ) : (
          <>
            <h3>
              <span className="text-red-700">{concern.file}</span>:{" "}
              {concern.title}
            </h3>

            <p>{concern.description}</p>
            <button onClick={handleCreateIssue}>Create Issue</button>
          </>
        )}
      </div>
      <button className="ml-2" onClick={() => remove(concern.id)}>
        X
      </button>
    </div>
  );
}
