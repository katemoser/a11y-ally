import { Concern } from "@/types/components";

interface AccessibilityConcernDetailsProps {
    concern: Concern;
    createIssue: (file:string, repo:string) => void;
    remove: () => void;
    repo: string;
}


export default function AccessibilityConcernDetails({ concern, createIssue, remove, repo }:AccessibilityConcernDetailsProps) {
    return (
        <main className="card p-3 space-y-4">
            <h2 className="text-sm text-accent font-semibold" >
                {concern.file}
            </h2>
            <h1 className="card-title">
                {concern.title}
            </h1>

            <section className="card-body text-pretty white-pre-wrap">{concern.description}</section>
            <div className="flex justify-right my-5 space-x-10">
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
                    aria-label="Dismiss this concern"
                >
                    Not Today
                </button>
            </div>
        </main>
    )
}