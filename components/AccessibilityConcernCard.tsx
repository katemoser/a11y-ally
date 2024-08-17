"use client";

import IssueEditor from "./IssueEditor";
import AccessibilityConcernDetails from "./AccessibilityConcernDetails";
import { Concern } from "@/types/components";
import Loading from "@/app/loading";

import { useIssueCreation } from "@/hooks/useIssueCreation";
import ErrorMessage from "./ErrorMessage";
import IssueSubmittedMessage from "./IssueSubmittedMessage";

export interface IssueState {
  data: string;
  isLoading: boolean;
  isSubmitted: boolean;
  error: boolean;
}

export default function AccessibilityConcernCard({
  concern,
  remove,
  repo
}: {
  concern: Concern;
  remove: () => void;
  repo: string;
}) {
  const { issue, handleIssueCreation, handleGithubIssueSubmission } = useIssueCreation();


  if (issue.isLoading) return <Loading />;
  if (issue.isSubmitted) return <IssueSubmittedMessage next={remove}/>;
  if (issue.error) return <ErrorMessage message="There was an error while creating your issue"/>;

  return (
    <div className="flex-grow">
      {issue.data ? (
        <IssueEditor
          initialIssue={issue.data}
          initialTitle={concern.title}
          repo={repo}
          create={handleGithubIssueSubmission}
          remove={remove}
        />
      ) : (
        <AccessibilityConcernDetails
          concern={concern}
          createIssue={handleIssueCreation}
          remove={remove}
          repo={repo}
        />
      )}
    </div>
  );
}
