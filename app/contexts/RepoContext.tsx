"use client";

import { ReactNode, useState, createContext, useContext} from "react";


type RepoContextType = {
    repo: string;
    setRepo: (repo: string) => void;
}

// context that stores the repository
export const RepoContext = createContext<RepoContextType | undefined>(undefined);

/** cutsom hook to that raises an error if context isn't set; passes context along otherwise */
export function useRepo() {
    const context = useContext(RepoContext);
    if (!context) {
        throw new Error("useRepo must be used within a RepoProvider");
    }
    return context;
}

/**the repo context provider. Makes repo and setRepo available to all its child components */
export function RepoProvider({children}: {children: ReactNode}) {
    const [repo, setRepo] = useState("");

    return(
        <RepoContext.Provider value={{repo, setRepo}}>
            {children}
        </RepoContext.Provider>
    )
}