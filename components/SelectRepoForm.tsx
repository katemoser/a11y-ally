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
          className="border border-gray-300 rounded "
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
