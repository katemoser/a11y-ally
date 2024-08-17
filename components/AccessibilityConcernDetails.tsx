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
            <div className="text-sm text-red-700">
                {concern.file}
            </div>
            <div className="card-title">
                {concern.title}
            </div>

            <div className="card-body">{concern.description}</div>
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