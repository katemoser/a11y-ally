import SelectRepoForm from "@/components/SelectRepoForm";

import Loading from "@/app/loading";

export default async function IssuesPage() {

  return (
    <div>
      <h1>Issues</h1>

      <SelectRepoForm />
    </div>
  );
}
