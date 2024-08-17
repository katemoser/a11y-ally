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
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">No more concerns!</h1>
            <p className="py-6">
              Thank you for using our tool today. We hope you found it helpful, and you learned something new about accessibility.

            </p>
            <a href="/"  className="btn btn-primary">Try Again!</a>
          </div>
        </div>
      {/* </div>
        <div className="hero">
            <div className="hero-content">
        <div>No more concerns</div>
        <a href="/" className="btn btn-primary">Try again!</a>
        </div>*/}
        </div>
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
          <div> and {concerns.length - 1} more</div>
        </>
      )}
    </div>
  );
}
