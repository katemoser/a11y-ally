"use server";

import Loading from "@/app/loading";
import { getAccessibilityConcerns } from "@/app/actions";
import AccessibilityConcernCardDeck from "@/components/AccessibilityConcernCardDeck";
import ErrorMessage from "@/components/ErrorMessage";

export default async function AccessibilityConcerns({
  params,
}: {
  params: { repo: string };
}) {
  const repo = params.repo;
  console.log(repo);

  let concerns = [];
  try {
    concerns = await getAccessibilityConcerns(repo);
  } catch (error) {
    console.error(error); //TODO: log error somehow
    return <ErrorMessage message="There was an error loading the concerns" />;
  }

  //TODO: put repo in context instead of prop drilling with it
  return (
    <div>
      <AccessibilityConcernCardDeck initialConcerns={concerns} repo={repo} />
    </div>
  );
}
