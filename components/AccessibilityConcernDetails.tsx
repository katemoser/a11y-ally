"use client";

import { Concern } from "@/types/components";
import { useContext } from "react";
import { useRepo } from "@/app/contexts/RepoContext";

interface AccessibilityConcernDetailsProps {
  concern: Concern;
  createIssue: (file: string, repo: string) => void;
  remove: () => void;
}

export default function AccessibilityConcernDetails({
  concern,
  createIssue,
  remove,
}: AccessibilityConcernDetailsProps) {

  const { repo } = useRepo();

  return (
    <main className="card p-3 space-y-4">
      <h2 className="text-sm text-accent font-semibold">{concern.file}</h2>
      <h1 className="card-title">{concern.title}</h1>

      <section className="card-body text-pretty whitespace-pre-wrap bg-base-100 rounded-md">
        <p>{concern.description}</p>
        <div className="flex justify-right mt-4 space-x-10">
          <button
            className="btn btn-primary"
            onClick={() => createIssue(concern.file, repo)}
            aria-label="Generate issue Markdown for this concern"
          >
            Generate Issue
          </button>
          <button
            className="btn btn-warning"
            onClick={remove}
            aria-label="Dismiss this concern and go to the next"
          >
            Not Today
          </button>
        </div>
      </section>
    </main>
  );
}
