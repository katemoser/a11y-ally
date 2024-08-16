"use client";

import { useState } from "react";

interface EditorProps {
    initialIssue: string;
    title: string;
    }

export default function IssueEditor({initialIssue, title}: EditorProps) {
    const [markdown, setMarkdown] = useState(initialIssue);

    function handleChange(e) {
        setMarkdown(e.target.value);
    }

return (
    <form>
    <>
        <h1>Title:</h1>
        <input
            type="text"
            value={title}
            onChange={(e) => console.log(e)}
            className="w-full border border-gray-300 rounded p-2"
        />
        <h2>Body:</h2>
        <textarea
            onChange={handleChange}
            value={markdown}
            className="w-full h-500 border border-gray-300 rounded p-2"
        />
    </>
</form>
);
}

// <>
//     <h1>Title:</h1>
//     <input type="text" value={title} onChange={(e) => console.log(e)} />
//     <h2>Body:</h2>
//     <textarea
//         onChange={handleChange}
//         value={markdown}
//         className="w-90 h-500"
//     />
// </>