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
    <div>
      <h3>Enter the URL of the repo you'd like to create issues for: </h3>
      <form>
        <p>
          github.com/
          <input
            type="text"
            id="repo"
            onChange={(e) => setRepo(e.target.value)}
          />
        </p>
        <button
          type="submit"
          className="text-white bg-green-600 rounded-lg px-2"
          onClick={handleSubmit}
        >
          Check for accessibility concerns
        </button>
      </form>
    </div>
  );
}
