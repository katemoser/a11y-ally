"use client";
import { useState } from "react";
export interface Concern {
  id: string;
  issueTitle: string;
  issueDescription: string;
  issueFile: string;
  issueLines: string;
  sourceCode: string;
  solutionDescription: string;
  codeSolution: string;
}

export default function AccessibilityConcernCard({
  concern,
  remove
}: {
  concern: Concern;
  remove: (id:string) => void;
}) {
  const [expanded, setExpanded] = useState(false);

  function handleClick() {
    setExpanded(!expanded);
  }

  return (
    <div
      className="bg-purple-100 m-5 rounded-lg p-3 flex items-center"
      onClick={handleClick}
    >
      <div className="flex-grow">
        <h3 className="text-red-700">{concern.issueTitle}</h3>
        <p>{concern.issueDescription}</p>
        {expanded && (
          <>
            <p>Located in: {concern.issueFile}</p>
            <p>On these lines: {concern.issueLines}</p>
            <p>Solution:</p>
            <p>{concern.solutionDescription}</p>
          </>
        )}
      </div>
      <button className="ml-2" onClick={()=>remove(concern.id)}>
        X
      </button>
    </div>
  );
}
// export default function AccessibilityConcernCard({concern, deleteConcern}) {
//     return (
//         <div className="bg-purple-100 m-5 rounded-lg p-3 flex items-center">
//             <div className="flex-grow">
//                 <h3 className="text-red-700">{concern.issueTitle}</h3>
//                 <p>{concern.issueDescription}</p>
//             </div>
//             <button className="ml-2" onClick={deleteConcern}>X</button>
//         </div>
//     );
// }
