"use client";

import IssueEditor from "./IssueEditor";
import AccessibilityConcernDetails from "./AccessibilityConcernDetails";
import { Concern } from "@/types/components";
import Loading from "@/app/loading";

import { useIssueCreation } from "@/hooks/useIssueCreation";

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
  const { issue, handleIssueCreation, handleGithubIssueSubmission } = useIssueCreation();


  if (issue.isLoading) return <Loading />;
  if (issue.isSubmitted) return <div>Issue submitted!</div>;
  if (issue.error) return <div>There was an error: {issue.error}</div>;

  return (
    <div className="flex-grow">
      {issue.data ? (
        <IssueEditor
          initialIssue={issue.data}
          initialTitle={concern.title}
          create={handleGithubIssueSubmission}
          remove={remove}
        />
      ) : (
        <AccessibilityConcernDetails
          concern={concern}
          createIssue={handleIssueCreation}
          remove={remove}
        />
      )}
    </div>
  );
}
