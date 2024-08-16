import { Concern } from "@/types/components";

interface AccessibilityConcernDetailsProps {
    concern: Concern;
    createIssue: (file:string) => void;
    remove: () => void;
}


export default function AccessibilityConcernDetails({ concern, createIssue, remove }:AccessibilityConcernDetailsProps) {
    return (
        <>
            <h3>
              <span className="text-red-700">{concern.file}</span>:{" "}
              {concern.title}
            </h3>

            <p>{concern.description}</p>
            <div className="flex justify-center my-5">
              <button
                className="bg-green-500 rounded-sm px-2 py-1"
                onClick={()=> createIssue(concern.file)}
              >
                Create Issue
              </button>
              <button
                className=" bg-red-400 rounded-sm px-2 py-1"
                onClick={remove}
              >
                Not Today
              </button>
            </div>
          </>
    )
}
        // <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        //     <div className="px-4 py-5 sm:px-6">
        //         <h3 className="text-lg font-medium leading-6 text-gray-900">Concern Details</h3>
        //         <p className="mt-1 max-w-2xl text-sm text-gray-500">Details about the accessibility concern.</p>
        //     </div>
        //     <div className="border-t border-gray-200">
        //         <dl>
        //             <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        //                 <dt className="text-sm font-medium text-gray-500">ID</dt>
        //                 <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{concern.id}</dd>
        //             </div>
        //             <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        //                 <dt className="text-sm font-medium text-gray-500">Description</dt>
        //                 <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{concern.description}</dd>
        //             </div>
        //  </dl>
        //     </div>
        // </div>