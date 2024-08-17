"use client";

import AccessibilityConcernCard from "./AccessibilityConcernCard";
import { Concern } from "@/types/components";
import { useState } from "react";
import NoConcernsLeft from "./NoConcernsLeft";

export default function AccessibilityConcernCardDeck({
  initialConcerns,
  repo,
}: {
  initialConcerns: Concern[];
  repo: string;
}) {
  const [concerns, setConcerns] = useState(initialConcerns);
  const currentConcern = concerns[0];

  console.log("Card deck rendered, concerns = ", concerns);

  function popConcern() {
    setConcerns((concerns) => concerns.slice(1));
  }
  return (
    <div>
      {concerns.length === 0 ? (
        <NoConcernsLeft />
      ) : (
        <>
          <div className="bg-base-300 m-5 rounded-lg p-3 flex items-center min-h-60">
            <AccessibilityConcernCard
              key={currentConcern.id}
              concern={currentConcern}
              remove={popConcern}
              repo={repo}
            />
          </div>
          <div className="text-right pr-10">
            {" "}
            + {concerns.length - 1} more...
          </div>
        </>
      )}
    </div>
  );
}
