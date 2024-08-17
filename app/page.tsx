import SelectRepoForm from "@/components/SelectRepoForm";
import Loading from "./loading";
import ErrorMessage from "@/components/ErrorMessage";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SelectRepoForm />
    </div>
  );
}
