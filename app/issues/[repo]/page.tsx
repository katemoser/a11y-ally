"use server";
import Loading from "@/app/loading";
import { getAccessibilityConcerns } from "@/app/actions";
import AccessibilityConcernCardDeck from "@/components/AccessibilityConcernCardDeck";


export default async function AccessibilityConcerns({
    params,
  }: {
    params: { repo: string };
  }) {
    const repo = params.repo;
    console.log(repo);

    const concerns = await getAccessibilityConcerns(repo);

    //TODO: put repo in context instead of prop drilling with it
    return (
        <div>
        <AccessibilityConcernCardDeck initialConcerns={concerns} repo={repo}/>
      </div>
    );
  }
