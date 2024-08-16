"use client";

import AccessibilityConcernCard from "./AccessibilityConcernCard";
import { Concern } from "@/types/components";
import { useState } from "react";

export default function AccessibilityConcernCardDeck({
  initialConcerns,
  repo
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
    <div >
      {concerns.length === 0 ? (
        <>
        <div>No more concerns</div>
        <a href="/">Try again!</a>
        </>
      ) : (
        <>
          <div className="bg-purple-100 m-5 rounded-lg p-3 flex items-center min-h-60">
            <AccessibilityConcernCard
              key={currentConcern.id}
              concern={currentConcern}
              remove={popConcern}
              repo={repo}
            />
          </div>
          <div> and {concerns.length - 1} more</div>
        </>
      )}
    </div>
  );
}
