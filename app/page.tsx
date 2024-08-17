import SelectRepoForm from "@/components/SelectRepoForm";
import Loading from "./loading";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SelectRepoForm />
    </div>
  );
}
