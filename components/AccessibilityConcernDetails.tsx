import { Concern } from "@/types/components";

interface AccessibilityConcernDetailsProps {
    concern: Concern;
    createIssue: (file:string, repo:string) => void;
    remove: () => void;
    repo: string;
}


export default function AccessibilityConcernDetails({ concern, createIssue, remove, repo }:AccessibilityConcernDetailsProps) {
    return (
        <div className="card p-3 space-y-4">
            <div className="text-sm text-error">
                {concern.file}
            </div>
            <div className="card-title">
                {concern.title}
            </div>

            <pre className="card-body text-pretty">{concern.description}</pre>
            <div className="flex justify-right my-5 space-x-10">
                <button
                    className="btn btn-primary"
                    onClick={() => createIssue(concern.file, repo)}
                >
                    Generate Issue
                </button>
                <button
                    className="btn btn-warning"
                    onClick={remove}
                >
                    Not Today
                </button>
            </div>
        </div>
    )
}