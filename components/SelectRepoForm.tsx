"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function SelectRepoForm() {
  const [repo, setRepo] = useState("");
  const router = useRouter();

  console.log(repo);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    router.push(`/issues/${repo}`);
  }

  return (
    <div >
      <p>Enter the URL of the repo you'd like to create issues for: </p>
      <form>
        <p className="my-4">
          github.com/
          <input
          className="border rounded "
            type="text"
            id="repo"
            onChange={(e) => setRepo(e.target.value)}
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
  );
}
