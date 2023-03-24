import { useRouter } from "next/router";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function BackButton() {
  const router = useRouter();

  function handleClick() {
    router.back();
  }

  return (
    <>
      <ArrowLeftIcon onClick={handleClick} className="h-12 w-12 text-purple" />
    </>
  );
}
