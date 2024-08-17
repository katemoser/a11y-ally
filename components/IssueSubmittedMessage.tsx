"use client";

export default function IssueSubmittedMessage({next}:{next: ()=>void}) {
    return (
        <div role="alert" className="alert alert-success flex justify-between">
        <span>Issue submitted successfully!</span>

            <button onClick={next} className="btn btn-sm">See Next concern</button>

        </div>
    );
    }