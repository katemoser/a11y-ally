"use client";
import { useState } from "react";
import AccessibilityConcernCard, {Concern} from "./AccessibilityConcernCard";

export default function AccessibilityConcernCardList({initialConcerns}: {initialConcerns: Concern[];}) {
    const [concerns, setConcerns] = useState<Concern[]>(initialConcerns);

    function deleteConcern(id: string) {
        setConcerns(concerns.filter((concern) => concern.id !== id));
    }

  return (
    <div>
      {concerns.map((concern) => (
        <AccessibilityConcernCard key={concern.id} concern={concern} remove={deleteConcern}/>
      ))}
    </div>
  );
}