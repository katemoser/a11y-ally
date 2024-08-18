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
}: {
  concern: Concern;
  remove: () => void;
}) {
  const { issue, handleIssueCreation, handleGithubIssueSubmission } = useIssueCreation();


  if (issue.isLoading) return <Loading />;
  if (issue.isSubmitted) return <IssueSubmittedMessage next={remove}/>;
  if (issue.error) return <ErrorMessage message="There was an error while creating your issue"/>;

  return (
    <section className="flex-grow" aria-label="Details on accessibility concern">
      {issue.data ? (
        <IssueEditor
          initialIssue={issue.data}
          initialTitle={concern.title}
          create={handleGithubIssueSubmission}
          remove={remove}
          aria-live="polite"
        />
      ) : (
        <AccessibilityConcernDetails
          concern={concern}
          createIssue={handleIssueCreation}
          remove={remove}
          aria-live="polite"
        />
      )}
    </section>
  );
}
