import BackButton from "./BackButton";

export default function TopBar() {
  return (
    <nav className="fixed w-full border-t">
      <div className="flex justify-between items-center h-16 px-4">
        <BackButton className="flex-none" />
        <h1 className="flex-1 text-right text-white text-4xl font-heading">
          Hope
        </h1>
      </div>
    </nav>
  );
}
