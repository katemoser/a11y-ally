import { useState } from "react";
import { createIssueDescription, createGithubIssue } from "@/app/actions";

interface IssueState {
  data: string;
  isLoading: boolean;
  isSubmitted: boolean;
  error: boolean;
}

export function useIssueCreation() {
  const [issue, setIssue] = useState<IssueState>({
    data: "",
    isLoading: false,
    isSubmitted: false,
    error: false,
  });

  async function generateIssueDescription(file: string) {
    try {
      const newIssue = await createIssueDescription(file);
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

  async function submitIssueToGithub(
    title: string,
    body: string,
    repo: string
  ) {
    const message = await createGithubIssue(title, body, repo);
    // console.log("MESSAGE", message);
    setIssue({ data: "", isLoading: false, isSubmitted: true, error: false });
  }

  function handleIssueCreation(file: string) {
    setIssue({ data: "", isLoading: true, isSubmitted: false, error: false });
    generateIssueDescription(file);
  }

  function handleGithubIssueSubmission(
    title: string,
    body: string,
    repo: string
  ) {
    setIssue({ data: "", isLoading: true, isSubmitted: false, error: false });
    submitIssueToGithub(title, body, repo);
  }
  return { issue, handleIssueCreation, handleGithubIssueSubmission };
}
