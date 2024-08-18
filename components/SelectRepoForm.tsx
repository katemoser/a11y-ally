"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useRepo } from "@/app/contexts/RepoContext";

export default function SelectRepoForm() {
  const [formData, setFormData] = useState("");
  const router = useRouter();
  const {setRepo} = useRepo();

  // console.log(repo);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setRepo(formData);
    router.push(`/issues/${formData}`); // TODO: Change the name here, I don't like it!
  }

  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-lg">
      <h1 className="text-5xl font-bold">Accessibility Audit</h1>
      <p className="py-6 text-lg">Enter the URL of the repo you'd like to audit for accessibility:</p>
      <form>
        <p className="mb-10 text-xl">
          github.com/{process.env.NEXT_PUBLIC_GITHUB_USERNAME}/
          <input
          className="border rounded "
            type="text"
            id="repo"
            onChange={(e) => setFormData(e.target.value)}
          />
        </p>
        <button
          type="submit"
          className="btn btn-primary rounded-lg px-2"
          onClick={handleSubmit}
        >
          Check for accessibility concerns
        </button>
      </form>
      </div>
      </div>
    </div>
  );
}
