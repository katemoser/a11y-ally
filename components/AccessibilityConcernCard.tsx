"use client";
import { useState } from "react";
import { createIssueDescription, createGithubIssue } from "@/app/actions";
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
  isSubmitted: boolean;
  error: boolean;
}

export default function AccessibilityConcernCard({
  concern,
  remove,
}: {
  concern: Concern;
  remove: () => void;
}) {
  //   const [expanded, setExpanded] = useState(false);
  const [issue, setIssue] = useState<IssueState>({
    data: "",
    isLoading: false,
    isSubmitted: false,
    error: false,
  });

  //   function handleClick() {
  //     setExpanded(expanded => !expanded);
  //   }

  async function createIssue() {
    try {
      const newIssue = await createIssueDescription(concern.file);
      console.log("NEW ISSUE", newIssue);
      setIssue({
        data: newIssue,
        isLoading: false,
        isSubmitted: false,
        error: false,
      });
    } catch (error) {
      setIssue({ data: "", isLoading: false, isSubmitted: false, error: true });
    }
  }

  async function postToGithub(title, body, repo) {
    const message = await createGithubIssue(title, body, repo);
    console.log("MESSAGE", message);
    // if successful, set isSubmitted to true
    setIssue({ data: "", isLoading: false, isSubmitted: true, error: false });
  }

  function handleCreateIssue(e) {
    e.preventDefault();
    setIssue({ data: "", isLoading: true, isSubmitted: false, error: false });
    createIssue();
  }

  function handleCreateGithubIssue(title, body, repo) {
    setIssue({ data: "", isLoading: true, isSubmitted: false, error: false });
    postToGithub(title, body, repo);
  }
  //   if (issue.isLoading) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <div className="bg-purple-100 m-5 rounded-lg p-3 flex items-center">
      <div className="flex-grow">
        {issue.isLoading && <div>Loading...</div>}

        {issue.isSubmitted && (
            <div>
            <div>Issue submitted! </div>
            <button onClick={remove}>NEXT ISSUE</button>
            </div>
        )}

        {issue.error && <div>There was an error</div>}
        {issue.data && (
          <IssueEditor
            initialIssue={issue.data}
            initialTitle={concern.title}
            create={handleCreateGithubIssue}
            remove={remove}
          />
        )}

        {!issue.data && !issue.isLoading && !issue.error && !issue.isSubmitted && (
          <>
            <h3>
              <span className="text-red-700">{concern.file}</span>:{" "}
              {concern.title}
            </h3>

            <p>{concern.description}</p>
            <div className="flex justify-center my-5">
              <button
                className="bg-green-500 rounded-sm px-2 py-1"
                onClick={handleCreateIssue}
              >
                Create Issue
              </button>
              <button
                className=" bg-red-400 rounded-sm px-2 py-1"
                onClick={remove}
              >
                Not Today
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
