"use server";
import Loading from "@/app/loading";
// const baseUrl = process.env.GREPTILE_API_BASE_URL;
// const gitHubToken = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;
// const greptileApiKey = process.env.GREPTILE_API_KEY;
import { getAccessibilityConcerns } from "@/app/actions";
import AccessibilityConcernCard from "@/components/AccessibilityConcernCard";
import AccessibilityConcernCardList from "@/components/AccessibilityConcernCardList";
import AccessibilityConcernCardDeck from "@/components/AccessibilityConcernCardDeck";


export default async function AccessibilityConcerns({
    params,
  }: {
    params: { repo: string };
  }) {
    const repo = params.repo;
    console.log(repo);

    const concerns = await getAccessibilityConcerns(repo);

    return (
        <div>
        <AccessibilityConcernCardDeck initialConcerns={concerns} />
      </div>
    );
  }
