"use client";

import AccessibilityConcernCard from "./AccessibilityConcernCard";
import { Concern } from "./AccessibilityConcernCard";
import { useState } from "react";

export default function AccessibilityConcernCardDeck({
  initialConcerns,
}: {
  initialConcerns: Concern[];
}) {
  const [concerns, setConcerns] = useState(initialConcerns);
  const currentConcern = concerns[0];

  console.log("Card deck rendered, concerns = ", concerns);

  function popConcern() {
    setConcerns(concerns => concerns.slice(1));
  }
return (
    <div className="min-h-[75vh]">
        {concerns.length === 0 ? (
            <div>No more concerns</div>
        ) : (
            <div>
                <AccessibilityConcernCard
                    key={currentConcern.id}
                    concern={currentConcern}
                    remove={popConcern}
                />
                {concerns.length - 1} more
            </div>
        )}
    </div>
);
}
