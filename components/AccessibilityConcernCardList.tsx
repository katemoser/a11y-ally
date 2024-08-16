"use client";
import { useState } from "react";
import AccessibilityConcernCard, {Concern} from "./AccessibilityConcernCard";
import { createIssueDescriptions } from "@/app/actions";

export default function AccessibilityConcernCardList({initialConcerns}: {initialConcerns: Concern[];}) {
    const [concerns, setConcerns] = useState<Concern[]>(initialConcerns);

    function deleteConcern(id: string) {
        setConcerns(concerns.filter((concern) => concern.id !== id));
    }
    async function makeIssues() {
        const ids = concerns.map((concern) => concern.id);
        console.log("ids", ids);
        const issues = await createIssueDescriptions(ids);
        console.log("issues", issues);
    }

  return (
    <div>
      {concerns.map((concern) => (
        <AccessibilityConcernCard key={concern.id} concern={concern} remove={deleteConcern}/>
      ))}
      <button className="bg-green-400 rounded-lg p-3" onClick={makeIssues}>Make Issues</button>
    </div>
  );
}